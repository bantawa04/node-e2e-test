describe("Login", () => {
  it("Login user and reirect to base url", () => {

    cy.login("user@user.com", "password123");
  });
});
