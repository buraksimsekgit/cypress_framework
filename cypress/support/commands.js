/* eslint-disable no-unused-vars */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// This is a Parent Command
Cypress.Commands.add('clickLink', (link) => {
  cy.get('div').contains(link).click()
})

Cypress.Commands.add('clickCardByTitle', (title) => {
  cy.contains(title).click()
})

Cypress.Commands.add('login', (username, password) => {
  cy.get('#text_input1').type(username)
  cy.get('#text_input2').type(password)
})

Cypress.Commands.add('selectDropdownOption', (selector, value) => {
  cy.get(selector).select(value)
})



//This is a Child Command
Cypress.Commands.add('logText', { prevSubject: true }, (subject) => {
  const text = subject.text()
  cy.log(`My text is: ${text}`)
})

Cypress.Commands.add('assertAttribute', { prevSubject: true }, (subject, attributeName, expectedValue) => {
  // expect(subject.attr(attributeName)).to.equal(expectedValue)
  cy.wrap(subject).should('have.attr', attributeName, expectedValue)
})

Cypress.Commands.add('isVisible', { prevSubject: true }, (subject) => {
  // expect(subject).to.be.visible
  cy.wrap(subject).should('be.visible')
})


// // Overriding existing command
// Cypress.Commands.overwrite('visit', (orginalVisit, url, options) => {

//     const urlWithPath = `${url}/frontend`

//     return orginalVisit(urlWithPath, op7tions)
// })


// Define a variable to store the listener function
let confirmListener

// Command to set up the window:confirm listener
Cypress.Commands.add('setupConfirmListener', (action) => {
  confirmListener = (str) => {
    if (action === 'cancel') {
      return false
    } else if (action === 'ok') {
      return true
    }
  }
  cy.on('window:confirm', confirmListener)
})

// Command to reset the window:confirm listener
Cypress.Commands.add('resetConfirmListener', () => {
  if (confirmListener) {
    cy.off('window:confirm', confirmListener)
    confirmListener = null
  }
})