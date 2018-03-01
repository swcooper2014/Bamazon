var inquirer  = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'bamazon_db'
});

connection.connect();

function start(){
  inquirer.prompt([{
    type: "list",
    name: "doThing",
    message: "What would you like to do?",
    choices: ["View Product Sales by Department", "Create New Department", "End Session"]
  }]).then(function(ans){
    switch(ans.doThing){
      case "View Product Sales by Department": viewProductByDept();
      break;
      case "Create New Department": createNewDept();
      break;
      case "End Session": console.log('Bye!');
    }
  });
}


function viewProductByDept(){
  
  connection.query('SELECT * FROM departments', function(err, res){
    if(err) throw err;
    console.log('Product Sales by Department');
    console.log('----------------------------------------------------------------------------------------------------')

    for(var i = 0; i<res.length;i++){
      console.log("Department ID: " + res[i].department_id + " | " + "Department Name: " + res[i].department_name + " | " + "Over Head Cost: " + (res[i].over_head_costs).toFixed(2) + " | " + "Product Sales: " + (res[i].total_sales).toFixed(2) + " | " + "Total Profit: " + (res[i].total_sales - res[i].over_head_costs).toFixed(2));
      console.log('--------------------------------------------------------------------------------------------------')
    }
    start();
  })
}

  
  function createNewDept(){
    console.log('Creating New Department');
    
    inquirer.prompt([
    {
      type: "input",
      name: "deptName",
      message: "Department Name: "
    }, {
      type: "input",
      name: "overHeadCost",
      message: "Over Head Cost: ",
      default: 0,
      validate: function(val){
        if(isNaN(val) === false){return true;}
        else{return false;}
      }
    }, {
      type: "input",
      name: "prodSales",
      message: "Product Sales: ",
      default: 0,
      validate: function(val){
        if(isNaN(val) === false){return true;}
        else{return false;}
      }
    }
    ]).then(function(ans){
      connection.query('INSERT INTO departments SET ?',{
        department_name: ans.deptName,
        over_head_costs: ans.overHeadCost,
        total_sales: ans.prodSales
      }, function(err, res){
        if(err) throw err;
        console.log('Another department was added.');
      })
      start();
    });
  }

start();