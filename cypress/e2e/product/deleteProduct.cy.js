describe("Edit product", () => {
  it("User can edit product", () => {
    cy.login("user@user.com", "password123");
    cy.get("li").contains("Admin Products").click();
    // cy.url().should("include", "/add-product");
    cy.url().should("include", "/admin/products");

    cy.get(".btn").contains("Delete").click();
    
    cy.url().should("include", "/products");
  });
});
