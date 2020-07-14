describe('calculator page', function() {
    it('addition', function() {
      
      browser.get('http://juliemr.github.io/protractor-demo/');
  
      
      element(by.model('first')).sendKeys('5');
      element(by.model('second')).sendKeys("10");
      element(by.id('gobutton')).click().then(function(){
        browser.sleep(3000);

      })
    
   
    

    });
  });