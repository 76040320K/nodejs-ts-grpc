// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var userData_pb = require('./userData_pb.js');

function serialize_grpc_application_DataListRequest(arg) {
  if (!(arg instanceof userData_pb.DataListRequest)) {
    throw new Error('Expected argument of type grpc_application.DataListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_application_DataListRequest(buffer_arg) {
  return userData_pb.DataListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_application_DataListResponse(arg) {
  if (!(arg instanceof userData_pb.DataListResponse)) {
    throw new Error('Expected argument of type grpc_application.DataListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_application_DataListResponse(buffer_arg) {
  return userData_pb.DataListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_application_DataRequest(arg) {
  if (!(arg instanceof userData_pb.DataRequest)) {
    throw new Error('Expected argument of type grpc_application.DataRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_application_DataRequest(buffer_arg) {
  return userData_pb.DataRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_grpc_application_DataResponse(arg) {
  if (!(arg instanceof userData_pb.DataResponse)) {
    throw new Error('Expected argument of type grpc_application.DataResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_grpc_application_DataResponse(buffer_arg) {
  return userData_pb.DataResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AppService = exports.AppService = {
  getData: {
    path: '/grpc_application.App/GetData',
    requestStream: false,
    responseStream: false,
    requestType: userData_pb.DataRequest,
    responseType: userData_pb.DataResponse,
    requestSerialize: serialize_grpc_application_DataRequest,
    requestDeserialize: deserialize_grpc_application_DataRequest,
    responseSerialize: serialize_grpc_application_DataResponse,
    responseDeserialize: deserialize_grpc_application_DataResponse,
  },
  listData: {
    path: '/grpc_application.App/ListData',
    requestStream: false,
    responseStream: false,
    requestType: userData_pb.DataListRequest,
    responseType: userData_pb.DataListResponse,
    requestSerialize: serialize_grpc_application_DataListRequest,
    requestDeserialize: deserialize_grpc_application_DataListRequest,
    responseSerialize: serialize_grpc_application_DataListResponse,
    responseDeserialize: deserialize_grpc_application_DataListResponse,
  },
};

exports.AppClient = grpc.makeGenericClientConstructor(AppService);
