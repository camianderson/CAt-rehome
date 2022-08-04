Cypress.Commands.add("iWantAdopt", () => {
  const baseURL = 'http://localhost:3000';
  cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
    fixture: 'cat-data',
    statusCode: 200 
  })
    cy.visit(baseURL)
    cy.get('.adopt-button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/list')
})