describe('Debugging', () => {
  it('Time Traveling in Commands', () => {
    cy.clickLink('Project - Login Function')

    cy.get('#username').type('TechGlobal')
    cy.get('#password').type('Test1234')

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })

  it('Debugging using pause', () => {
    // This will pause the test for the debugging purposes. You need to tell test runner to continue manually.
    // cy.pause()

    cy.clickLink('Project - Login Function')

    cy.get('#username').type('TechGlobal')
    // Pleaase be careful using this command, and remove after you solve your problem.
    // cy.pause()
    cy.get('#password').type('Test1234')

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })


  it('Debugging using debug', () => {
    // This will trigger console on the browser.
    // cy.debug()

    cy.clickLink('Project - Login Function')

    cy.get('#username').type('TechGlobal')

    // Pleaase be careful using this command, and remove after you solve your problem.
    // cy.debug();
    cy.get('#password').type('Test1234')

    cy.get('#login_btn').click()

    cy.get('#success_lgn').should('be.visible')
  })
})
