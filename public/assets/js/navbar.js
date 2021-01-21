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
    colorPickerInput.value = "";
  }
});

document.addEventListener("keyup", function (e) {
  if (e.code == 13 || e.key == "Enter") {
    localStorage.setItem("backgroundColor", colorPickerInput.value);
    document.body.style.backgroundColor = localStorage.getItem(
      "backgroundColor"
    );
  }
});

document.body.style.backgroundColor = localStorage.getItem("backgroundColor");
