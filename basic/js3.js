var selling_Price =  199;
var listing_price = 799;

var Discount_Percent = ((listing_price - selling_Price) / listing_price) * 100;

console.log("Discount Price is : " + Discount_Percent);

display_Discount_percentage = Math.round(Discount_Percent);

console.log(display_Discount_percentage + "% off");


// type and Operator Precedence
var result = listing_price > selling_Price;

console.log(result);
console.log(typeof result);