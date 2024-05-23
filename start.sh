cd mongo

#Start container
docker-compose up -d

// Připojení ke kontejneru „configsvr01“ a spuštění mongosh
docker-compose exec configsvr01 mongosh
docker-compose exec shard01-a mongosh

docker-compose exec configsvr01 bash "/config/configserver.js"

docker-compose exec shard01-a bash "/config/shard1.js"
docker-compose exec shard02-a bash "/config/shard2.js"

docker-compose exec router01 sh -c "mongosh < /config/router.js"

docker-compose exec configsvr01 bash "/config/auth.js"
docker-compose exec shard01-a bash "/config/auth.js"
docker-compose exec shard02-a bash "/config/auth.js"

docker-compose exec router01 sh -c "mongosh < /config/load-data.js"

python3 convert-data-to-json.py

docker cp amazon_prime_users.csv router-01:/amazon_prime_users.csv
docker cp amazon_prime_users.json router-01:/amazon_prime_users.json

docker exec -it router-01 bash

mongoimport --db data --collection users --file /amazon_prime_users.json --jsonArray
mongoimport --host router-01 --port 27017 --db database --collection collection --type csv --headerline --file /amazon_prime_users.csv

mongosh

use data;

db.users.find().pretty();

docker-compose exec router01 mongosh --port 27017 -u "admin" --authenticationDatabase admin

