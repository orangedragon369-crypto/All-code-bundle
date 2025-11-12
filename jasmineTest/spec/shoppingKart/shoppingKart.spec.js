import ShoppingKart from `./shoppingKart.js`;

describe("The shopping cart ", function(){
    let kart; 

    beforeEach(funtion(){
        kart = new ShoppingKart();
    });

    it("starts empty", function (){
        expect(kart.getItemCount()).toBe(0);
    })
})