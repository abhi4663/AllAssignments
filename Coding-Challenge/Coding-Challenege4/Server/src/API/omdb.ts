import express from "express";
import request from "request";

// export const apiRouter = express.Router();

export const api = async (req: any, res: any) => {
  var qs = {
    s: "star wars",
    apikey: "cd39ad7",
  };
  request(
    {
      url: "http://www.omdbapi.com",
      qs: qs,
    },
    function (error: any, res: any, body) {
      if (!error && res.statusCode == 200) {
        var dataObj = JSON.parse(body);
        res.send(dataObj.Search);
      }
    }
  );
};
