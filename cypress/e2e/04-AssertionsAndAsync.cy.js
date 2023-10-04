describe('Cypress Assertion Types', () => {
  it('Default Assertions', () => {
    // Default Assertions

    // This will fail if the page doesn't send text/html with a 200 status.
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    cy
      // there is a default assertion that this
      // button must exist in the DOM before proceeding
      .get('#register_button')
      // before issuing the click, this button must be "actionable"
      // it cannot be disabled, covered, or hidden from view.
      .click()

    // This will fail if an element with the text "register_button" doesn't eventually appear in the DOM.
    cy.contains('Register')

    // This will fail if an element with the id "#register_button" doesn't eventually appear in the DOM.
    cy.get('#register_button')

    // This will fail if the element is not typeable.
    cy.get('#text_input1').type('MyName')

    // Reversing default assertions
    cy.get('#register_button').click()
    // now Cypress will wait until this
    // <button> is not in the DOM
    cy.get('#rregister_button').should('not.exist')

    // and now make sure this #modal does not exist in the DOM
    // and automatically wait until it's gone!
    cy.get('#modal').should('not.exist')
  })

  it('Implicit Assertions', () => {
    // Implicit Assertions

    // This will fail if the page doesn't send text/html with a 200 status.
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    // This assertion checks if the element with the ID 'main_heading' contains the text 'Html Elements'.
    cy.get('#main_heading').should('have.text', 'Html Elements')

    // This assertion checks if the element with the ID 'main_heading' contains the substring 'Elements'.
    cy.get('#main_heading').should('contain.text', 'Elements')

    // This is similar to 'contain.text' and checks if the text 'Elements' is included in the element with the ID 'main_heading'.
    cy.get('#main_heading').should('include.text', 'Elements')

    // This assertion checks if the element with the ID 'main_heading' has an attribute named 'id'.
    cy.get('#main_heading').should('have.attr', 'id')

    // This assertion checks if the element with the ID 'main_heading' has an attribute named 'id' with the value 'main_heading'.
    cy.get('#main_heading').should('have.attr', 'id', 'main_heading')

    // This assertion checks if there are exactly 2 paragraph elements whose IDs contain the substring 'paragraph'.
    cy.get('p[id*="paragraph"]').should('have.length', 2)

    // This assertion checks if the checkbox with the ID 'checkbox_1' is enabled.
    cy.get('#checkbox_1').should('be.enabled')

    // This assertion checks if the checkbox with the ID 'checkbox_1' is not checked.
    cy.get('#checkbox_1').should('not.be.checked')

    // This assertion clicks the checkbox with the ID 'checkbox_1' and then checks if it becomes checked.
    cy.get('#checkbox_1').click().should('be.checked')

    // This assertion checks if all paragraph elements whose IDs contain the substring 'paragraph' have the CSS color value 'rgb(105, 105, 105)'.
    cy.get('p[id*="paragraph"]').should(
      'have.css',
      'color',
      'rgb(105, 105, 105)'
    )

    // This assertion checks if a 'div' element containing the text 'Headings' is visible on the page.
    cy.get('div').contains('Headings').should('be.visible')

    // This assertion checks if the element with the ID 'languages_heading' contains the text 'Programming Languages'.
    cy.get('#languages_heading').should('have.text', 'Programming Languages')

    // This assertion checks if the element with the ID 'tools_heading' contains the text 'Automation Tools'.
    cy.get('#tools_heading').should('have.text', 'Automation Tools')

    // Imagine doing multiple assertion against the same web element as below.
    // cy.get('#hello_paragraph').should('have.text', 'Hello World!')
    // cy.get('#hello_paragraph').should('have.attr', 'id', 'hello_paragraph')

    // This is much valid way to conduct multiple assertion against the same web element using and().
    cy.get('#hello_paragraph')
      .should('have.text', 'Hello World!')
      .and('have.attr', 'id', 'hello_paragraph')
  })

  it('Explicit Assertions', () => {
    // Explicit Assertions

    // This will fail if the page doesn't send text/html with a 200 status.
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    // Check if the element with the ID 'main_heading' contains the text 'Html Elements'.
    cy.get('#main_heading').then(($el) => {
      expect($el.text()).to.eq('Html Elements')
    })

    // Check if the element with the ID 'main_heading' contains the substring 'Elements'.
    cy.get('#main_heading').then(($el) => {
      expect($el.text()).to.include('Elements')
    })

    // Similar to 'contain.text', checks if the text 'Elements' is included in the element with ID 'main_heading'.
    cy.get('#main_heading').then(($el) => {
      expect($el.text()).to.include('Elements')
    })

    // Check if the element with the ID 'main_heading' has an attribute named 'id'.
    cy.get('#main_heading').then(($el) => {
      expect($el.attr('id')).to.exist
    })

    // Check if the element with the ID 'main_heading' has an attribute named 'id' with the value 'main_heading'.
    cy.get('#main_heading').then(($el) => {
      expect($el.attr('id')).to.eq('main_heading')
    })

    // Check if there are exactly 2 paragraph elements whose IDs contain the substring 'paragraph'.
    cy.get('p[id*="paragraph"]').then(($el) => {
      expect($el).to.have.length(2)
    })

    // Check if the checkbox with the ID 'checkbox_1' is enabled.
    cy.get('#checkbox_1').then(($el) => {
      expect($el).to.be.enabled
    })

    // Check if the checkbox with the ID 'checkbox_1' is not checked.
    cy.get('#checkbox_1').then(($el) => {
      expect($el).not.to.be.checked
    })

    // Click the checkbox with the ID 'checkbox_1' and then checks if it becomes checked.
    cy.get('#checkbox_1')
      .click()
      .then(($el) => {
        expect($el).to.be.checked
      })

    // Check if all paragraph elements whose IDs contain the substring 'paragraph' have the CSS color value 'rgb(105, 105, 105)'.
    cy.get('p[id*="paragraph"]').then(($el) => {
      expect($el.css('color')).to.eq('rgb(105, 105, 105)')
    })

    // Check if a 'div' element containing the text 'Headings' is visible on the page.
    cy.get('div')
      .contains('Headings')
      .then(($el) => {
        expect($el).to.be.visible
      })

    // Check if the element with the ID 'languages_heading' contains the text 'Programming Languages'.
    cy.get('#languages_heading').then(($el) => {
      expect($el.text()).to.eq('Programming Languages')
    })

    // Check if the element with the ID 'tools_heading' contains the text 'Automation Tools'.
    cy.get('#tools_heading').then(($el) => {
      expect($el.text()).to.eq('Automation Tools')
    })
  })

  it('More callback practices - Validate Paragraphs', () => {
    cy.visit('https://techglobal-training.com/frontend')
    cy.contains('Html Elements').click()

    cy.get('#main_heading').should('have.text', 'Html Elements')

    cy.get('div')
      .contains('Paragraphs')
      .as('paraphHeader')
      .should('be.visible')

    cy.get('#hello_paragraph').should('have.text', 'Hello World!')
    cy.get('#testing_paragraph').should(
      'have.text',
      'I like automation testing!'
    )

    // invoke() is another way of interacting with DOM object. Both way works.
    cy.get('#hello_paragraph')
      .invoke('text')
      .then((text) => {
        const actualText = text
        expect(actualText).to.equal('Hello World!')

        // to make it chainable again we need to introduce it back as cypress-wrapped object
        // But since we fetch the text, and it's not a text belongs to web element, we can't use 'have.text' chainer
        // Because still, it's a 'string' that is wrapped as a cypress object.
        cy.wrap(actualText).should('eq', 'Hello World!')
      })

      cy.get('#testing_paragraph')
        .invoke('text')
        .then((text) => {
          const actualText = text
          cy.wrap(actualText).should('eq', 'I like automation testing!')
        })

    const arr = ['Hello World!', 'I like automation testing!']

    cy.get('@paraphHeader')
      .nextAll()
      .each(($el, index) => {
        cy.log($el.text())
        expect($el.text()).to.equal(arr[index])
      })

    // for(let i = 0; i < arr.length; i++) {
    //     cy.get('@paraphHeader').nextAll().eq(i).should('have.text', arr[i])
    // }
  })
})
