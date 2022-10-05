describe('Yo', () => {
  it('passes', () => {
    cy.visit('http://localhost:4200/dashboard');
    cy.get('search-box').type('oualid')
  })
})
