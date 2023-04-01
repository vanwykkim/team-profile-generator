const inquirer = require("inquirer");

const startQuestion = () => {
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

const addEngineerQuest = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the Engineer(0-30 char)?",
    },
    {
      type: "number",
      name: "Employee_id",
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
    .then(function (answers) {
      //TODO: run function to add Engineer to HTML
      console.log(
        "Engineer, " +
          answers.name +
          ", was added."
      );
    })
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
      name: "Employee_id",
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
    .then(function (answers) {
      //TODO: run function to add Intern to HTML
      console.log("Intern, " + answers.name + ", was added.");
    })
    .catch((err) => console.error(err));
  menu();
};

const menu = () => {
  startQuestion()
    //   // Use writeFile ;method imported from fs.promises to use promises instead of
    //   // a callback function
    .then(function (answers) {
      switch (answers.menuChoice) {
        case "Finish Building Team":
          console.log("Thanks for using the team profile generator");
          //TODO: function to display the HTML
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
    //TODO: inquiries to get manager info before start team building
    //write to HTML file
  
  menu();
};

init();
