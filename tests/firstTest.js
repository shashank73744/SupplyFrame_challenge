module.exports = {
    demoTest: function(browser) {
      browser.init("http://localhost:8000/1");
  
      browser
        .assert.not.elementPresent('.not_present') // previously .assert.elementNotPresent()
        .assert.not.urlContains('https://');
  
      // ...
    }
  }