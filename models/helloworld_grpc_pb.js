// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// https://developers.google.com/protocol-buffers/docs/proto3?hl=ko#json
// https://developers.google.com/protocol-buffers/docs/reference/proto3-spec
'use strict';
var grpc = require('@grpc/grpc-js');
var helloworld_pb = require('./helloworld_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');

function serialize_helloworld_CommRequest(arg) {
  if (!(arg instanceof helloworld_pb.CommRequest)) {
    throw new Error('Expected argument of type helloworld.CommRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_CommRequest(buffer_arg) {
  return helloworld_pb.CommRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_CommResponse(arg) {
  if (!(arg instanceof helloworld_pb.CommResponse)) {
    throw new Error('Expected argument of type helloworld.CommResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_CommResponse(buffer_arg) {
  return helloworld_pb.CommResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloRequest(arg) {
  if (!(arg instanceof helloworld_pb.HelloRequest)) {
    throw new Error('Expected argument of type helloworld.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloRequest(buffer_arg) {
  return helloworld_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloResponse(arg) {
  if (!(arg instanceof helloworld_pb.HelloResponse)) {
    throw new Error('Expected argument of type helloworld.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloResponse(buffer_arg) {
  return helloworld_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// https://developers.google.com/protocol-buffers/docs/style
var GreeterService = exports.GreeterService = {
  sayHello: {
    path: '/helloworld.Greeter/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.HelloRequest,
    responseType: helloworld_pb.HelloResponse,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloResponse,
    responseDeserialize: deserialize_helloworld_HelloResponse,
  },
  sayHelloComm: {
    path: '/helloworld.Greeter/SayHelloComm',
    requestStream: false,
    responseStream: false,
    requestType: helloworld_pb.CommRequest,
    responseType: helloworld_pb.CommResponse,
    requestSerialize: serialize_helloworld_CommRequest,
    requestDeserialize: deserialize_helloworld_CommRequest,
    responseSerialize: serialize_helloworld_CommResponse,
    responseDeserialize: deserialize_helloworld_CommResponse,
  },
  sayHelloStreamRequest: {
    path: '/helloworld.Greeter/SayHelloStreamRequest',
    requestStream: true,
    responseStream: false,
    requestType: helloworld_pb.HelloRequest,
    responseType: helloworld_pb.HelloResponse,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloResponse,
    responseDeserialize: deserialize_helloworld_HelloResponse,
  },
  sayHelloStreamResponse: {
    path: '/helloworld.Greeter/SayHelloStreamResponse',
    requestStream: false,
    responseStream: true,
    requestType: helloworld_pb.HelloRequest,
    responseType: helloworld_pb.HelloResponse,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloResponse,
    responseDeserialize: deserialize_helloworld_HelloResponse,
  },
  sayHelloStream: {
    path: '/helloworld.Greeter/SayHelloStream',
    requestStream: true,
    responseStream: true,
    requestType: helloworld_pb.HelloRequest,
    responseType: helloworld_pb.HelloResponse,
    requestSerialize: serialize_helloworld_HelloRequest,
    requestDeserialize: deserialize_helloworld_HelloRequest,
    responseSerialize: serialize_helloworld_HelloResponse,
    responseDeserialize: deserialize_helloworld_HelloResponse,
  },
};

exports.GreeterClient = grpc.makeGenericClientConstructor(GreeterService);
