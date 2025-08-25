// Menu bar function for mobile screen
var menu= document.querySelector('.menu')
var menuList= document.querySelector('nav')
menu.addEventListener('click', ()=> {
    menuList.classList.toggle('showmenu')
})


// basket list function for adding the items to the list
// if 'add to card' button is clicked, it will retrieve the product data by using data-name and data-price attribute
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        const productName = this.getAttribute('data-name');
        const productPrice = this.getAttribute('data-price');

        // Create a new list item for the basket
        const cartItem = document.createElement('li');
        cartItem.textContent = `${productName} - AED ${productPrice}`;

        // Add to basket (ul element)
        document.getElementById('cart-items').appendChild(cartItem);
    });
});

