
class Employee {
  constructor(name, id, email){
  this.name = name;
  this.email = email;
  this.id = id;
  }
  getName = () => {
    return this.name;
    }
  getId = () => {
    return this.id;
    }
  getEmail = () => {
    return this.email;
    }
  getRole = () => {
    return "Employee";
    }
  };

  class Manager extends Employee{
    constructor(name, id, email, office_number) {
      //calling parent constructor
      super(name, id, email);
      this.office_number = office_number;
    }
    getOffice = () => {
      return this.office_number;
    };
    getRole = () => {
      return "Manager";
    };
  };

  class Engineer extends Employee{
    constructor(name, id, email, gitHub) {
      //calling parent constructor
      super(name, id, email);
      this.gitHub = gitHub;
    }
    getGitHub = () => {
      return this.gitHub;
    };
    getRole = () => {
      return "Engineer";
    };
  };

  class Intern extends Employee{
    constructor(name, id, email, school) {
      //calling parent constructor
      super(name, id, email);
      this.school = school;
    }
    getSchool = () => {
      return this.school;
    };
    getRole = () => {
      return "Intern";
    };
  };

  module.exports = {Employee, Manager, Engineer,Intern};