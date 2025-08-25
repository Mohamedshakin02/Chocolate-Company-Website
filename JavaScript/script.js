// Menu bar function for mobile screen
var menu= document.querySelector('.menu')
var menuList= document.querySelector('nav')
menu.addEventListener('click', ()=> {
    menuList.classList.toggle('showmenu')
})


// Customizable chocolate box function
function updateBox() {
    const normalCount = parseInt(document.getElementById("Choco").value) || 0;  
    const vanillaCount = parseInt(document.getElementById("Vanilla").value) || 0;
    const strawberryCount = parseInt(document.getElementById("Strawberry").value) || 0;
    const message = document.getElementById('message');  

    const slots = document.querySelectorAll('.box .choco-slot');  
    const maxChocolates = slots.length;  // 9 slots

    // Reset all slots
    slots.forEach(slot => slot.className = 'choco-slot');

    let slotIndex = 0;

    // Fill chocolates until the box is full
    function fillChocolates(count, type) {
        for (let i = 0; i < count; i++) {
            if (slotIndex >= maxChocolates) break;  // stop if box is full
            slots[slotIndex].classList.add(type);
            slotIndex++;
        }
    }

    fillChocolates(normalCount, 'normal');
    fillChocolates(vanillaCount, 'vanilla');
    fillChocolates(strawberryCount, 'strawberry');

    // Show message if box is full
    if (slotIndex >= maxChocolates) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }

    // Prevent user from adding more chocolates than available slots
    if (slotIndex >= maxChocolates) {
        document.getElementById("Choco").value = 0;
        document.getElementById("Vanilla").value = 0;
        document.getElementById("Strawberry").value = 0;
    }
}


// Add event listeners to each input field to update the chocolate box
document.getElementById("Choco").addEventListener('input', updateBox);
document.getElementById("Vanilla").addEventListener('input', updateBox);
document.getElementById("Strawberry").addEventListener('input', updateBox);


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