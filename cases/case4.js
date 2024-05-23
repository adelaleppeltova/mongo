// Smazat uživatele s User_ID 4
db.users.deleteOne({ User_ID: 4 });

// Smazat všechny uživatele s hodnocením nižším než 3.0
db.users.deleteMany({ "Feedback/Ratings": { $lt: 3.0 } });

// Smazat uživatele podle emailové adresy
db.users.deleteOne({ Email_Address: "janedoe@example.com" });

// Smazat všechny uživatele s konkrétním oblíbeným žánrem
db.users.deleteMany({ Favorite_Genres: "Horror" });

// Smazat všechny uživatele, kteří nepoužívají žádné zařízení
db.users.deleteMany({ Devices_Used: { $exists: false } });
