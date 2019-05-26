const figlet = require("figlet");
const colors = require("colors");
const mysql = require("mysql");
const Table = require("cli-table");
const inquirer = require("inquirer");

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "jamazondb"
});

// ===================================================

db.connect(function(err) {
  if (err) throw err;
  console.log("connected as ID: ", db.threadId);
  db.query("SELECT * FROM products", function(err, results, fields) {
    if (err) throw err;
    var table = new Table({
      head: [
        "item_id",
        "product_name",
        "department_name",
        "price",
        "stock_quantity"
      ],
      colWidths: [12, 27, 20, 20, 20]
    });
    table.push(
      [results[0].item_id, results[0].product_name, results[0].department_name, results[0].price, results[0].stock_quantity ],
      [results[1].item_id, results[1].product_name, results[1].department_name, results[1].price, results[1].stock_quantity ],
      [results[2].item_id, results[2].product_name, results[2].department_name, results[2].price, results[2].stock_quantity ],
      [results[3].item_id, results[3].product_name, results[3].department_name, results[3].price, results[3].stock_quantity ],
      [results[4].item_id, results[4].product_name, results[4].department_name, results[4].price, results[4].stock_quantity ],
      [results[5].item_id, results[5].product_name, results[5].department_name, results[5].price, results[5].stock_quantity ],
      [results[6].item_id, results[6].product_name, results[6].department_name, results[6].price, results[6].stock_quantity ],
      [results[7].item_id, results[7].product_name, results[7].department_name, results[7].price, results[7].stock_quantity ],
      [results[8].item_id, results[8].product_name, results[8].department_name, results[8].price, results[8].stock_quantity ],
      [results[9].item_id, results[9].product_name, results[9].department_name, results[9].price, results[9].stock_quantity ],
    );

    console.log(table.toString());
  });

  figlet("Jamazon", function(err, data) {
    console.log(data.rainbow);
    inquirer.prompt( questions, function( answers ) {
  console.log("\nOrder receipt:");
  console.log( JSON.stringify(answers, null, "  ") );
});
  });
  
    
});


"use strict";

var questions = [
  {
    type: "input",
    name: "quantity",
    message: "What Is the item id of the product you would like to purchase?",
    validate: function( value ) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number
  },
  {
    type: "input",
    name: "quantity",
    message: "How many do you need",
    validate: function( value ) {
      var valid = !isNaN(parseFloat(value));
      return valid || "Please enter a number";
    },
    filter: Number
  },
  {
    type: "input",
    name: "comments",
    message: "Any comments on your purchase experience",
    default: "Nope, all good!"
  }
];

