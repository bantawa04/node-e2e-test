describe("View product", () => {
  it("User can view product", () => {
    cy.login("user@user.com", "password123");
    
    cy.get(".btn").contains("Details").click();

    cy.url().should("include", "/products");
  });
});
