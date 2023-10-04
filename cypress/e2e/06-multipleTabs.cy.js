describe.skip('Interacting Multiple Tabs', () => {
  it('Multiple Tabs', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Multiple Windows').click()

    // This way, we can validate if <webElement> has 'target' attribute with "_blank" value.
    // It means this link is going to open in the new tab.
    cy.get('#tesla').should('have.attr', 'target', '_blank')

    // Here, we are manipulating the "target" attribute of the web element with the help of JQuery invok() method
    // and removing its "target" attribute temporarily, so it will open the link in the same tab.
    cy.get('#tesla').invoke('removeAttr', 'target').click()

    cy.url().should('contain', 'tesla')

    cy.url().then((url) => {
      cy.log(`Page URL is: ${url}`)
    })
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link
   * Validate that the child window title is "Apple"
   * Close the window and switch back to the main window
   * Validate title contains "techglobal"
   */

  it('Multi Tabs - TEST 1', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Multiple Windows').click()

    cy.get('#apple').should('have.attr', 'target', '_blank')

    cy.get('#apple').invoke('removeAttr', 'target').click()

    cy.title().should('contain', 'Apple')

    cy.go(-1)

    cy.title().should('contain', 'Techglobal')

    cy.title().then((title) => {
      cy.log(`Page title is: ${title}`)
    })
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Multiple Windows" card
   * Click on the "Apple" link and validate URL contains "https://www.apple.com/"
   * Click on the "Microsoft" link and validate URL contains "https://www.microsoft.com/en-us/"
   * Click on the "Tesla" link and validate URL contains "https://www.tesla.com/"
   */

  it('Multi Tabs - TEST 2', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Multiple Windows').click()

    cy.get('#apple').should('have.attr', 'target', '_blank')

    cy.get('#apple').invoke('removeAttr', 'target').click()
    cy.url().should('contain', 'apple')

    cy.go(-1)

    cy.get('#tesla').invoke('removeAttr', 'target').click()
    cy.url().should('contain', 'tesla')

    // cy.get("#microsoft").invoke("removeAttr", "target").click();
    // cy.url().should("contain", "microsoft");
  })
})
