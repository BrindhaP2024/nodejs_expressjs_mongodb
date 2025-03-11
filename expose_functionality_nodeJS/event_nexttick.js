// function fetchUserFromDB(userId, callback) {
//     console.log("Fetching user from database...");

//     process.nextTick(() => {
//         const user = { id: userId, name: "AArjun", email: "arjunDeva@gmail.com" };
//         callback(null, user);
//     });
// }

// console.log("Start");

// fetchUserFromDB(101, (err, user) => {
//     if (err) {
//         console.error("Error fetching user:", err);
//     } else {
//         console.log("User fetched:", user);
//     }
// });

// console.log("End");


require('dotenv').config()
