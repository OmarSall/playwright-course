import { test, expect } from "@playwright/test"

test.skip("Product Page Add To Basket", async ({ page }) => {
    await page.goto("/")
    await page.pause()

   // const addToBasketButton = getByRole('button', { name: 'Add to Basket'}).first()
    // const addToBasketButton = getByRole('button', { name: 'Remove from Basket'}).first()
    const addToBasketButton = page.locator('[data-qa="product-button"]').first()
    const basketCounter = page.locator('[data-qa="header-basket-count"]')

    await addToBasketButton.waitFor()
    await expect(addToBasketButton).toHaveText("Add to Basket")
    await expect(basketCounter).toHaveText("0")

    await addToBasketButton.click()

    await expect(addToBasketButton).toHaveText("Remove from Basket")
    await expect(basketCounter).toHaveText("1")

    const checkoutLink = page.getByRole('link', {name: 'Checkout'})
    await checkoutLink.waitFor()
    await checkoutLink.click()
    await page.waitForURL("/basket")
})


// const addTwoNumbers = (a,b) => {
//     console.log("adding up two numbers")
//     return a + b
// }