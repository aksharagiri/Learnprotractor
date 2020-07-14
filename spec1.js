describe('angularjs homepage todo list', function() {
    it('should add a todo', function() {
      browser.get('https://www.juniper.net/').then(function(){
        var request = require('request');
var assert = require('assert');
element.all(by.tagName('a')).then(function(link) {
   var url = link.getAttribute('href');
   if(url) {
       request(url, function (error, response, body) {
           assert.equal(response.statusCode, 200, 'Status code is not OK');
       });
    }
});
      })
      
    })
})
