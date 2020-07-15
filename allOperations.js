describe("all calculator operations", function(){

function add(a,b){
    element(by.model('first')).sendKeys(a);
    element(by.model('operator')).element(by.css("option[value='ADDITION']")).click();
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();
}

function mul(a,b){
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();
}

function sub(a,b){
    element(by.model('first')).sendKeys(a);
    element(by.model('second')).sendKeys(b);
    element(by.id('gobutton')).click();
}


    it("perform all tests",function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        add(5,6);
        element(by.repeater('result in memory')).element(by.css('td:nth-child(3)')).getText().then(function(value){
            console.log(value);
        })

    })

    
})