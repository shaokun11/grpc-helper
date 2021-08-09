import * as grpcWeb from 'grpc-web';

import * as helloworld_pb from './helloworld_pb';


export class GreeterClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: helloworld_pb.HelloRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: helloworld_pb.HelloResponse) => void
  ): grpcWeb.ClientReadableStream<helloworld_pb.HelloResponse>;

  sayHelloComm(
    request: helloworld_pb.CommRequest,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: helloworld_pb.CommResponse) => void
  ): grpcWeb.ClientReadableStream<helloworld_pb.CommResponse>;

  sayHelloStreamResponse(
    request: helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<helloworld_pb.HelloResponse>;

}

export class GreeterPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  sayHello(
    request: helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<helloworld_pb.HelloResponse>;

  sayHelloComm(
    request: helloworld_pb.CommRequest,
    metadata?: grpcWeb.Metadata
  ): Promise<helloworld_pb.CommResponse>;

  sayHelloStreamResponse(
    request: helloworld_pb.HelloRequest,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<helloworld_pb.HelloResponse>;

}

