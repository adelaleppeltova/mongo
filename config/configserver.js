#!/bin/bash

mongosh << EOF;
var config = {
  _id: "rs-config-server",
  configsvr: true,
  version: 1,
  members: [
    {
      _id: 0,
      host: "configsvr01:27017",
      priority: 1,
    },
  ],
};
rs.initiate(config, { force: true });
EOF;
