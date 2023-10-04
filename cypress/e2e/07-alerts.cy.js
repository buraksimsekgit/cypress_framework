describe('Alerts', () => {
  /**
   * WARNING ALERT
   * 1. Go to https://techglobal-training.com/frontend/
   * 2. Click on the "Alerts" card
   * 3. Click on the "Warning alert" button
   * 4. Validate the alert text equals "You are on TechGlobal Training application."
   * 5. Click on the "OK" button on the alert
   * 6. Validate the result message equals "You accepted warning by clicking OK."
   */

  it('Handling the Warning and Confirmation Alerts', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Alerts').click()


    /**
     *  When you set up an event listener using cy.on('window:alert', (str) => {...}), 
     * Cypress will register this listener and will have it ready to execute its callback function whenever an alert event is triggered.
     * 
     * When the click action is executed and if it triggers an alert, the previously registered event listener will catch this alert event 
     * and execute the callback function provided, regardless of where the click command is in relation to the event listener in your code.
     * 
     * This doesn't mean that Cypress "waits" for the event to occur before moving on to the next command. Rather, it sets up the event listener, 
     * continues executing the next commands in the queue, and will execute the event listener’s callback when the event occurs.
     */

    cy.get('#warning_alert').click()

    // Cypress will handle both Warning and Confirmation alerts by clicking "OK" implicitly.
    // Since we want to get the text of the alert, that's why we are using callback here.
    cy.on('window:alert', (str) => {
      expect(str).to.equal('You are on TechGlobal Training application.')
    })

    cy.get('#action').should(
      'have.text',
      'You accepted warning by clicking OK.'
    )
  })

  /**
   * CONFIRMATION ALERT
   * 1. Go to https://techglobal-training.com/frontend/
   * 2. Click on the "Alerts" card
   * 3. Click on the "Confirmation alert" button
   * 4. Validate the alert text equals "Would you like to stay on TechGlobal Training application?"
   * 5. Click on the "Cancel" button on the alert
   * 6. Validate the result message equals "You rejected the alert by clicking Cancel."
   * 7. Click on the "Confirmation alert" button again
   * 8. Click on the "OK" button on the alert
   * 9. Validate the result message equals "You confirmed the alert by clicking OK."
   */

  it('Handling the Warning and Confirmation Alerts', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Alerts').click()

    cy.get('#confirmation_alert').click()

    // Since we don't return anything in here, cypress will handle the Alert by clicking "OK" implicitly.
    cy.on('window:confirm', (str) => {
      expect(str).to.equal(
        'Would you like to stay on TechGlobal Training application?'
      )
    })

    cy.get('#confirmation_alert').click()

    cy.on('window:confirm', (str) => {
      expect(str).to.equal(
        'Would you like to stay on TechGlobal Training application?'
      )
      return false
    })

    cy.get('#action').should(
      'have.text',
      'You rejected the alert by clicking Cancel.'
    )

    /**
     * NOTE: Cypress event handlers are not "one-time" by default.
     * When you declare an event handler using cy.on("window:confirm", ...), the handler will be called for every subsequent window.confirm dialog.
     * So, the first cy.on("window:confirm", ...) is still active when you add the second one.
     *
     * Since the first one returns false, the "OK" button will never get clicked, even when the second cy.on handler is invoked.
     */
  })

  it('Handling the Prompt Alert', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Alerts').click()

    // Handle "Cancel" action on prompt alert
    // cy.window().then((win) => {
    //     cy.stub(win, 'prompt').returns(null) // This simulates clicking "Cancel"
    // })

    // cy.window().then((win) => {
    //   cy.stub(win, 'prompt')
    //   return false
    // })

    // This will simulate clicking OK on the prompt alert by entering TechGlobal
    // cy.window().then((win) => {
    //     cy.stub(win, 'prompt').returns('TechGlobal')
    // })

    // Get the message, validate it and click OK.
    // cy.window().then((win) => {
    //   cy.stub(win, 'prompt').callsFake((message) => {
    //     expect(message).to.equal('What would you like to say to TechGlobal?')
    //     return 'My Message'
    //   })
    // })

    // Get the message of prompt alert and validate it, and click cancel
    // cy.window().then((win) => {
    //   cy.stub(win, "prompt").callsFake((message) => {
    //     expect(message).to.equal("What would you like to say to TechGlobal?");

    //     return null;
    //   });
    // });



    const message = 'My message'

    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns(message)
    })

    cy.get('#prompt_alert').click()

    cy.get('#action').then(($text) => {
      cy.log($text.text())
      expect($text.text().trim()).to.equal(`You entered  "${message}" in the alert and clicked OK.`)
    })

    /**
     * NOTE: Cypress can automatically intercept and handle these dialogs. You don't need to manually stub or spy on them.
     * However, for window.prompt, Cypress doesn't have built-in support to automatically handle the dialog. So if you don't handle, alert will remain open.
     *
     * To test something like a prompt, you have to explicitly stub the window.prompt method using cy.stub(), as we've done in our example.
     * So that's why, since as we learned that stub() is going to replace with original method and will be faking it, we have to setup it first before we clicking it
     * Then clicking the "Prompt Alert" and handling it will go smooth.
     *
     * With this sequence, we set up the stub first, and then when we click the button, the stub is ready to intercept the window.prompt.
     */
  })
})
