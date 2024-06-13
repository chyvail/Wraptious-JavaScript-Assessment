// select parent
const itemParent = document.getElementById("item-parent");

// Add event listener to parent
itemParent.addEventListener("click", (e) => {
  // if element has class item we log the text content of the clicked item
  if (e.target && e.target.classList.contains("item")) {
    console.log("Clicked", e.target.textContent);
  }
});
