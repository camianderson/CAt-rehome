describe('Cat Description Page Flow', () => {
  beforeEach(() => {
    cy.moreAboutTheCat();
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
    cy.get('.cat-img').should('exist')
  })
  it('Should be able render the cat name and all cat description', () => {
    cy.get('.cat-img').should('exist')
    cy.contains('.cat-name', 'Mr. Nilson')
    cy.contains('.cat-sts', 'Male | Kitten | Medium')
    cy.contains('.cat-health-title', 'Health:')
    cy.contains('.cat-health-info', 'Has been neutered, vaccinated and is negative for FeLV and FIV')
    cy.contains('.cat-meet', 'Meet Mr. Nilson')
    cy.contains('.cat-about', 'He is a medium hair male ginger and white tabby kitten with unique facial markings. He is a confident kitty who likes everyone he meets, from small children to neighborhood grandparents. He is playful and loves string toys in particular. After a bout of playing, he likes to snuggle up with his humans for a nap. He is a happy, delightful young kitty who will be a happy addition to some lucky home.')
    cy.contains('.cat-adopt', 'send an email to AdoptMrNilson@CAtRehome.org or call 541-225-4955')
  })
  it('Should be able render the back button', () => {
    cy.get('.back-button').should('exist')
  })
  it('Should be able render the favorite button', () => {
    cy.get('.fav-button').should('exist')
  })
  it('Should be able to click the back button and navigate to the cat adoption list page', () => {
    cy.get('.back-button').click()
      .url()
      .should('eq', 'http://localhost:3000/list')
  })
  it('Should be able to click the favorite button and favorite a cat information', () => {
    cy.get('.favorite-button').click()
    cy.get('.fav-button').click()
      .url()
      .should('eq', 'http://localhost:3000/favorites')
    cy.get('.fav-cat-info').contains('h3', 'Mr. Nilson')
    cy.get('.fav-cat-info').contains('p', 'Male | Kitten | Medium')
  })
})