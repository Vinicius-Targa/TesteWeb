const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const { driver } = require('../support/web_driver');

const short_time = 2000;
const long_time = 5000;

Given(/^Browse to web site "([^"]*)"$/, async function(url) {
    await driver.get(url);
});

Then("the {string} field is filled with {string}", async function (arg1, arg2) {

    await driver.sleep(short_time);
    await driver.findElement({id: arg1}).sendKeys(arg2);
});

When("i press the {string} button", async function (arg1) {

    await driver.sleep(long_time);
    await driver.findElement({ id: arg1 }).click();
});

