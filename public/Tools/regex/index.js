function copyId(id) {
  const copyText = document.getElementById(id);

  var range, selection;

  if (document.body.createTextRange) {
    range = document.body.createTextRange();
    range.moveToElementText(copyText);
    range.select();
  } else if (window.getSelection) {
    selection = window.getSelection();
    range = document.createRange();
    range.selectNodeContents(copyText);
    selection.removeAllRanges();
    selection.addRange(range);
  }

  try {
    document.execCommand("copy");
    alert("Regex Copied!");
  } catch (err) {
    alert("Failed to copy regex...");
  }

  if (selection) selection.removeAllRanges();
}
