#!/bin/bash

mongosh <<EOF
use admin;
db.createUser({user: "admin", pwd: "password", roles:[{role: "root", db: "admin"}]});
exit;
EOF