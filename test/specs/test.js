const assert = require('assert');

describe('Google Home Page Test', () => {
    it.only('should have correct title', () => {
        browser.url('');
        browser.pause(5000);
        const title = browser.getTitle();
        assert.strictEqual(title, 'Google');
    });
}); 