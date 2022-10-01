describe("Developars.club Home feed", function () {
  it("should show the home feed", function () {
    cy.visit("/");
    cy.contains("h1[data-test='heading']", "Developars.club");
  });

  it("shows a developer profile list", function () {
    cy.visit("/");
    cy.get('[data-test="developer-profile-list"]').should("exist");
    cy.get('[data-test="developer-profile"]').should((items) => {
      expect(items).to.have.length(3);
      const names = [...items].map(
        (item) => item.querySelector("h2").innerHTML
      );
      expect(names).to.deep.eq(["John Doe", "Jane Doe", "John Smith"]);
    });
  });
});
