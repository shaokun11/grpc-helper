// package: helloworld
// file: helloworld.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as helloworld_pb from "./helloworld_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
    sayHelloComm: IGreeterService_ISayHelloComm;
    sayHelloStreamRequest: IGreeterService_ISayHelloStreamRequest;
    sayHelloStreamResponse: IGreeterService_ISayHelloStreamResponse;
    sayHelloStream: IGreeterService_ISayHelloStream;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse> {
    path: "/helloworld.Greeter/SayHello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<helloworld_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.HelloResponse>;
}
interface IGreeterService_ISayHelloComm extends grpc.MethodDefinition<helloworld_pb.CommRequest, helloworld_pb.CommResponse> {
    path: "/helloworld.Greeter/SayHelloComm";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.CommRequest>;
    requestDeserialize: grpc.deserialize<helloworld_pb.CommRequest>;
    responseSerialize: grpc.serialize<helloworld_pb.CommResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.CommResponse>;
}
interface IGreeterService_ISayHelloStreamRequest extends grpc.MethodDefinition<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse> {
    path: "/helloworld.Greeter/SayHelloStreamRequest";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<helloworld_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.HelloResponse>;
}
interface IGreeterService_ISayHelloStreamResponse extends grpc.MethodDefinition<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse> {
    path: "/helloworld.Greeter/SayHelloStreamResponse";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<helloworld_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.HelloResponse>;
}
interface IGreeterService_ISayHelloStream extends grpc.MethodDefinition<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse> {
    path: "/helloworld.Greeter/SayHelloStream";
    requestStream: true;
    responseStream: true;
    requestSerialize: grpc.serialize<helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<helloworld_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<helloworld_pb.HelloResponse>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer extends grpc.UntypedServiceImplementation {
    sayHello: grpc.handleUnaryCall<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
    sayHelloComm: grpc.handleUnaryCall<helloworld_pb.CommRequest, helloworld_pb.CommResponse>;
    sayHelloStreamRequest: grpc.handleClientStreamingCall<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
    sayHelloStreamResponse: grpc.handleServerStreamingCall<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
    sayHelloStream: grpc.handleBidiStreamingCall<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
}

export interface IGreeterClient {
    sayHello(request: helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    sayHelloComm(request: helloworld_pb.CommRequest, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CommResponse) => void): grpc.ClientUnaryCall;
    sayHelloComm(request: helloworld_pb.CommRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CommResponse) => void): grpc.ClientUnaryCall;
    sayHelloComm(request: helloworld_pb.CommRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CommResponse) => void): grpc.ClientUnaryCall;
    sayHelloStreamRequest(callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    sayHelloStreamRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    sayHelloStreamRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    sayHelloStreamRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    sayHelloStreamResponse(request: helloworld_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_pb.HelloResponse>;
    sayHelloStreamResponse(request: helloworld_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_pb.HelloResponse>;
    sayHelloStream(): grpc.ClientDuplexStream<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
    sayHelloStream(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
    sayHelloStream(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sayHello(request: helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHello(request: helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public sayHelloComm(request: helloworld_pb.CommRequest, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CommResponse) => void): grpc.ClientUnaryCall;
    public sayHelloComm(request: helloworld_pb.CommRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CommResponse) => void): grpc.ClientUnaryCall;
    public sayHelloComm(request: helloworld_pb.CommRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.CommResponse) => void): grpc.ClientUnaryCall;
    public sayHelloStreamRequest(callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    public sayHelloStreamRequest(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    public sayHelloStreamRequest(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    public sayHelloStreamRequest(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: helloworld_pb.HelloResponse) => void): grpc.ClientWritableStream<helloworld_pb.HelloRequest>;
    public sayHelloStreamResponse(request: helloworld_pb.HelloRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_pb.HelloResponse>;
    public sayHelloStreamResponse(request: helloworld_pb.HelloRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<helloworld_pb.HelloResponse>;
    public sayHelloStream(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
    public sayHelloStream(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<helloworld_pb.HelloRequest, helloworld_pb.HelloResponse>;
}
