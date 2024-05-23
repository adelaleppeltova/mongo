// Najít všechny uživatele
db.users.find({});

// Najít všechny uživatele, kteří mají oblíbený žánr "Sci-Fi"
db.users.find({ Favorite_Genres: "Sci-Fi" });

// Najít všechny uživatele, kteří mají skóre hodnocení vyšší než 4.5
db.users.find({ "Feedback/Ratings": { $gt: 4.5 } });

// Najít uživatele podle User_ID
db.users.find({ User_ID: 10 });

// Najít všechny uživatele, kteří používají zařízení "Smart TV"
db.users.find({ Devices_Used: "Smart TV" });
