
let shoppingCart = [];

function main() {
    let products = [
        new Product('Гречка', 200),
        new Product('Яблоки', 100),
        new Product('Телефон', 30000),
        new Product('Карандаш', 20),
        new Product('Салфетки', 66),
    ];
    renderShop(products);
}

// A product with name, price and amount
class Product
{
    // Init object
    constructor(name, price)
    {
        this.name = name;
        this.price = price;
        this.amount = 0;
    }
    addToCart()
    {
        shoppingCart = shoppingCart.filter((element, index) => {
            return shoppingCart.indexOf(element) === index;
        });
        this.amount++;
        shoppingCart.push(this);
    }
    deleteFromCart()
    {
        shoppingCart = shoppingCart.filter((element, index) => {
            return shoppingCart.indexOf(element) === index;
        });
        shoppingCart.splice(shoppingCart.indexOf(this), 1);
    }
}
// Load the object list into the shop page
function renderShop(productArr)
{
    let shopField = document.querySelector("ul");
    shopField.innerHTML = '';

    productArr.forEach((item, index) => {
        let productLi = document.createElement('li');

        productLi.innerHTML = `
               <h3>${item.name}</h3>
               <p>${item.price} руб.</p>
               <button class="btAddToCart">Добавить в корзину</button>
        `;

        let btAddToCart = productLi.querySelector(".btAddToCart");
        btAddToCart.addEventListener('click', () => {

            item.addToCart();
            renderCart();
        });

        shopField.appendChild(productLi);
    });
    
}
function renderCart()
{
    let cartField = document.querySelector("ol");
    cartField.innerHTML = '';

    shoppingCart.forEach((item, index) => {      
            let productLi = document.createElement('li');

            productLi.innerHTML = `
               <p>${item.name} ${item.price} руб. ${item.amount}</p>
               <button class="btRemoveFromCart">Удалить</button>
        `;

            let btAddToCart = productLi.querySelector(".btRemoveFromCart");
            btAddToCart.addEventListener('click', () => {
                item.deleteFromCart(shoppingCart);
                renderCart(shoppingCart);
            });

            cartField.appendChild(productLi);
       
        
    });
}