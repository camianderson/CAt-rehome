describe('New Cat Form Page Flow', () => {
  beforeEach(() => {
    cy.iWantRehome();
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
  it('Should display the new cat form page', () => {
    cy.get('.new-cat-form').should('exist')
  })
  it('Should display the title, start message ', () => {
    cy.get('.form-title').should('exist')
    cy.get('.message-start').should('exist')
  })
  it('Should display form', () => {
    cy.get('.form-name').should('exist')
    cy.get('.form-type').should('exist')
    cy.get('.form-size').should('exist')
    cy.get('.form-sex').should('exist')
    cy.get('.form-health').should('exist')
    cy.get('.form-picture').should('exist')
    cy.get('.form-about').should('exist')
    cy.get('.form-adopt').should('exist')
    cy.get('.form-submit').should('exist')
  })
  it('Should be able to fill the form and add a new cat to the cat adoption list', () => {
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
  it('Should not be able to submit the form if does not fill out all the inputs', () => {
    cy.get('.form-name').type('Tom')
    cy.get('.form-type').type('Kitty')
    cy.get('.form-size').type('Medium')
    cy.get('.form-sex').type('Male')
    cy.get('.form-health').type('Vaccinated and Negative for FiV and FELV')
    cy.get('.form-picture').type('https://wallup.net/wp-content/uploads/2018/10/07/163028-kitty.jpg')
    cy.get('.form-about').type('Tom is an adorable Kitty that needs a home!')
    cy.get('.form-submit').click()
    cy.get('.error').should('exist')
  })
  it('Should be able to see the confirmation that the new cat was added to the cat adoption list', () => {
    cy.addNewCat()
    cy.get('.message-success').should('exist')
  })
  it('Should be able to see the message and click the button to check the new cat in the cat adoption list', () => {
    cy.addNewCat()
    cy.get('.message-list').should('exist')
    cy.get('.form-list').click()
    .url()
    .should('eq', 'http://localhost:3000/list')
  })
  it('Should render the new cat in the cat adoption list', () => {
    cy.addNewCat()
    cy.get('.message-list').should('exist')
    cy.get('.form-list').click()
    cy.get('.cat-info').eq(6).should('exist')
    cy.get('.cat-info').eq(6).contains('Tom')
  })
})