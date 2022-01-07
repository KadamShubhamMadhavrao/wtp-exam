const mysql = require("mysql");
const Promise = require("bluebird");
const Connection = require("mysql/lib/Connection");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
const database2 = {
  host: "localhost",
  user: "root",
  password: "12345",
  database: "p1",
};
async function connCheck() {
  const connecton = mysql.createConnection(database2);
  await Connection.connectAsync();
  console.log("Connection successful");
  await Connection.endAsync();
}

connCheck();
async function addUser(user) {
  const connection = mysql.createConnection(database2);
  await connection.connectAsync();
  let sql = "insert into Message(message)values(?)";
  await connection.querysync(sql, [user.message]);
  await connection.endAsync();
  console.log("message added");
}

async function selectUser() {
  const connection = mysql.createConnection(database2);
  await connection.connectAsync();
  let sql = "select * from Message";
  const list = await connection.queryAsync(sql, []);
  await connection.endAsync();
  console.log("message");
  return list;
}
module.exports = { addUser, selectUser };
