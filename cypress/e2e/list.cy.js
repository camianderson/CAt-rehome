describe('Cat Adoption List Page Flow', () => {
  beforeEach(() => {
    cy.iWantAdopt();
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
  it('should render the list of cats for adoption', () => {
    cy.get('.all-cats')
    cy.get('.cat-info').should('have.length', 6)
  })
  it('should be able to click in a cat image and navigate to the cat description page', () => {
    cy.get('.cat-info').eq(2).click()
      .url()
      .should('eq', 'http://localhost:3000/cat-description/3')
  })
})