
const quantityControl = [...document.querySelectorAll(".product__quantity-control")];
const addBotton = [...document.getElementsByClassName("product__add")];
const cart = document.querySelector(".cart__products");
const titlPage = document.querySelector(".cart");

addBotton.forEach(element => {
	element.addEventListener("click", () => {
		let carttItem = [...cart.children];
		let itemId = element.closest(".product");
		let itemImg = itemId.children[1].getAttribute("src");
		let itemAmount = +itemId.querySelector(".product__quantity-value").innerHTML;
		let searchItem = carttItem.findIndex(
			index => index.dataset.id === itemId.dataset.id
		)
		if (searchItem === -1) {
			cart.innerHTML += `<div class="cart__product" data-id=${itemId.dataset.id}>
		<img class="cart__product-image" src=${itemImg}>
		<div class="cart__product-count">${itemAmount}</div>
		<div class="cart__delet">&times;</div>
  </div>`
		} else {
			let basketAmount =
				+carttItem[searchItem].children[1].innerHTML + itemAmount;
                carttItem[searchItem].children[1].innerHTML = basketAmount;
		}
	})
})


quantityControl.forEach(element => {
	element.addEventListener("click", () => {
		let amountProduct = element
			.closest(".product__quantity-controls")
			.querySelector(".product__quantity-value")
		if (
			element.classList.contains("product__quantity-control_dec") === true &&
			amountProduct.innerHTML > 1
		) {
			--amountProduct.innerHTML
		} else if (
			element.classList.contains("product__quantity-control_inc") === true
		) {
			++amountProduct.innerHTML
		}
	})
})
