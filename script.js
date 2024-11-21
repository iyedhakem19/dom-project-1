const plusButtons = document.querySelectorAll('.fa-plus-circle')
console.log(plusButtons)
plusButtons.forEach(button => {
    button.addEventListener('click', function() {
        let quantityElement = this.nextElementSibling;
        console.log(quantityElement)
        let currentQuantity = parseInt(quantityElement.innerText);
        quantityElement.innerText = currentQuantity + 1;
        updateTotalPrice();
    });
});

document.querySelectorAll('.fa-minus-circle').forEach(button => {
    button.addEventListener('click', function() {
        let quantityElement = this.previousElementSibling;
        let currentQuantity = parseInt(quantityElement.innerText);
        if (currentQuantity > 1) {
            quantityElement.innerText = currentQuantity - 1;
            updateTotalPrice();
        }
    });
});


function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll('.card').forEach(item => {
        let quantity = parseInt(item.querySelector('.quantity').innerText);
        let price = parseFloat(item.querySelector('.unit-price').innerText.replace(' $', ''));
        total += quantity * price;
    });
    document.querySelector('#total').innerText = total.toFixed(2) + ' $' 
}


document.querySelectorAll('.fa-trash-alt').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.cardToRemove').remove();
        updateTotalPrice();
    });
});


document.querySelectorAll('.fa-heart').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('liked');
        if (this.classList.contains('liked')) {
            this.style.color = 'red'; // Liked (red heart)
        } else {
            this.style.color = ''; // Unliked (default color)
        }
    });
});
console.log('.fas fa-heart')



// const plus = document.querySelector(".plus")
//  minus = document.querySelector(".minus")
//  sum= document.querySelector(".sum")

// let a =1;

// plus.addEventListener("click",()=>{
//     a++;
//     a =(a <10)? "0" +a : a ;
// num.innerText = a;
//     console.log(a)
// });
// minus.addEventListener("click",()=>{
//    if(a>1){
// a--;
// a= (a <10) ?  "0" +a : a ;
// num.innerText = a;
//    }
// });


