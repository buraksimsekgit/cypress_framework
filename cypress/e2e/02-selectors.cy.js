// This is group of test blocks for HTML Elements page
describe('Basic Commands', () => {
  // This is individual test block
  it('Practice Web Elements using - get and contains', () => {
    cy.visit('https://techglobal-training.com/frontend')

    // This will be searching for HTML cards in all DOM
    // cy.contains('Html Elements').as('htmlCard')

    // This will be searching 'Html Elements' inside the elements has class name 'cards'
    // cy.contains('.cards', 'Html Elements').as('htmlCard')

    // This will do the same thing as above in more explicit way.
    // Also, to not to call locator repetitively, we can asign alias to it using as()
    cy.get('.CardGrids_CardGrids__qDdyI')
      .contains('Html Elements')
      .as('htmlCard')

    cy.get('@htmlCard').click()

    // HANDLING MORE THAN 1 WEB ELEMENT.

    // Returns more than 1 web element -- 3
    cy.get('#checkbox-button-group label').first()

    cy.get('#checkbox-button-group label').last()

    cy.get('#checkbox-button-group label').eq(1)
  })

  // This is individual test block
  it('Practice Web Elements using - find', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    // This will try to find element with class name 'radio' inside the only with 'radio-button-group' id
    cy.get('#radio-button-group').find('.radio')

    cy.get('#checkbox-button-group').find('.checkbox')

    // Another way of what we are doing using css selectors.
    cy.get('#checkbox-button-group .checkbox')
  })

  it('Practice Web Elements using - next, prev, nextAll, prevAll', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    // next() will locate immediate 'next' sibling element of web element that contains 'Paragraphs' text.
    cy.get('div').contains('Paragraphs').next()

    // prev() will locate immediate 'previous' sibling element of web element that contains 'Paragraphs' text.
    cy.get('#testing_paragraph').prev()

    // nextAll() will locate ALL 'next' sibling elements of web element that contains 'Paragraphs' text.
    cy.get('div').contains('Paragraphs').nextAll()

    // prevAll() will locate ALL 'previous' sibling elements of web element that contains 'Paragraphs' text.
    cy.get('#testing_paragraph').prevAll()
  })


  it('More Practice', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    cy.get('#main_heading')

    // This will fail because of Cypress own default assertion and its case sensitive.
    // cy.get("#main_heading").contains("HTML Elements");

    // This will pass
    cy.get('#main_heading').contains('Html Elements')


    // Aliasing element
    cy.get('#register_button').as('registerButton')
    cy.get('#signin_button').as('signinButton')


    // Using aliases that we assigned.
    cy.get('@registerButton').click()
    cy.get('@signinButton').click()

    cy.get('ol > li').first().contains('Cypress')
    cy.get('ol > li').last().contains('Selenium Webdriver')

    cy.get('div').contains('Unordered Lists').should('be.visible')

    cy.get('ul').find('#unordered_list_item1')
    cy.get('ul').find('#unordered_list_item2')
  })
})
