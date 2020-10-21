# Employee Tracker

I created a program that alows you to enter employee, role, and department information from you company and atoumatically links them together. When "Node Index.js" is entered a series of prompts appear  in the terminal that allow you to see each of those tables, add information to those tables and adjust the roles of employee's when they are promoted. 
## Code Snippet for Employee Tracker SQL 
```
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

  ```


## Built With

* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/en/)
* [Express.js](http://expressjs.com/)
* [MySQL](https://www.mysql.com/)


## Author

* **Ryan Nemec** 

- [Link to Portfolio Site](https://perfectoment.github.io/Ryan-Portfolio/)
- [Link to Github](https://github.com/perfectoment)
- [Link to LinkedIn](https://www.linkedin.com/in/ryan-nemec-5a6b3a66/)