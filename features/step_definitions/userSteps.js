var userStepsWrapper = function () {
  var assert = require('assert');
  this.World = require("../support/world.js").World;

  this.Given(/^I am on the homepage$/, function (callback) {
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

  this.When(/^I enter my name$/, function (callback) {
    this.browser.fill('username', 'John');
    callback();
  });

  this.When(/^I hit enter$/, function (callback) {
    this.browser.pressButton('submit', function() {
    callback();
    });
  });

  this.Then(/^I should see "(.*)" on the page$/, function (image, callback){
    assert.ok(this.browser.query("#" + image));
    callback();
  });
};

module.exports = userStepsWrapper;