#!/bin/bash

#Start container
docker-compose up -d

# Wait for MongoDB containers to be fully up and running
sleep 15

docker-compose exec configsvr01 bash "/config/configserver.js"

docker-compose exec shard01-a bash "/config/shard1.js"
docker-compose exec shard02-a bash "/config/shard2.js"
docker-compose exec shard03-a bash "/config/shard3.js"

docker-compose exec router01 sh -c "mongosh < /config/router.js"

docker-compose exec configsvr01 bash "/config/auth.js"

docker-compose exec shard01-a bash "/config/auth.js"
docker-compose exec shard02-a bash "/config/auth.js"
docker-compose exec shard03-a bash "/config/auth.js"

chmod +x /config/auth.js

docker-compose exec router01 mongosh --port 27017 -u "admin" --authenticationDatabase admin

