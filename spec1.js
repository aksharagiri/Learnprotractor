describe('calculator page', function() {
  function Add(a, b){
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();
  }

    it('trial and error', function() {
      
      browser.get('http://juliemr.github.io/protractor-demo/');
       browser.getTitle().then(function(title){
         console.log(title);
        
       }) 
         
      Add(3,4);
      Add(5,8);

      element.all(element(by.repeater('result in memory'))).count().then(function(count){
        console.log(count);
      })
      
      expect(element(by.css("h2[class='ng-binding']")).getText()).toBe('15');
      //expect(element(by.css('h2[class='ng-binding']')).getText())).toBe('15');
      element(by.css("h2[class='ng-binding']")).getText().then(function(value){
        console.log(value);
        expect(value).toBe('15');
      })
       
   
    

    })
  })