
let products = [];

// Init product list and render it
function main() {
    
    let productList = [
        new Product('Гречка', 200),
        new Product('Яблоки', 100),
        new Product('Телефон', 30000),
        new Product('Карандаш', 20),
        new Product('Салфетки', 66),
    ];
    renderShop(productList);

    products = productList;
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
        this.amount++;
    }
    deleteFromCart()
    {
        this.amount-=1;
    }
}


// Load the object list into the shop page
function renderShop(productArr)
{
    let shopField = document.querySelector(".shop");
    shopField.innerHTML = '';

    productArr.forEach((item) => {

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


function countFullCost()
{
    let output = 0
    products.forEach((item) => {
        output += item.price * item.amount;
    });
    return output;
}

// Render the cart
function renderCart()
{
    let cartField = document.querySelector(".cart");
    cartField.innerHTML = '';
   
    products.forEach((item) => {      

        if (item.amount > 0) {
            let productLi = document.createElement('li');

            productLi.innerHTML = `
               <p>${item.name} ${item.price} руб. ${item.amount}</p>
               <button class="btRemoveFromCart">Удалить</button>
               <button class="btAddToCart">Добавить</button>
        `;

            let btRemoveFromCart = productLi.querySelector(".btRemoveFromCart");
            btRemoveFromCart.addEventListener('click', () => {
                item.deleteFromCart();
                renderCart();
            });

            let btAddToCart = productLi.querySelector(".btAddToCart");
            btAddToCart.addEventListener('click', () => {
                item.addToCart();
                renderCart();
            });


            cartField.appendChild(productLi);
        }
             
        
    });

    let fullCost = document.querySelector(".fullCost");
    fullCost.innerHTML = `<h3>ИТОГО: ${countFullCost()} руб.`;

}