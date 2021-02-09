#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const db = require("./db.js");
const inquirer = require("./inquirer.js");

const run = async () => {
  clear();
  console.log(
    chalk.blue(figlet.textSync("SQL!", { horizontalLayout: "full" }))
  );
  await db.init();
  while (true) {
    const response = await inquirer.askQuery();
    console.log(response.query);
    try {
    await db.exec(response.query);
    } catch (e) {
      console.log(e.message);
    }
  }
};

run();
