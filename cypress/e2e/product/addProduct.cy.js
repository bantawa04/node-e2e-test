describe("Add product", () => {
  it("User can add product", () => {

    cy.login("user@user.com", "password123");
    cy.get("li").contains("Add Product").click();
    // cy.url().should("include", "/add-product");
    cy.url().should("include", "/add-product");
    cy.get("#title").type("Product 1", { delay: 100 });
    cy.get("#price").type("10.99", { delay: 100 });
    cy.get("#description").type("Product 1 decription goes here", {
      delay: 100,
    });

    cy.get("#image").selectFile("cypress/fixtures/image.jpeg");
    cy.get(".btn").click();

    cy.url().should("include", "/products");
  });
});
