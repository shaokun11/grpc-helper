/**
 * @fileoverview gRPC-Web generated client stub for helloworld
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.helloworld = require('./helloworld_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.GreeterClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.helloworld.GreeterPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'binary';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.helloworld.HelloRequest,
 *   !proto.helloworld.HelloResponse>}
 */
const methodDescriptor_Greeter_SayHello = new grpc.web.MethodDescriptor(
  '/helloworld.Greeter/SayHello',
  grpc.web.MethodType.UNARY,
  proto.helloworld.HelloRequest,
  proto.helloworld.HelloResponse,
  /**
   * @param {!proto.helloworld.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.helloworld.HelloRequest,
 *   !proto.helloworld.HelloResponse>}
 */
const methodInfo_Greeter_SayHello = new grpc.web.AbstractClientBase.MethodInfo(
  proto.helloworld.HelloResponse,
  /**
   * @param {!proto.helloworld.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.helloworld.HelloResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterClient.prototype.sayHello =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/helloworld.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello,
      callback);
};


/**
 * @param {!proto.helloworld.HelloRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.helloworld.HelloResponse>}
 *     Promise that resolves to the response
 */
proto.helloworld.GreeterPromiseClient.prototype.sayHello =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/helloworld.Greeter/SayHello',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHello);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.helloworld.CommRequest,
 *   !proto.helloworld.CommResponse>}
 */
const methodDescriptor_Greeter_SayHelloComm = new grpc.web.MethodDescriptor(
  '/helloworld.Greeter/SayHelloComm',
  grpc.web.MethodType.UNARY,
  proto.helloworld.CommRequest,
  proto.helloworld.CommResponse,
  /**
   * @param {!proto.helloworld.CommRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.CommResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.helloworld.CommRequest,
 *   !proto.helloworld.CommResponse>}
 */
const methodInfo_Greeter_SayHelloComm = new grpc.web.AbstractClientBase.MethodInfo(
  proto.helloworld.CommResponse,
  /**
   * @param {!proto.helloworld.CommRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.CommResponse.deserializeBinary
);


/**
 * @param {!proto.helloworld.CommRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.helloworld.CommResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.CommResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterClient.prototype.sayHelloComm =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/helloworld.Greeter/SayHelloComm',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloComm,
      callback);
};


/**
 * @param {!proto.helloworld.CommRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.helloworld.CommResponse>}
 *     Promise that resolves to the response
 */
proto.helloworld.GreeterPromiseClient.prototype.sayHelloComm =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/helloworld.Greeter/SayHelloComm',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloComm);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.helloworld.HelloRequest,
 *   !proto.helloworld.HelloResponse>}
 */
const methodDescriptor_Greeter_SayHelloStreamResponse = new grpc.web.MethodDescriptor(
  '/helloworld.Greeter/SayHelloStreamResponse',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.helloworld.HelloRequest,
  proto.helloworld.HelloResponse,
  /**
   * @param {!proto.helloworld.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.helloworld.HelloRequest,
 *   !proto.helloworld.HelloResponse>}
 */
const methodInfo_Greeter_SayHelloStreamResponse = new grpc.web.AbstractClientBase.MethodInfo(
  proto.helloworld.HelloResponse,
  /**
   * @param {!proto.helloworld.HelloRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.helloworld.HelloResponse.deserializeBinary
);


/**
 * @param {!proto.helloworld.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterClient.prototype.sayHelloStreamResponse =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/helloworld.Greeter/SayHelloStreamResponse',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloStreamResponse);
};


/**
 * @param {!proto.helloworld.HelloRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.helloworld.HelloResponse>}
 *     The XHR Node Readable Stream
 */
proto.helloworld.GreeterPromiseClient.prototype.sayHelloStreamResponse =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/helloworld.Greeter/SayHelloStreamResponse',
      request,
      metadata || {},
      methodDescriptor_Greeter_SayHelloStreamResponse);
};


module.exports = proto.helloworld;

