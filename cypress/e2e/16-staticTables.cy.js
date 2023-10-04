const TablesPage = require('../pages/TablesPage')

describe('Static Tables', () => {
  const tablesPage = new TablesPage()

  beforeEach(function () {
    cy.fixture('example').then((data) => {
      this.headers = data.headers
      // for first row of the table
      this.firstRow = data.firstRow
      // for last column of the table
      this.countries = data.countries
    })
    cy.clickCardByTitle('Tables')
  })

  /**
   * TEST CASE 1
   * Verify the headers of the table
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Validate the headers of the table are "Rank", "Company", "Employees", and "Country"
   */
  it('Verify the headers of the table', function () {
    //Validate the headers
    // tablesPage.getCompanyTableHeaders()
    //   .first().within(() => {
    //     cy.get("th").eq(0).should("contain.text", "Rank");
    //     cy.get("th").eq(1).should("contain.text", "Company");
    //     cy.get("th").eq(2).should("contain.text", "Employees");
    //     cy.get("th").eq(3).should("contain.text", "Country");
    //   });

    // Another approach using find and then callback
    // tablesPage.getCompanyTableHeaders()
    //   .find("th")
    //   .then(($th) => {
    //     expect($th.eq(0)).to.contain.text("Rank");
    //     expect($th.eq(1)).to.contain.text("Company");
    //     expect($th.eq(2)).to.contain.text("Employees");
    //     expect($th.eq(3)).to.contain.text("Country");
    //   });

    // Using fixtures
    tablesPage.getCompanyTableHeaders().find('th').each(($header, index) => {
      expect($header.text()).to.equal(this.headers[index])
    })
  })

  /**
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Check that the first row of the table has the values "1", "Amazon", "1,523,000", and "USA"
   * Verify the columns of the table
   */

  it('Check that the first row of the table has the expected values', function () {
    // Assuming 'tablesPage.getCompanyTableFirstRow()' returns the first row element
    tablesPage.getCompanyTableFirstRow().find('td').each(($cell, index) => {
      expect($cell.text()).to.equal(this.firstRow[index])
    })
  })

  /**
   * TEST CASE 3
   * Go to https://techglobal-training.com/frontend/
   * Click on the "Tables" card
   * Check that the "Country" column of the table has the values "USA", "China", "USA", "USA", "S. Korea"
   * Verify the entire table
   */

  it('Check that the "Country" column of the table has the expected values', function () {
    // Assuming 'tablesPage.getCountryColumn()' returns the cells in the "Country" column
    tablesPage.getCountryTableColumn().each(($cell, index) => {
        expect($cell.text()).to.equal(this.countries[index])
      })
  })
})
