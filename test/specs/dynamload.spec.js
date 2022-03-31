const DynamLoadPage = require('../pageobjects/dynamload.page');

describe('My Dynamic Loading application', () => {
    it('should click the start button', async () => {
        await DynamLoadPage.open();

        
        await (DynamLoadPage.startButton).click();
    });
    it('should run a while loop until the element loads', async () => {
        let condition = true
        
        while (condition) {
            console.log('h4 not displayed');
            if () {
                let condition = false
            };
        };

        // await browser.pause(500);
        // await expect (DynamLoadPage.loadingBar).toBeExisting(); 
        // await browser.pause(6400);
        // await (DynamLoadPage.helloWorld).toBeExisting;
    
});
});