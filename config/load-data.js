// Enable sharding for database `MyDatabase`
sh.enableSharding("database");

// Setup shardingKey for collection `MyCollection`**
db.adminCommand({
  shardCollection: "database.collection",
  key: { oemNumber: "hashed", zipCode: 1, supplierId: 1 },
});

// Enable sharding for database `MyDatabase`
sh.enableSharding("data");

// Setup shardingKey for collection `MyCollection`**
db.adminCommand({
  shardCollection: "data.users",
  key: { oemNumber: "hashed", zipCode: 1, supplierId: 1 },
});
