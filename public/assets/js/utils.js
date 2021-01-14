function searchSO() {
  const oVal = document.getElementById("inputSO").value;
  const val = encodeURIComponent(oVal);
  fetch(
    `https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&accepted=True&body=${val}&site=stackoverflow`
  ).then((v) =>
    v.json().then((data) => {
      if (data.items.length == 0) {
        document.getElementById("Card-Body").innerHTML =
          "No Results found, please use more concise keywords!";
        return;
      }
      
      x = data.items
        .slice(0, 10)
        .map((a) => `<a href="${a.link}">${a.title}</a>`);
      document.getElementById(
        "Card-Title"
      ).innerHTML = `Search Result for ${oVal}`;
      document.getElementById("Card-Body").innerHTML = x.join("<br>");
    })
  );
}
