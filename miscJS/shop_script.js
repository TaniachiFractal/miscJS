﻿
let shoppingCart = [];
let compressedCart = [];

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
        deleteDuplicates();
        this.amount++;
        shoppingCart.push(this);
        updCompressedCart();
    }
    deleteFromCart()
    {
        this.amount-=1;
        deleteDuplicates();
        updCompressedCart();
    }
}

function deleteDuplicates() {
    var cart = shoppingCart;
    for (var i = 0; i < shoppingCart.length; i++)
    {
        for (var j = i+1; j < shoppingCart.length; j++)
        {
            if (shoppingCart[i].name == cart[j].name) cart.splice(j, 1); 
        }
    }
    shoppingCart = cart;
}

// Load the object list into the shop page
function renderShop(productArr)
{
    let shopField = document.querySelector("ul");
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

function updCompressedCart()
{
    shoppingCart.forEach((item) => {
        if (compressedCart.indexOf(item)>-1)
        compressedCart.push(item);
    });
}

function renderCart()
{
    let cartField = document.querySelector("ol");
    cartField.innerHTML = '';

    compressedCart.forEach((item) => {      
            let productLi = document.createElement('li');

            productLi.innerHTML = `
               <p>${item.name} ${item.price} руб. ${item.amount}</p>
               <button class="btRemoveFromCart">Удалить</button>
        `;

            let btAddToCart = productLi.querySelector(".btRemoveFromCart");
            btAddToCart.addEventListener('click', () => {
                item.deleteFromCart(shoppingCart);
                renderCart();
            });

            cartField.appendChild(productLi);
       
        
    });
}