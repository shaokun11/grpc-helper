import * as jspb from 'google-protobuf'

import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class CommRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): CommRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommRequest): CommRequest.AsObject;
  static serializeBinaryToWriter(message: CommRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommRequest;
  static deserializeBinaryFromReader(message: CommRequest, reader: jspb.BinaryReader): CommRequest;
}

export namespace CommRequest {
  export type AsObject = {
    code: string,
  }
}

export class CommResponse extends jspb.Message {
  getCode(): string;
  setCode(value: string): CommResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CommResponse): CommResponse.AsObject;
  static serializeBinaryToWriter(message: CommResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommResponse;
  static deserializeBinaryFromReader(message: CommResponse, reader: jspb.BinaryReader): CommResponse;
}

export namespace CommResponse {
  export type AsObject = {
    code: string,
  }
}

export class HelloRequest extends jspb.Message {
  getName(): string;
  setName(value: string): HelloRequest;

  getParamStruct(): google_protobuf_struct_pb.Struct | undefined;
  setParamStruct(value?: google_protobuf_struct_pb.Struct): HelloRequest;
  hasParamStruct(): boolean;
  clearParamStruct(): HelloRequest;

  getParamListValue(): google_protobuf_struct_pb.ListValue | undefined;
  setParamListValue(value?: google_protobuf_struct_pb.ListValue): HelloRequest;
  hasParamListValue(): boolean;
  clearParamListValue(): HelloRequest;

  getParamValue(): google_protobuf_struct_pb.Value | undefined;
  setParamValue(value?: google_protobuf_struct_pb.Value): HelloRequest;
  hasParamValue(): boolean;
  clearParamValue(): HelloRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HelloRequest): HelloRequest.AsObject;
  static serializeBinaryToWriter(message: HelloRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloRequest;
  static deserializeBinaryFromReader(message: HelloRequest, reader: jspb.BinaryReader): HelloRequest;
}

export namespace HelloRequest {
  export type AsObject = {
    name: string,
    paramStruct?: google_protobuf_struct_pb.Struct.AsObject,
    paramListValue?: google_protobuf_struct_pb.ListValue.AsObject,
    paramValue?: google_protobuf_struct_pb.Value.AsObject,
  }
}

export class HelloResponse extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): HelloResponse;

  getSnakeCase(): boolean;
  setSnakeCase(value: boolean): HelloResponse;

  getParamStruct(): google_protobuf_struct_pb.Struct | undefined;
  setParamStruct(value?: google_protobuf_struct_pb.Struct): HelloResponse;
  hasParamStruct(): boolean;
  clearParamStruct(): HelloResponse;

  getParamListValue(): google_protobuf_struct_pb.ListValue | undefined;
  setParamListValue(value?: google_protobuf_struct_pb.ListValue): HelloResponse;
  hasParamListValue(): boolean;
  clearParamListValue(): HelloResponse;

  getParamValue(): google_protobuf_struct_pb.Value | undefined;
  setParamValue(value?: google_protobuf_struct_pb.Value): HelloResponse;
  hasParamValue(): boolean;
  clearParamValue(): HelloResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HelloResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HelloResponse): HelloResponse.AsObject;
  static serializeBinaryToWriter(message: HelloResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HelloResponse;
  static deserializeBinaryFromReader(message: HelloResponse, reader: jspb.BinaryReader): HelloResponse;
}

export namespace HelloResponse {
  export type AsObject = {
    message: string,
    snakeCase: boolean,
    paramStruct?: google_protobuf_struct_pb.Struct.AsObject,
    paramListValue?: google_protobuf_struct_pb.ListValue.AsObject,
    paramValue?: google_protobuf_struct_pb.Value.AsObject,
  }
}

