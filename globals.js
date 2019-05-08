module.exports = {
    before: function(done) {
        console.log('Before all test suites...');
        done();
    },
    after: function(done) {
        console.log('After all test suites...');
        done();
    },
    beforeEach: function(browser, done) {
        console.log('Before each test suite...');
        done();
    },
    afterEach: function(browser, done) {
        console.log('After each test suite...');
        done();
    }
};