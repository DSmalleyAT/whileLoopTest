const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DynamLoadPage extends Page {
    /**
     * define selectors using getter methods
     */
    get startButton () {
        return $('<button />');
    }

    get loadingBar () {
        return $('#loading');
    }

    get helloWorld () {
        return $('h4=Hello World!');
    }

    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('dynamic_loading/2');
    }
}

module.exports = new DynamLoadPage();
