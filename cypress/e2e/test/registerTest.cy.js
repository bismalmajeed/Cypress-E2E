//we are using mocha jo describe is used in that cases.

/// <reference types="Cypress" />

import { registerPage } from "../../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../fixtures/registerData.json'

describe(' test automation', () => {

    it('register flow', () => {
        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterlastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()



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