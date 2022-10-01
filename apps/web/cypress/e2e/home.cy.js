describe("Developars.club Home feed", function () {
  it("should show the home feed", function () {
    cy.visit("/");
    cy.contains("h1[data-test='heading']", "Developars.club");
  });
});
