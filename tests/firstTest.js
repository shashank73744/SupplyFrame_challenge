module.exports = {
    demoTest: function(browser) {
      browser.init("http://localhost:8000");
  
      browser
        .assert.not.elementPresent('.not_present') // previously .assert.elementNotPresent()
        .assert.not.urlContains('https://')
        .assert.elementPresent("#dogBreed")
        .assert.elementPresent("#dogImage")
        .assert.domPropertyEquals('#dogBreed', 'classList', ['imageFrame'])
        .assert.domPropertyEquals('#paginationElement', 'classList', ['paginationindex'])
        .getElementSize("#dogImage", function(result){
            console.log('result:', result.value.height,result.value.width);
        })
  
      // ...
    }
  }