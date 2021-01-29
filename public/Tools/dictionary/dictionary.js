document.addEventListener("keyup", function (e) {
  if (e.code == 13 || e.key == "Enter") {
    let definitions = document.getElementById("definition-container");
    let word = document.getElementById("word");
    let definition = document.getElementById("result");
    let input = document.getElementById("vocab-search-bar").value;
    let meanings;
    input = input.trim();
    if (input) {
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${input}`)
        .then((res) => (res.ok ? res.json() : res.json()))
        .then((data) => {
          if (!data.title) {
            word.innerHTML = data[0].word;
            definition.innerHTML = data[0].phonetics[0].text;
            definitions.innerHTML = "";
            for (let i = 0; i < data[0].meanings.length; i++) {
              definitions.innerHTML += `<div class = "meaning-container"></div>`;
              meanings = document.getElementsByClassName("meaning-container");
              meanings[
                i
              ].innerHTML += `<h4>${data[0].meanings[i].partOfSpeech}</h4>`;
              for (let j = 0; j < data[0].meanings[i].definitions.length; j++) {
                meanings[
                  i
                ].innerHTML += `<p>${data[0].meanings[i].definitions[j].definition}</p>`;
              }
            }
          } else if (data.message) {
            word.innerHTML = "";
            definitions.innerHTML = data.message;
            definitions.innerHTML = "";
          }
        });
    } else {
      word.innerHTML = "";
      definition.innerHTML = "";
      definitions.innerHTML = "";
    }
  }
});
