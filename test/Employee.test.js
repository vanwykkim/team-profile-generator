const {Employee} = require("../lib/employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name, id, email' properties when called with the 'new' keyword", () => {
      const obj = new Employee();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const eName = "John Smith";
      const id = 4;
      const email = "Who@you.com";

      const obj = new Employee(eName, id, email);

      expect(obj.name).toEqual(eName);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
    });
  });
});


  test("Getters for Employee", () => {
    const myEmployee = new Employee("Frank", 4, "frank@hotmail.com");
    const myName = myEmployee.getName();
    const myId = myEmployee.getId();
    const myEmail = myEmployee.getEmail();
    const myRole = myEmployee.getRole();
    expect(myName).toEqual("Frank");
    expect(myId).toEqual(4);
    expect(myEmail).toEqual("frank@hotmail.com");
    expect(myRole).toEqual("Employee");
    });

//   describe("minus", () => {
//     it("should return a new 'Arithmetic' object", () => {
//       const obj = new Arithmetic(9).minus(4);

//       expect(obj instanceof Arithmetic).toEqual(true);
//     });

//     it("should return a new 'Arithmetic' object that has an updated 'number' value", () => {
//       const num = 10;
//       const subtracted = 17;
//       const difference = num - subtracted;

//       const { number } = new Arithmetic(num).minus(subtracted);

//       expect(number).toEqual(difference);
//     });
//   });

//   describe("value", () => {
//     it("should return the 'Arithmetic' object's 'number' value", () => {
//       const num = 10;
//       const obj = new Arithmetic(num);

//       const result = obj.value();

//       expect(result).toEqual(num);
//     });
//   });
// });
