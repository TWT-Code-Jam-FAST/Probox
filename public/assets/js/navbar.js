colorPickerIcon = document.getElementById("color-picker");
colorPickerInput = document.getElementById("color-editor");

colorPickerIcon.addEventListener("click", function () {
  colorPickerInput.style.display = "inline";
});

document.addEventListener("click", (e) => {
  if (
    !e.target.matches(".nav-element") &&
    !e.target.matches(".color-input") &&
    !e.target.matches("rect")
  ) {
    colorPickerInput.style.display = "none";
    // colorPickerInput.value = "";
  }
});
