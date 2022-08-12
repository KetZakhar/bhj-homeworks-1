const btnFontChange = document.getElementsByClassName("font-size");
const book = document.querySelector("div.book");

for (let btn of btnFontChange) {

  btn.addEventListener("click", (e) => {
    Array.from(btnFontChange).map(element => element.classList.remove("font-size_active"));
    btn.classList.add("font-size_active");

    if (btn.classList.contains("font-size_small")) {
      book.classList.remove("book_fs-big", "book_fs-small");
      book.classList.add("book_fs-small");

    } else if (btn.classList.contains("font-size_big")) {
      book.classList.remove("book_fs-big", "book_fs-small");
      book.classList.add("book_fs-big");
      
    } else {
      book.classList.remove("book_fs-big", "book_fs-small");
    }
    e.preventDefault();
  })
}