import {
  sendUnaryData,
  ServerDuplexStream,
  ServerReadableStream,
  ServerUnaryCall,
  ServerWritableStream,
  status,
  UntypedHandleCall,
} from '@grpc/grpc-js';
import { randomBytes } from 'crypto';
import { Struct } from 'google-protobuf/google/protobuf/struct_pb';

import { GreeterService, IGreeterServer } from '../../models/helloworld_grpc_pb';
import { CommRequest, CommResponse, HelloRequest, HelloResponse } from '../../models/helloworld_pb';
import { logger, ServiceError } from '../utils';

/**
 * package helloworld
 * service Greeter
 */
class Greeter implements IGreeterServer {
  // Argument of type 'Greeter' is not assignable to parameter of type 'UntypedServiceImplementation'.
  // Index signature is missing in type 'Greeter'.ts(2345)
  [method: string]: UntypedHandleCall;

  public sayHelloComm(call: ServerUnaryCall<CommRequest, CommResponse>, callback: sendUnaryData<CommResponse>): void {
    console.log('comm request');
    const res = new CommResponse();
    res.setCode('this is hello world' + Date.now().toString());
    callback(null, res);
  }

  /**
   * Implements the SayHello RPC method.
   */
  public sayHello(call: ServerUnaryCall<HelloRequest, HelloResponse>, callback: sendUnaryData<HelloResponse>): void {
    logger.info('sayHello', Date.now());

    const res = new HelloResponse();
    const name = call.request.getName();
    logger.info('sayHelloName:', name);

    if (name === 'error') {
      // https://grpc.io/grpc/node/grpc.html#.status__anchor
      return callback(new ServiceError(status.INVALID_ARGUMENT, 'InvalidValue'), null);
    }
    res.setSnakeCase(false);
    res.setMessage('hello world');
    const paramStruct = call.request.getParamStruct();
    const paramListValue = call.request.getParamListValue();
    const paramValue = call.request.getParamValue();
    logger.info('sayHelloStruct:', paramStruct?.toJavaScript());
    logger.info('sayHelloListValue:', paramListValue?.toJavaScript());
    logger.info('sayHelloValue:', paramValue?.toJavaScript());

    if (paramStruct) {
      res.setParamStruct(Struct.fromJavaScript(paramStruct.toJavaScript()));
    }
    res.setParamListValue(paramListValue);
    res.setParamValue(paramValue);

    callback(null, res);
  }

  public sayHelloStreamRequest(call: ServerReadableStream<HelloRequest, HelloResponse>, callback: sendUnaryData<HelloResponse>): void {
    logger.info('sayHelloStreamRequest:', call.getPeer());

    const data: string[] = [];
    call.on('data', (req: HelloRequest) => {
      data.push(`${req.getName()} - ${randomBytes(5).toString('hex')}`);
    }).on('end', () => {
      const res = new HelloResponse();
      res.setMessage(data.join('\n'));

      callback(null, res);
    }).on('error', (err: Error) => {
      callback(new ServiceError(status.INTERNAL, err.message), null);
    });
  }

  public sayHelloStreamResponse(call: ServerWritableStream<HelloRequest, HelloResponse>): void {
    logger.info('sayHelloStreamResponse:', call.request.toObject());

    const name = call.request.getName();

    for (const text of Array(10).fill('').map(() => randomBytes(5).toString('hex'))) {
      const res = new HelloResponse();
      res.setMessage(`${name} - ${text}`);
      call.write(res);
    }
    call.end();
  }

  public sayHelloStream(call: ServerDuplexStream<HelloRequest, HelloResponse>): void {
    logger.info('sayHelloStream:', call.getPeer());

    call.on('data', (req: HelloRequest) => {
      const res = new HelloResponse();
      res.setMessage(`${req.getName()} - ${randomBytes(5).toString('hex')}`);
      call.write(res);
    }).on('end', () => {
      call.end();
    }).on('error', (err: Error) => {
      logger.error('sayHelloStream:', err);
    });
  }
}

export {
  Greeter,
  GreeterService,
};
