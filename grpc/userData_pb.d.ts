// package: grpc_application
// file: userData.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class DataSet extends jspb.Message { 
    getIdx(): number;
    setIdx(value: number): DataSet;
    getName(): string;
    setName(value: string): DataSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataSet.AsObject;
    static toObject(includeInstance: boolean, msg: DataSet): DataSet.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataSet, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataSet;
    static deserializeBinaryFromReader(message: DataSet, reader: jspb.BinaryReader): DataSet;
}

export namespace DataSet {
    export type AsObject = {
        idx: number,
        name: string,
    }
}

export class DataRequest extends jspb.Message { 
    getIdx(): number;
    setIdx(value: number): DataRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DataRequest): DataRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataRequest;
    static deserializeBinaryFromReader(message: DataRequest, reader: jspb.BinaryReader): DataRequest;
}

export namespace DataRequest {
    export type AsObject = {
        idx: number,
    }
}

export class DataResponse extends jspb.Message { 

    hasDataObject(): boolean;
    clearDataObject(): void;
    getDataObject(): DataSet | undefined;
    setDataObject(value?: DataSet): DataResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DataResponse): DataResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataResponse;
    static deserializeBinaryFromReader(message: DataResponse, reader: jspb.BinaryReader): DataResponse;
}

export namespace DataResponse {
    export type AsObject = {
        dataObject?: DataSet.AsObject,
    }
}

export class DataListRequest extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DataListRequest): DataListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataListRequest;
    static deserializeBinaryFromReader(message: DataListRequest, reader: jspb.BinaryReader): DataListRequest;
}

export namespace DataListRequest {
    export type AsObject = {
    }
}

export class DataListResponse extends jspb.Message { 
    clearDataObejctListList(): void;
    getDataObejctListList(): Array<DataSet>;
    setDataObejctListList(value: Array<DataSet>): DataListResponse;
    addDataObejctList(value?: DataSet, index?: number): DataSet;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DataListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DataListResponse): DataListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DataListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DataListResponse;
    static deserializeBinaryFromReader(message: DataListResponse, reader: jspb.BinaryReader): DataListResponse;
}

export namespace DataListResponse {
    export type AsObject = {
        dataObejctListList: Array<DataSet.AsObject>,
    }
}
