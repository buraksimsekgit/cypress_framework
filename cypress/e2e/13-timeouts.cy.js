describe('Timeouts', () => {
  it('Explicit Timeouts', () => {
    cy.visit('https://techglobal-training.com/frontend', { timeout: 10000 })

    cy.clickCardByTitle('Html Elements')

    // cy.get('#randomName', {timeout: 5000})

    // cy.wait(3000)

    cy.get('#hello_paragraph', { timeout: 5000 }).click({ timeout: 10000 })
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Waits" card
   * Click on the "Click on me to see a red box" button
   * Validate that a red box is displayed
   * 
   * npx cypress run --config defaultCommandTimeout=10000,pageLoadTimeout=20000
   */

  it('Waits Page', () => {
    cy.visit('https://techglobal-training.com/frontend', { timeout: 10000 })

    cy.clickCardByTitle('Waits')

    cy.get('#red').click({ timeout: 5000 }, { force: true })

    cy.get('.box', { timeout: 10000 }).click({ timeout: 10000 }).should('be.visible')
  })
})
