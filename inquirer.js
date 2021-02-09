const inquirer = require("inquirer");

module.exports = {
  askQuery: () => {
    const questions = [
      {
        name: "query",
        type: "input",
        message: "Enter SQL query:",
        validate: function (value) {
          if (value.length) {
            return true;
          } else {
            return "Please enter SQL query.";
          }
        },
      },
    ];
    return inquirer.prompt(questions);
  },
};
