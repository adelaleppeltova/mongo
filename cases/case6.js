// Vytvořit novou kolekci
db.createCollection("new_users");

// Zobrazit všechny kolekce v databázi
db.getCollectionNames();

// Zobrazit informace o kolekci users
db.users.stats();

// Přidat index na pole User_ID pro zrychlení dotazů
db.users.createIndex({ User_ID: 1 });

// Změnit velikost databáze
db.adminCommand({ compact: "users" });
