// nonSharedSecret
const dotenv = require('dotenv');
dotenv.config();

function getSecretToken() {
  return process.env.SECRET_TOKEN;
}

console.log("The secret token is:", getSecretToken());