const {Manager} = require("../lib/employee");

describe("Manager", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name, id, email, office_number' properties when called with the 'new' keyword", () => {
      const obj = new Manager();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("office_number" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const eName = "John Smith";
      const id = 4;
      const email = "Who@you.com";
      const office_number = 67;

      const obj = new Manager(eName, id, email, office_number);

      expect(obj.name).toEqual(eName);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.office_number).toEqual(office_number);
    });
  });
});

  test("Getters for Manager", () => {
    const myManager = new Manager("Frank", 4, "frank@hotmail.com", 87);
    const myName = myManager.getName();
    const myId = myManager.getId();
    const myEmail = myManager.getEmail();
    const myOffice = myManager.getOffice();
    const myRole = myManager.getRole();
    expect(myName).toEqual("Frank");
    expect(myId).toEqual(4);
    expect(myEmail).toEqual("frank@hotmail.com");
    expect(myOffice).toEqual(87);
    expect(myRole).toEqual("Manager");
  });