Cypress.Commands.add("iWantAdopt", () => {
  const baseURL = 'http://localhost:3000';
  cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
    fixture: 'cat-data',
    statusCode: 200 
  })
  cy.visit(baseURL)
  cy.get('.adopt-button')
    .click()
})

Cypress.Commands.add("moreAboutTheCat", () => {
  const baseURL = 'http://localhost:3000';
  cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
    fixture: 'cat-data',
    statusCode: 200 
  })
  cy.visit(baseURL)
  cy.get('.adopt-button')
    .click()
  cy.get('.cat-info').eq(2).click()
})

Cypress.Commands.add("favoriteTheCats", () => {
  const baseURL = 'http://localhost:3000';
  cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
    fixture: 'cat-data',
    statusCode: 200 
  })
  cy.visit(baseURL)
  cy.get('.adopt-button')
    .click()
  cy.get('.cat-info').eq(2).click()
  cy.get('.favorite-button').click()
  cy.get('.back-button').click()
  cy.get('.cat-info').eq(5).click()
  cy.get('.favorite-button').click()
  cy.get('.fav-button').click()
})