import { Request, Response, NextFunction } from "express";
import messages from "../../generated/userData_pb";
import services from "../../generated/userData_grpc_pb";
import * as grpc from "@grpc/grpc-js";
import * as _ from "lodash";

const userDataGrpcClient = new services.AppClient("host.docker.internal:3041", grpc.credentials.createInsecure());

interface userIdx {
  idx: number;
}

interface User {
  idx: number;
  name: string;
};

const getUser = (req: Request, res: Response, next: NextFunction) => {
  const {idx}: userIdx = req.body;
  const userDataGrpcRequest = new messages.DataRequest()
  userDataGrpcRequest.setIdx(idx)
  userDataGrpcClient.getData(userDataGrpcRequest, {desc: "get user data"}, (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json(
        {error: err.message}
      )
    } else {
      const row = result.getDataObject();
      let userData: User;
      if (row) {
        const userData: User = {
          idx: row.getIdx(),
          name: row.getName()
        }
        return res.status(200).json(userData);
      } else {
        return res.status(200).json({});
      }
    }
  })
};

const userList = (req: Request, res: Response, next: NextFunction) => {
  const userDataListGrpcRequest = new messages.DataListRequest()
  userDataGrpcClient.listData(userDataListGrpcRequest, {desc: "get user list data"}, (err, result) => {
    if (err) {
      console.error(err.message);
      return res.status(500).json(
        {error: err.message}
      )
    } else {
      const rows = result.getDataObejctListList();
      const userList: User[] = _.map(rows, data => {
        const userData: User = {
          idx: data.getIdx(),
          name: data.getName()
        }
        return userData
      })
      return res.status(200).json(userList)
    }
  })
};

export default {
  getUser,
  userList
};