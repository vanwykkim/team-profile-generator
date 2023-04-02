const {Intern} = require("../lib/employee");

describe("Intern", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name, id, email, school' properties when called with the 'new' keyword", () => {
      const obj = new Intern();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("school" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const eName = "John Smith";
      const id = 4;
      const email = "Who@you.com"; 
      const school = "UW";

      const obj = new Intern(eName, id, email, school);

      expect(obj.name).toEqual(eName);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.school).toEqual(school);
    });
  });
});

  test("Getters for Intern", () => {
    const myIntern = new Intern("Frank", 4, "frank@hotmail.com", "UW");
    const myName = myIntern.getName();
    const myId = myIntern.getId();
    const myEmail = myIntern.getEmail();
    const mySchool = myIntern.getSchool();
    const myRole = myIntern.getRole();
    expect(myName).toEqual("Frank");
    expect(myId).toEqual(4);
    expect(myEmail).toEqual("frank@hotmail.com");
    expect(mySchool).toEqual("UW");
    expect(myRole).toEqual("Intern");
  });