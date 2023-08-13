//we are using mocha jo describe is used in that cases.

/// <reference types="Cypress" />

import { homePage } from "../../pages/homePage"
const homePageObj = new homePage()
import testData from '../../fixtures/testData.json'

describe(' test automations of the ecommerce website', () => {

        before(() => {
        cy.login(testData.login.username, testData.login.password)
        })

        it('Add To Cart flow', () => {
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage().should('contain', testData.message.successMessage)



    })
})





/*
import { registerPage } from "../../pages/registerPage"
//import the locators from files

//creating object of the class
const registerObj = new registerPage()

//using fixture files data
 import registerData from '../../fixtures/registerData.json'


describe('test automation',()=>{

    it('register flow'),()=>{
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName) //parameter 
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckBox()
        registerObj.clickOnButton()
         

    }


})

//test suite name


*/