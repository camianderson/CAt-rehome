describe('Favorites Page Flow', () => {
  beforeEach(() => {
    cy.favoriteTheCats();
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
  it('should render the list of favorite cats for adoption', () => {
    cy.get('.all-favorites')
    cy.get('.fav-cat-info').should('have.length', 2)
  })
  it('should render the first cat that was favorited', () => {
    cy.get('.fav-cat-info').eq(0)
      .get('img').should('exist')
    cy.get('.fav-cat-info').eq(0)
      .contains('h3', 'Mr. Nilson')
    cy.get('.fav-cat-info').eq(0)
    .contains('p', 'Male | Kitten | Medium')
  })
  it('should render the second cat that was favorited', () => {
    cy.get('.fav-cat-info').eq(1)
      .get('img').should('exist')
    cy.get('.fav-cat-info').eq(1)
      .contains('h3', 'Thora')
    cy.get('.fav-cat-info').eq(1)
    .contains('p', 'Female | Adult | Medium')
  })
  it.only('should click one of the favorite cat and go to their description page', () => {
    cy.get('.fav-cat-info').eq(1).click()
      .url()
      .should('eq', 'http://localhost:3000/cat-description/6')
  })
})