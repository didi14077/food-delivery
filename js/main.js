const cartButton = document.querySelector("#shopping-cart");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

// cartButton.addEventListener('click', function (event) {
//     modal.classList.remove("is-open");
// });

function toggleModal() {
    modal.classList.toggle("is-open");
}
new WOW().init();