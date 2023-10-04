describe('Keyboard & Mouse Actions ', () => {

  it('Keyboard actions', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    cy.get('#text_input1')
      .realClick()
      .realPress('A')
      .realPress('Tab')
      .realPress('KeyB')
      .realPress('ArrowLeft')
      .realPress('ArrowRight')
      .realPress('KeyB')
      .realPress('Backspace')
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Actions" card
   * Verify that the user is redirected to the Actions page
   * Verify that the first three web elements are present and labeled as "Click on me", "Right-Click on me", and "Double-Click on me"
   * Perform a click action on the first web element labeled "Click on me"
   * Verify that a message appears next to the element stating, "You clicked on a button!"
   * Perform a right-click action on the second web element labeled "Right-Click on me"
   * Verify that the message appears next to the element stating, "You right-clicked on a button!"
   * Perform a double-click action on the third web element labeled "Double-Click on me"
   * Verify that the message appears next to the element stating, "You double-clicked on a button!"
   */

  it('Click, Right Click, and Double Click', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Actions').click()

    cy.get('button[id*=\'click\']').as('buttons')

    const buttonText = [
      'Click on me',
      'Right-Click on me',
      'Double-Click on me',
    ]

    cy.get('@buttons').each(($text, index) => {
      expect($text.text()).to.equal(buttonText[index])
    })

    cy.get('@buttons').first().realClick()
    cy.get('@buttons').eq(1).rightclick()
    cy.get('@buttons').last().dblclick()

    const arr = [
      'You clicked on a button!',
      'You right-clicked on a button!',
      'You double-clicked on a button!',
    ]

    cy.get('@buttons')
      .next()
      .each(($text, index) => {
        expect($text.text()).to.equal(arr[index])
      })
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Actions" card
   * Verify that the last two web elements are present and labeled as "Drag Me", and "Drop Here",
   * Perform a Drag and Drop action on the "Drag Me" web element, and drop it to "Drop Here"
   * Verify that the first web element "Drag me" is successfully dropped into the second web element "Drop Here"
   * Verify that a message appears next to the  web element stating, "An element dropped here!"
   */

  it('Mouse Actions', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('Actions').click()

    cy.get('button[id*=\'element\']').as('dragAndDrop')
    const arr = ['Drag Me', 'Drop Here']

    cy.get('@dragAndDrop').each(($text, index) => {
      expect($text.text()).to.equal(arr[index])
    })

    cy.get('#drag_element').drag('#drop_element')

    cy.get('#drag_and_drop_result').should(
      'have.text',
      'An element dropped here!'
    )
  })
})
