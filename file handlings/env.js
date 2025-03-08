// require("dotenv").config();

// console.log(process.env.api_key);

// console.log(process.env);

// console.log("PORT:", process.env.PORT);
// console.log("DB_HOST:", process.env.DB_HOST);
// console.log("API_KEY:", process.env.API_KEY);


require("dotenv").config({ path: "/home/asplap2983/nodejs/file handlings/.env.production" });

require("dotenv").config({ path: "/home/asplap2983/nodejs/file handlings/.env.production" });

// Accessing environment variables
console.log("PORT:", process.env.port);
console.log("DB_URL:", process.env.db_url);
console.log("API_KEY:", process.env.api_key);

console.log(process.env);
console.log("PORT:", process.env.PORT);
console.log("DB_HOST:", process.env.DB_HOST);

// Print all environment variables (for debugging)
console.log(process.env);
console.log(require.cache);
