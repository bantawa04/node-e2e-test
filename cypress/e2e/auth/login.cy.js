describe("Login", () => {
  it("Login user and reirect to base url", () => {
    //visit baseUrl
    cy.visit("/");
    //find li elemnt that contains text "Login" and click it
    cy.get("li").contains("Login").click();
    //confirm/assert the url is changed to  /signup
    cy.url().should("include", "/login");

    //get input field by id and type given param with delay speed of 100
    cy.get("#email").type("test@user.com", { delay: 100 });
    cy.get("#password").type("password123", { delay: 100 });

    cy.get(".btn").click();

    //assert signup success and redirect to login
    cy.url().should("include", "/");
  });
});
