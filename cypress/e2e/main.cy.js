describe('Main Page Flow', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://petdata-api.herokuapp.com/api/v1/petsData', { 
      fixture: 'cat-data',
      statusCode: 200 
    })
    cy.visit('http://localhost:3000/')
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
  it('Should be able to click the "adopt a cat!" button and navigate to the list of cats to adopt page', () => {
    cy.get('.adopt-button')
      .click()
      .url()
      .should('eq', 'http://localhost:3000/list')

  })
})