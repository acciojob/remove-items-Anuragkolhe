


const removeBtn = document.getElementById("removeButton");
removeBtn.addEventListener("click", function() {
  const select = document.getElementById("colorSelect");
  const index = select.selectedIndex; // Get the index of the selected option
  if (index !== -1) { // If an option is selected
    select.remove(index); // Remove the selected option from the list
  }
});