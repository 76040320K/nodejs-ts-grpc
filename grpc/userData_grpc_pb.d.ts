// package: grpc_application
// file: userData.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as userData_pb from "./userData_pb";

interface IAppService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getData: IAppService_IGetData;
    listData: IAppService_IListData;
}

interface IAppService_IGetData extends grpc.MethodDefinition<userData_pb.DataRequest, userData_pb.DataResponse> {
    path: "/grpc_application.App/GetData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<userData_pb.DataRequest>;
    requestDeserialize: grpc.deserialize<userData_pb.DataRequest>;
    responseSerialize: grpc.serialize<userData_pb.DataResponse>;
    responseDeserialize: grpc.deserialize<userData_pb.DataResponse>;
}
interface IAppService_IListData extends grpc.MethodDefinition<userData_pb.DataListRequest, userData_pb.DataListResponse> {
    path: "/grpc_application.App/ListData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<userData_pb.DataListRequest>;
    requestDeserialize: grpc.deserialize<userData_pb.DataListRequest>;
    responseSerialize: grpc.serialize<userData_pb.DataListResponse>;
    responseDeserialize: grpc.deserialize<userData_pb.DataListResponse>;
}

export const AppService: IAppService;

export interface IAppServer {
    getData: grpc.handleUnaryCall<userData_pb.DataRequest, userData_pb.DataResponse>;
    listData: grpc.handleUnaryCall<userData_pb.DataListRequest, userData_pb.DataListResponse>;
}

export interface IAppClient {
    getData(request: userData_pb.DataRequest, callback: (error: grpc.ServiceError | null, response: userData_pb.DataResponse) => void): grpc.ClientUnaryCall;
    getData(request: userData_pb.DataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userData_pb.DataResponse) => void): grpc.ClientUnaryCall;
    getData(request: userData_pb.DataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userData_pb.DataResponse) => void): grpc.ClientUnaryCall;
    listData(request: userData_pb.DataListRequest, callback: (error: grpc.ServiceError | null, response: userData_pb.DataListResponse) => void): grpc.ClientUnaryCall;
    listData(request: userData_pb.DataListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userData_pb.DataListResponse) => void): grpc.ClientUnaryCall;
    listData(request: userData_pb.DataListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userData_pb.DataListResponse) => void): grpc.ClientUnaryCall;
}

export class AppClient extends grpc.Client implements IAppClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public getData(request: userData_pb.DataRequest, callback: (error: grpc.ServiceError | null, response: userData_pb.DataResponse) => void): grpc.ClientUnaryCall;
    public getData(request: userData_pb.DataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userData_pb.DataResponse) => void): grpc.ClientUnaryCall;
    public getData(request: userData_pb.DataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userData_pb.DataResponse) => void): grpc.ClientUnaryCall;
    public listData(request: userData_pb.DataListRequest, callback: (error: grpc.ServiceError | null, response: userData_pb.DataListResponse) => void): grpc.ClientUnaryCall;
    public listData(request: userData_pb.DataListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: userData_pb.DataListResponse) => void): grpc.ClientUnaryCall;
    public listData(request: userData_pb.DataListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: userData_pb.DataListResponse) => void): grpc.ClientUnaryCall;
}
