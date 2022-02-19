"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userData_pb_1 = __importDefault(require("../../grpc/userData_pb"));
const userData_grpc_pb_1 = __importDefault(require("../../grpc/userData_grpc_pb"));
const grpc = __importStar(require("@grpc/grpc-js"));
const _ = __importStar(require("lodash"));
const userDataGrpcClient = new userData_grpc_pb_1.default.AppClient("host.docker.internal:3041", grpc.credentials.createInsecure());
;
const getUser = (req, res, next) => {
    const { idx } = req.body;
    const userDataGrpcRequest = new userData_pb_1.default.DataRequest();
    userDataGrpcRequest.setIdx(idx);
    userDataGrpcClient.getData(userDataGrpcRequest, { desc: "get user data" }, (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        else {
            const row = result.getDataObject();
            let userData;
            if (row) {
                const userData = {
                    idx: row.getIdx(),
                    name: row.getName()
                };
                return res.status(200).json(userData);
            }
            else {
                return res.status(200).json({});
            }
        }
    });
};
const userList = (req, res, next) => {
    const userDataListGrpcRequest = new userData_pb_1.default.DataListRequest();
    userDataGrpcClient.listData(userDataListGrpcRequest, { desc: "get user list data" }, (err, result) => {
        if (err) {
            console.error(err.message);
            return res.status(500).json({ error: err.message });
        }
        else {
            const rows = result.getDataObejctListList();
            const userList = _.map(rows, data => {
                const userData = {
                    idx: data.getIdx(),
                    name: data.getName()
                };
                return userData;
            });
            return res.status(200).json(userList);
        }
    });
};
exports.default = {
    getUser,
    userList
};
