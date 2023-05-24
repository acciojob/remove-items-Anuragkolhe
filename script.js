// //your JS code here. If required.
// function removeOption(){
//             let opt=document.getElementById("removeButton").addEventListener("click",removeOption);
//             opt.remove(opt.selectedIndex);
	        
//         }

//your JS code here. If required.
const removeBtn = document.getElementById("removeBtn");
removeBtn.addEventListener("click", function() {
  const select = document.getElementById("colorSelect");
  const index = select.selectedIndex; // Get the index of the selected option
  if (index !== -1) { // If an option is selected
    select.remove(index); // Remove the selected option from the list
  }
});