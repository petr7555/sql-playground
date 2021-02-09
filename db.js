const { Client } = require("pg");
const config = {
  user: "postgres",
  password: "",
  database: "sql-playground",
  host: "localhost",
  port: 5432,
};

const client = new Client(config);

module.exports = {
  init: async () => {
    await client.connect();

    await client.query("DROP TABLE IF EXISTS users");
    await client.query("DROP TABLE IF EXISTS countries");

    await client.query(
        "CREATE TABLE countries (" +
        "id serial PRIMARY KEY," +
        "country_name VARCHAR ( 50 ) UNIQUE NOT NULL" +
        ");"
    );

    await client.query(
      "CREATE TABLE users (" +
        "id serial PRIMARY KEY," +
        "user_name VARCHAR ( 50 ) UNIQUE NOT NULL," +
        "country_id INT NOT NULL" +
        // ",FOREIGN KEY (country_id)" +
        // "      REFERENCES countries (id)" +
        ");"
    );

    await client.query("INSERT INTO countries (country_name) VALUES('USA')");
    await client.query("INSERT INTO countries (country_name) VALUES('Czechia')");
    await client.query("INSERT INTO users ( user_name, country_id) VALUES('John', 1)");
    await client.query("INSERT INTO users ( user_name, country_id) VALUES('Anne', 3)");
  },
  exec: async (query) =>
    client.query(query).then((res) => console.log(res.rows)),
};
