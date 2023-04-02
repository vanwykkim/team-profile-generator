const inquirer = require("inquirer");
const { writeFile, appendFile } = require("fs").promises;
//const { appendFile } = require("fs").promises;
const GenerateHTML = require("./src/generateHTML");

//make a GeneratHTML object
const gHTML = new GenerateHTML();

const menuQuestion = () => {
  return inquirer.prompt([
    {
      type: "list",
      name: "menuChoice",
      message: "What would you like to do?",
      choices: [
        "Add an Engineer",
        "Add an Intern",
        "Finish Building Team",
      ],
      default: 0,
    },
  ]);
};
const startQuest = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Team Manager(0-30 char)?",
    },
    {
      type: "number",
      name: "employee_id",
      message: "What is the Team Managers's employee id?",
    },
    {
      type: "email",
      name: "email",
      message: "What is the email address of the Team Manager?",
    },
    {
      type: "number",
      name: "office_number",
      message: "What is the office number of the Team Manager?",
    },
  ]);
};
const startProfiles = async () => {
  await startQuest()
    .then((answers) => {
      writeFile(
        "./dist/TeamProfiles.HTML",
        gHTML.generateHTMLManager(
          answers.name,
          answers.employee_id,
          answers.email,
          answers.office_number
        )
      );
    })
    .then(() => console.log("Team Manager, " + answers.name + ", was added to HTML."))
    .catch((err) => console.error(err));
    // .then(function (answers) {
    //   //TODO: run function to add team manager info to HTML
    //   console.log("Team Manager, " + answers.name + ", was added.");
    // })
    // .catch((err) => console.error(err));
    menu();
};

//close the body and HTML tags
const endProfiles = async () => {
  await appendFile("./dist/TeamProfiles.HTML", gHTML.generateHTMLEnd())
  .then(() => console.log("HTML file complete."))
    .catch((err) => console.error(err));
}

const addEngineerQuest = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Engineer(0-30 char)?",
    },
    {
      type: "number",
      name: "employee_id",
      message: "What is the Engineer's employee id?",
    },
    {
      type: "email",
      name: "email",
      message: "What is the email address of the Engineer?",
    },
    {
      type: "input",
      name: "gitHub",
      message: "What is the gitHub profile of the Engineer?",
    },
  ]);
};
const addEngineer = async () => {
  await addEngineerQuest()
    .then((answers) => {
      appendFile(
        "./dist/TeamProfiles.HTML",
        gHTML.generateHTMLEngineer(
          answers.name,
          answers.employee_id,
          answers.email,
          answers.gitHub
        )
      );
    })
    .then(() =>
      console.log("Engineer, " + answers.name + ", was added to HTML.")
    )
    .catch((err) => console.error(err));
  menu();
};

const addInternQuest = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Intern(0-30 char)?",
    },
    {
      type: "number",
      name: "employee_id",
      message: "What is the Interns's employee id?",
    },
    {
      type: "email",
      name: "email",
      message: "What is the email address of the Intern?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the school name the Intern attends?",
    },
  ]);
};
const addIntern = async () => {
  await addInternQuest()
    .then((answers) => {
      appendFile(
        "./dist/TeamProfiles.HTML",
        gHTML.generateHTMLIntern(
          answers.name,
          answers.employee_id,
          answers.email,
          answers.school
        )
      );
    })
    .then(() =>
      console.log("Intern, " + answers.name + ", was added to HTML.")
    )
    .catch((err) => console.error(err));
  menu();
};

const menu = () => {
  menuQuestion()
    //   // Use writeFile ;method imported from fs.promises to use promises instead of
    //   // a callback function
    .then(function (answers) {
      switch (answers.menuChoice) {
        case "Finish Building Team":
          console.log("Thanks for using the team profile generator");
          //TODO: function to finish the HTML
          endProfiles();
          break;
        case "Add an Engineer":
          addEngineer();
          break;
        case "Add an Intern":
          addIntern();
          break;
      }
    })
    //   .then(put function here to use this)
    .catch((err) => console.error(err));
};

const init = () => { 
  startProfiles();
};

init();
