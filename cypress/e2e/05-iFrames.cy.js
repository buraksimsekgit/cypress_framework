describe('iFrames in Cypress', () => {
  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Validate the "Please fill out your information below" text
   */

  it('iFrames', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('IFrames').click()

    // This will not work since the content is inside the iframe
    // cy.get('#first_name').type('userName')


    //$0.contentDocument.body will return the iframe body in the browser.

    // First, we need to interact with the iframe web element which is #form_frame
    cy.get('#form_frame')
    // $0 refers to the currently selected element in the Elements tab
    // contentDocument is property is used to get the Document object of an embedded <iframe> element.
    // body is a property of a Document object that represents the <body> element of the document
      .its('0.contentDocument.body')
      // First, we check here if there is a iframe content exist in the page. This is NOT necessary validation
      .should('not.be.empty')
      // here, we are locating the element that we want to interact.
      .find('#name_form > p')
      .should('have.text', 'Please fill out your information below')

    cy.get('#form_frame')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .find('#first_name')
      .type('userName')
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "IFrames" card
   * Enter "John" into the first name input box
   * Enter "Doe" into the last name input box
   * Click on the "SUBMIT" button
   * Validate the result equals "You entered: John Doe"
   */

  it('iFrames validate login', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('IFrames').click()

    const name = 'username'
    const lastName = 'last_name'

    cy.get('#form_frame')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .find('#first_name')
      .type(name)

    cy.get('#form_frame')
      .its('0.contentDocument.body')
      .find('#last_name')
      .type(lastName)

    cy.get('#form_frame').its('0.contentDocument.body').find('#submit').click()

    cy.get('#result').should('be.visible')
    cy.get('#result').should('have.text', `You entered: ${name} ${lastName}`)

  })
})
