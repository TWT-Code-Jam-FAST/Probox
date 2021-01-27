var gen, replace;

replace = {
  0: "NUL",
  1: "SOH",
  2: "STX",
  3: "ETX",
  4: "EOT",
  5: "ENQ",
  6: "ACK",
  7: "BEL",
  8: "BS",
  9: "HT",
  10: "LF",
  11: "VT",
  12: "FF",
  13: "CR",
  14: "SO",
  15: "SI",
  16: "DLE",
  17: "DC1",
  18: "DC2",
  19: "DC3",
  20: "DC4",
  21: "NAK",
  22: "SYN",
  23: "ETB",
  24: "CAN",
  25: "EM",
  26: "SUB",
  27: "ESC",
  28: "FS",
  29: "GS",
  30: "RS",
  31: "US",
  32: "SPACE",
  127: "DEL",
};

gen = function () {
  var i, j, s, w;
  document.getElementById("tb-bd").innerHTML = "";
  s = "";
  for (i = j = 0; j <= 127; i = ++j) {
    w = "";
    // Dec
    w += `<td>${i}</td>`;
    // Hex
    w += "<td>" + i.toString(16).padStart(2, 0) + "</td>";
    // Bin
    w += "<td>" + i.toString(2).padStart(8, 0) + "</td>";

    // HTML
    w += `<td>&amp;#${i};</td>`;

    // Char
    w +=
      "<td>" + (i in replace ? replace[i] : String.fromCharCode(i) + "</td>");
    w = "<tr>\n" + w + "\n</tr>";
    s += w;
  }
  return (document.getElementById("tb-bd").innerHTML = s);
};

$(document).ready(gen);
