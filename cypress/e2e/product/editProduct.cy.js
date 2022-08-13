describe("Edit product", () => {
  it("User can edit product", () => {
    cy.login("user@user.com", "password123");
    cy.get("li").contains("Admin Products").click();
    // cy.url().should("include", "/add-product");
    cy.url().should("include", "/admin/products");

    cy.get("a.btn").contains("Edit").click();
    cy.get("#title").clear();
    cy.get("#title").type("Product 1 Update", { delay: 100 });

    cy.get("#price").clear();
    cy.get("#price").type("12.99", { delay: 100 });

    cy.get("#description").clear();
    cy.get("#description").type("Product 1 decription update goes here", {
      delay: 100,
    });

    cy.get("#image").selectFile("cypress/fixtures/image2.jpeg");
    cy.get(".btn").click();

    cy.url().should("include", "/products");
  });
});
