const TablesPage = require('../pages/TablesPage')

// spec.js
describe('Sortable Tables', () => {
  const tablesPage = new TablesPage()

  beforeEach(() => {
    cy.clickCardByTitle('Tables')
  })

  /**
   * TEST CASE 1
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Click on the Quantity sort button to toggle Ascending Order
   * Verify that the Quantity column of the table is sorted in ascending order
   */

  it('Click on the Quantity sort button to toggle Ascending Order and verify', () => {
    tablesPage.clickQuantitySortButton()

    let previous = -Infinity
    tablesPage.getQuantityColumn().each(($cell) => {
      const quantity = Number($cell.text())
      expect(quantity).to.be.gte(previous)
      previous = quantity
    })
  })

  /**
   * TEST CASE 2
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Click on the Quantity sort button to toggle descending order
   * Verify that the Quantity column of the table is sorted in descending order
   */

  it('Click on the Quantity sort button to toggle Descending Order and verify', () => {
    tablesPage.clickQuantitySortButtonDescending()

    let previous = Infinity
    tablesPage.getQuantityColumn().each(($cell) => {
      const quantity = Number($cell.text())
      expect(quantity).to.be.lessThan(previous)
      previous = quantity
    })
  })
})
