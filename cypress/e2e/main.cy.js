describe('Main Page Flow', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
      fixture: 'cat-data',
      statusCode: 200 
    })
    cy.visit('http://localhost:3000/')
  })
  it('Should display an error to the cat information do not load', () => {
    cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', {
      statusCode: 400
    })
    cy.visit('http://localhost:3000/list')
    .contains('h2', 'Oops something went wrong, please try again!')
    cy.get('button').should('exist')
  })
  it('Should display an error to the cat information do not load', () => {
    cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/list')
    .contains('h2', 'Oops something went wrong, please try again!')
    cy.get('button').should('exist')
  })
  it('Should display an error if there is an error in the url', () => {
    cy.visit('http://localhost:3000/lit')
    .contains('h2', 'Oops something went wrong, please try again!')
    cy.get('button').should('exist')

    cy.visit('http://localhost:3000/oops')
    .contains('h2', 'Oops something went wrong, please try again!')
    cy.get('button').should('exist')
  })
  it('Should be able render the title', () => {
    cy.get('h1').should('have.text', 'CAt Rehome')
  })
  it('Should be able render the home, about and favorite buttons', () => {
    cy.get('.home-button')
      .should('exist')

    cy.get('.about-button')
      .should('exist')

    cy.get('.fav-button')
      .should('exist')
  })
  it('Should be able render the cat image', () => {
    cy.get('.main-page')
    cy.get('.main-img')
      .should('exist')
  })
  it('Should be able render the adopt a cat button', () => {
    cy.get('.main-page')
    cy.get('.adopt-button')
      .should('exist')
  })
  it('Should be able to click the home button and be re-routed to the home page', () => {
    cy.get('.home-button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/')
  })
  it('Should be able to click the about button and navigate to the about page', () => {
    cy.get('.about-button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/about')
  })
  it('Should be able to click the favorites button and navigate to the favorites page', () => {
    cy.get('.fav-button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/favorites')
  })
  it('Should be able to click the "Adopt a Cat!" button and navigate to the list of cats to adopt page', () => {
    cy.get('.adopt-button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/list')
  })
  it('Should be able to click the "Rehome a Cat!" button and navigate to the list of cats to adopt page', () => {
    cy.get('.form-button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/new-cat-form')
  })
})