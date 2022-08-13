describe('Register new user', () => {
  it('Register new user and redirect to signup page', () => {
    //visit baseUrl
    cy.visit("/");
    //find li elemnt that contains text "Signup" and click it
    cy.get("li").contains("Signup").click();
    //confirm/assert the url is changed to  /signup
    cy.url().should("include", "/signup"); 

    //get input field by id and type given param with delay speed of 100
    cy.get("#email").type("user@user.com", {delay: 100});
    cy.get("#password").type("password123", {delay: 100});
    cy.get("#confirmPassword").type("password123", {delay: 100});

    cy.get(".btn").click();

    //assert signup success and redirect to login
    cy.url().should("include", "/login"); 

  })
})