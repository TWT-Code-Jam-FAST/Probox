var gen, replace;

replace = {
  30: "RS",
  31: "US",
  32: "SPACE",
  127: "DEL",
};

gen = function () {
  var i, j, s, w;
  document.getElementById("tb-bd").innerHTML = "";
  s = "";
  for (i = j = 30; j <= 127; i = ++j) {
    w = "";
    // Dec
    w += "<td>" + i + "</td>";
    // Hex
    w += "<td>" + i.toString(16).padStart(2, 0) + "</td>";
    // Bin
    w += "<td>" + i.toString(2).padStart(8, 0) + "</td>";

    // HTML
    w += "<td>" + "" + "</td>";

    // Char
    w +=
      "<td>" + (i in replace ? replace[i] : String.fromCharCode(i) + "</td>");
    w = "<tr>\n" + w + "\n</tr>";
    s += w;
  }
  return (document.getElementById("tb-bd").innerHTML = s);
};

$(document).ready(gen);
