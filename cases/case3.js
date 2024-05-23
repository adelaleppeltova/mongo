// Aktualizovat e-mailovou adresu uživatele s User_ID 1
db.users.updateOne(
  { User_ID: 1 },
  { $set: { Email_Address: "newemail@example.com" } }
);

// Přidat nové pole do dokumentu uživatele s User_ID 2
db.users.updateOne({ User_ID: 2 }, { $set: { New_Field: "New Value" } });

// Zvýšit hodnocení uživatele s User_ID 3 o 0.5
db.users.updateOne({ User_ID: 3 }, { $inc: { "Feedback/Ratings": 0.5 } });

// Nastavit manuální obnovu pro všechny uživatele s ročním plánem
db.users.updateMany(
  { Subscription_Plan: "Annual" },
  { $set: { Renewal_Status: "Manual" } }
);

// Aktualizovat umístění pro všechny uživatele v konkrétním městě
db.users.updateMany(
  { Location: "Chicago" },
  { $set: { Location: "New Chicago" } }
);
