describe('File Download & File Upload ', () => {
  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Download" card
   * Click on the "TechGlobal School.pptx" file
   * Validate the file is downloaded in your Downloads file
   */

  it('File Download', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('File Download & Upload').click()

    cy.get('#file_download').click()

    const fileName = 'SampleText.txt'
    cy.readFile(`cypress/downloads/${fileName}`)
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "File Upload" card
   * Send the path of the file as keys to the "Choose File" input box
   * Click on the "UPLOAD" button
   * Validate the result message equals "You Uploaded 'hello.txt'"
   */

  it('File Upload', () => {
    cy.visit('https://techglobal-training.com/frontend')

    cy.contains('File Download & Upload').click()

    const fileName = 'SampleText.txt'

    cy.get('#file_upload').selectFile(`cypress/downloads/${fileName}`)

    cy.get('#file_submit').realClick()

    cy.get('#result').should('have.text', `You uploaded ${fileName}`)
  })
})
