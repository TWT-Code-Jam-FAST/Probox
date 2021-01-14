function searchSO(amount = 10, cache = 0) {
  const oVal = document.getElementById("inputSO").value;
  const val = encodeURIComponent(oVal);
  fetch(
    `https://api.stackexchange.com/2.2/search/advanced?pagesize=${amount}&order=desc&sort=activity&accepted=True&q=${val}&site=stackoverflow`
  ).then((v) =>
    v.json().then((data) => {
      if (data.items.length === 0) {
        document.getElementById("Card-Body").innerHTML =
          "No Results found, please use more concise keywords!";
        return;
      }

      if (amount >= 100 || cache === data.items.length) {
        document.getElementById("Load-More").innerHTML =
          "<h5>Sorry, no more results</h5>";
      } else {
        document.getElementById("Load-More").innerHTML = `
      <button class="btn btn-primary" type="button" onClick="searchSO(${
        amount + 10
      }, ${data.items.length})">Load More</button>`;
      }

      const d = data.items;
      const x = d.map((a) => `<a href="${a.link}">${a.title}</a>`);
      document.getElementById(
        "Card-Title"
      ).innerHTML = `Search Result for ${oVal}`;
      document.getElementById("Card-Body").innerHTML = x.join("<br>");
    })
  );
}
