// In this exercise, you will work with some data provided as an array of objects, listing information about dishes available in the Little Lemon restaurant.
//
// You will need to write a function declaration which will be able to do two things:
//
//     If the function is called with the argument true, it will output the names of the dishes and calculate their final price (including 20% tax)
//
//     If the function is called with the argument false, it will output the names of the dishes and give their prices without the additional tax
//
// The expected outcome is that all the dishes' names and prices will be shown in the console output.
//
// The text below shows the output that your code should produce:
//
// Prices with 20% tax:
// Dish: Italian pasta Price (incl.tax): $ 11.46
// Dish: Rice with veggies Price (incl.tax): $ 10.38
// Dish: Chicken with potatoes Price (incl.tax): $ 18.66
// Dish: Vegetarian Pizza Price (incl.tax): $ 7.74
//
// Prices without tax:
// Dish: Italian pasta Price (incl.tax): $ 9.55
// Dish: Rice with veggies Price (incl.tax): $ 8.65
// Dish: Chicken with potatoes Price (incl.tax): $ 15.55
// Dish: Vegetarian Pizza Price (incl.tax): $ 6.45
//
let dishes = [{name: "Italian Pasta", price: 10}, {name: "Rice with veggies", price: 20}];
const priceTaxed = price => price+price*.20;
function calculatePrice(tax) {
  if(tax === true){
    dishes.forEach(element => {
      console.log(`Dish: ${element.name}, Price: ${priceTaxed(element.price)}`);
    });
  }else{
    dishes.forEach(element => {
      console.log(`Dish: ${element.name}, Price: ${element.price}`);
    }); 
  }  
}
console.log("Prices with taxes: ")
calculatePrice(true)
console.log("Prices without taxes: ")
calculatePrice(false)
