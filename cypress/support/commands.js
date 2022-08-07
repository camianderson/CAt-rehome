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

Cypress.Commands.add("iWantRehome", () => {
  const baseURL = 'http://localhost:3000';
  cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
    fixture: 'cat-data',
    statusCode: 200 
  })
  cy.visit(baseURL)
  cy.get('.form-button')
    .click()
})

Cypress.Commands.add("addNewCat", () => {
  const baseURL = 'http://localhost:3000';
  cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
    fixture: 'cat-data',
    statusCode: 200 
  })
  cy.visit(baseURL)
  cy.get('.form-button').click()
  cy.get('.form-name').type('Tom')
  cy.get('.form-type').type('Kitty')
  cy.get('.form-size').type('Medium')
  cy.get('.form-sex').type('Male')
  cy.get('.form-health').type('Vaccinated and Negative for FiV and FELV')
  cy.get('.form-picture').type('https://wallup.net/wp-content/uploads/2018/10/07/163028-kitty.jpg')
  cy.get('.form-about').type('Tom is an adorable Kitty that needs a home!')
  cy.get('.form-adopt').type('email adoptTom@email.com')
  cy.get('.form-submit').click()
})