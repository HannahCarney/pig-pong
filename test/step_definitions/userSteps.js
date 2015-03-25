
var userStepsWrapper = function () {
  var assert = require('assert');
  this.World = require("../support/world.js").World;

  this.Given(/^I am on the homepage$/, function(callback) {
    this.browser.visit('http://localhost:9999/', callback);
  });

  this.Then(/^I should see "(.*)" as the title$/, function (title, callback) {
    assert.equal(this.browser.text('title'), title);
    callback();
  });

  this.Then(/^I should see "(.*)"$/, function (text, callback) {
    assert.equal(this.browser.text('h2'), text);
    callback();
  });  

  this.When(/^I can enter my name$/, function (callback) {
    this.browser.fill('username', 'John');
    this.browser.pressButton('submit').then(function() {
       console.log("The page:", this.browser.html())
       assert.ok(this.browser.success);
       assert.equal(this.browser.text("title"), "Plaay-Pig-Pong");
    })
    callback();
  });
};

module.exports = userStepsWrapper;