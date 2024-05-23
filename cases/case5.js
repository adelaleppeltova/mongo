// Agregovat uživatele podle oblíbeného žánru a spočítat počet uživatelů pro každý žánr
db.users.aggregate([
  { $group: { _id: "$Favorite_Genres", count: { $sum: 1 } } },
]);

// Agregovat uživatele podle zařízení a spočítat průměrné hodnocení pro každé zařízení
db.users.aggregate([
  {
    $group: { _id: "$Devices_Used", avgRating: { $avg: "$Feedback/Ratings" } },
  },
]);

// Agregovat uživatele podle lokace a spočítat celkový počet interakcí s podporou
db.users.aggregate([
  {
    $group: {
      _id: "$Location",
      totalInteractions: { $sum: "$Customer_Support_Interactions" },
    },
  },
]);

// Agregovat uživatele podle předplatného plánu a spočítat průměrnou frekvenci používání
db.users.aggregate([
  {
    $group: {
      _id: "$Subscription_Plan",
      avgFrequency: { $avg: "$Usage_Frequency" },
    },
  },
]);

// Agregovat uživatele podle pohlaví a spočítat celkový počet uživatelů pro každé pohlaví
db.users.aggregate([{ $group: { _id: "$Gender", count: { $sum: 1 } } }]);
