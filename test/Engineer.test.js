const {Engineer} = require("../lib/employee");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("should return an object containing 'name, id, email, gitHub' properties when called with the 'new' keyword", () => {
      const obj = new Engineer();

      expect("name" in obj).toEqual(true);
      expect("id" in obj).toEqual(true);
      expect("email" in obj).toEqual(true);
      expect("gitHub" in obj).toEqual(true);
    });

    it("should set 'name' when created", () => {
      const eName = "John Smith";
      const id = 4;
      const email = "Who@you.com";
      const gitHub = "https://github.com/vanwykkim";

      const obj = new Engineer(eName, id, email, gitHub);

      expect(obj.name).toEqual(eName);
      expect(obj.id).toEqual(id);
      expect(obj.email).toEqual(email);
      expect(obj.gitHub).toEqual(gitHub);
    });
  });
});

test("Getters for Engineer", () => {
  const myEngineer = new Engineer(
    "Frank",
    4,
    "frank@hotmail.com",
    "https://github.com/vanwykkim"
  );
  const myName = myEngineer.getName();
  const myId = myEngineer.getId();
  const myEmail = myEngineer.getEmail();
  const myGitHub = myEngineer.getGitHub();
  const myRole = myEngineer.getRole();
  expect(myName).toEqual("Frank");
  expect(myId).toEqual(4);
  expect(myEmail).toEqual("frank@hotmail.com");
  expect(myGitHub).toEqual("https://github.com/vanwykkim");
  expect(myRole).toEqual("Engineer");
});