import { homePage } from "../../pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'


describe(' test automation for cypress', () => {
    before(() => {
        cy.login(testData.login.username, testData.login.password)
    })


    it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain', testData.message.successMessage).and('contain', testData.product.productName);






    })
})