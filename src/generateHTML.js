const { Employee, Manager, Engineer, Intern } = require("../lib/employee");
//GenerateHTML object
function GenerateHTML() {}

GenerateHTML.prototype.generateHTMLManager = function (
  name,
  employee_id,
  email,
  office_number
) {
  const manager = new Manager(name, employee_id, email, office_number);
 // const email = "mailto:" + manager.getEmail();
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css">
    <title>Team Profiles</title>
  </head>
  <body>
 <div class="header">
    <h1>My Team</h1>
 </div>
 <div class="main">
  <div class="card">
    <div class="cardHeader">
      <h3>${manager.getRole()}</h3>
      <h3> ${manager.getName()} </h3>
    </div>
    <div class="cardBody"> 
      <p> Employee id: ${manager.getId()}</p>
      <p><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></p>
      <p> Office number: ${manager.getOffice()}</p>
    </div>
  </div>
`;
};

// TODO: function that returns the Engineer
GenerateHTML.prototype.generateHTMLEngineer = function (
  name,
  employee_id,
  email,
  gitHub
) {
  const engineer = new Engineer(name, employee_id, email, gitHub);
  return `
  <div class="card">
    <div class="cardHeader">
      <h3>${engineer.getRole()}</h3>
      <h3> ${engineer.getName()} </h3>
    </div>
    <div class="cardBody">
      <p> Employee id: ${engineer.getId()}</p>
      <p><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></p>
      <p><a href=${engineer.getGitHub()}>Github: ${engineer.getGitHub()}</a></p>
    </div>
  </div>
  `;
};


GenerateHTML.prototype.generateHTMLIntern = function (
  name,
  employee_id,
  email,
  school
) {
  const intern = new Intern(name, employee_id, email, school);
  return `
  <div class="card">
    <div class="cardHeader">
      <h3>${intern.getRole()}</h3>
      <h3> ${intern.getName()} </h3>
    </div>
    <div class="cardBody">
      <p> Employee id: ${intern.getId()}</p>
      <p><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></p>
      <p>School: ${intern.getSchool()}</p>
    </div>
  </div>
  `;
};

GenerateHTML.prototype.generateHTMLEnd = function (){
  return `
  </div>>
  </body>
  `;
};

module.exports = GenerateHTML;
