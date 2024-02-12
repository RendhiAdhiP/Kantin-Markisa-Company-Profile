 document.querySelectorAll(".carousel").forEach((carousel) => {
     const items = carousel.querySelectorAll(".cslide");
     const buttonsHtml = Array.from(items, () => {
       return `<span class="dot"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="page">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    // const buttons = carousel.querySelectorAll(".dot");
  
    // buttons.forEach((button, i) => {
    //   button.addEventListener("click", () => {
    //     // un-select all the items
    //     items.forEach((item) =>
    //       item.classList.remove("slide--selected")
    //     );
    //     buttons.forEach((button) =>
    //       button.classList.remove("dot--selected")
    //     );
  
    //     items[i].classList.add("slide--selected");
    //     button.classList.add("dot--selected");
    //   });
    // });
  
    //  // Select the first item on page load
    // items[0].classList.add("slide--selected");
    // buttons[0].classList.add("dot--selected");
});
  