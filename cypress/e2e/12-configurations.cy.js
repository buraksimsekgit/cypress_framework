
describe('Configurations', () => {
    beforeEach(() => {
      cy.contains('Html Elements').click()
    })
  
    it('Parent Command', () => {
      cy.clickLink('Sign in')
    })
  
    it('Child Command', () => {
      cy.get('#main_heading').logText()
    })
  
    it('Overriding Command', () => {
      cy.get('#main_heading').logText()
  
    })
  
    afterEach(() => {
      cy.clearCookies()
    })
  })
  