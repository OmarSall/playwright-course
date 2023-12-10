

export class LoginPage {
    constructor(page) {
        this.page = page

        this.moveToSignUpButton = page.locator('[data-qa="go-to-signup-button"]')
    }


    moveToSignup = async () => {
        await this.moveToSignUpButton.waitFor()
        await this.moveToSignupButton.click()
        this.page.waitForURL(/\/signup/, {timeout: 3000})
    }

}