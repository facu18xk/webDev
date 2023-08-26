let domContainer =  document.querySelector(".pizzas"), orderPrice = 0, domPrice = document.querySelector(".price--amount"), cartItems = [], domTakeOrder = document.getElementById("takeOrder"); 
class MenuItem{
  constructor(name = "Pizza", description = "Medium | mozzarella ", price = 12, img = "assets/pizza.png"){
    this.name = name;
    this.description = description;
    this.price = price;
    this.img = img
  }
  create(){
    let container = document.createElement("article");
    let img = document.createElement("img");
    let descriptionContainer = document.createElement("div");
    let title = document.createElement("h2");
    let description = document.createElement("p");
    let price = document.createElement("p");
    let button = document.createElement("button");
    let buttonImg = document.createElement("img");
    // Add style classes
    container.classList.add("pizza");
    img.classList.add("pizza--img");
    descriptionContainer.classList.add("pizzas--description");
    title.classList.add("description--title");
    description.classList.add("description--text");
    price.classList.add("description--price");
    button.classList.add("description--add");
    //Adding html content 
    buttonImg.setAttribute("src", "assets/plus.png");
    img.setAttribute("src", this.img);
    descriptionContainer.innnerText = this.description;
    title.innerText = this.name;
    description.innerText = this.description;
    price.innerText = "$"+this.price;
    // Append elemnts
    button.append(buttonImg, "ADD");
    descriptionContainer.append(title, description, price, button);
    container.append(img,descriptionContainer);
    domContainer.appendChild(container);
  }
}
const pizza1 = new MenuItem();
const pizza2 = new MenuItem();
const pizza3 = new MenuItem();
window.addEventListener("load", ()=>{
  pizza1.create();
  pizza2.create();
  pizza3.create();
 })
// Add to cart 
domContainer.addEventListener("click", (event)=>{
  //Conting the total price
  tmp = event.target.parentElement.children[2].innerText;
  // Pushing the elements in the cart
  cartItems.push(event.target.parentElement.children[0].innerText);
  tmp = tmp.split("");
  tmp.shift();
  tmp = tmp.join("");
  orderPrice += parseFloat(tmp);
  domPrice.innerText = ` $${orderPrice}`;
})

