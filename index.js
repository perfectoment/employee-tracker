var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "password",
  database: "employeetracker"
});
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    
  });

  function firstQuestion(){
      inquirer.prompt({
        name: "options",
        type: "list",
        message: "What would you like to do?",
        choices: [
        "View", 
        "Add",
        "Update employee role", "Quit",
        ]

      }).then(function(answer){
        switch(answer.options){
            case "View":
                viewPeople();
                break;
            case "Add":
                addQuestions();
                break;
            case "Update employee role":
                updateRole();
                break;
            default:
            connection.end();
        }
      });
  }

function addQuestions(){
    inquirer.prompt({
        name: "addOptions",
        type: "list",
        message: "What would you like to add??",
        choices: ["Employee", 
        "Role",
        "Department", "Quit",
        ]

      }).then(function(answer){
        switch(answer.addOptions){
            case "Employee":
                addEmployee();
                break;
            case "Role":
                addRole();
                break;
            case "Department":
                addDepartment();
                break;
            default:
            connection.end();
        }
      });


}
function addDepartment(){
    inquirer.prompt({
        name: "depOptions",
        type: "input",
        message: "What is the name of the Department?",

      }).then(function(answer){
       var query = connection.query(
            "INSERT INTO department SET ?",
            [{
                department_name: answer.depOptions,
             
            }],
       
 )
            firstQuestion();
})

} 

function addRole(){
var query = connection.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;


    var deptNames = res.map((department) => department.department_name);
    inquirer.prompt([
    {
        name: "titleRole",
        type: "input",
        message: "What is the title of this role?",
    },
    {
        name:"salaryRole",
        type: "input",
        message: "What is the salary for this position?"   
    },
    {
        name:"deptRole",
        type: "list",
        message: "Please choose a department",
        choices: deptNames
    }

    ]).then(function(answer){
        var idAdder = res.find((department) => department.department_name === answer.deptRole)
        var query = connection.query(
            "INSERT INTO job SET ?",
            [{
                title: answer.titleRole,
                salary: answer.salaryRole,
                department_id: idAdder.id
            }],
)

firstQuestion();
}
)})
}

function addEmployee(){
    var query = connection.query("SELECT * FROM job", (err, res) => {
        if (err) throw err;
        var jobNames = res.map((jobs) => jobs.title);
        inquirer.prompt([
            {
                name: "firstName",
                type: "input",
                message: "What is the first name of this employee?",
            },
            {
                name:"lastName",
                type: "input",
                message: "What is the last name of this employee"   
            },
            {
                name:"empRole",
                type: "list",
                message: "Please choose a role",
                choices: jobNames
            }
        
            ]).then(function(answer){
                var idAdder = res.find((job) => job.title === answer.empRole)
                var query = connection.query(
                    "INSERT INTO employee SET ?",
                    [{
                        first_name: answer.firstName,
                        last_name: answer.lastName,
                        role_id: idAdder.id
                    }],
                    firstQuestion()     )}
)})

}

firstQuestion();