replace =
  30: "RS"
  31: "US"
  32: "SPACE"
  127: "DEL"
  

gen = -> 
  document.getElementById("tb-bd").innerHTML = ""
  s = ""
  for i in [30..127]
    w = ""

    # Dec
    w += "<td>" + i + "</td>"

    # Hex
    w += "<td>" + i.toString(16).padStart(2, 0) + "</td>"

    # Bin
    w += "<td>" + i.toString(2).padStart(8, 0) + "</td>"
    
    # HTML
    w += "<td>" + "" + "</td>"
    
    # Char
    w += "<td>" + 
      if i of replace then replace[i] 
      else String.fromCharCode(i) + "</td>"

    w ="<tr>\n" + w + "\n</tr>"
    s += w
  document.getElementById("tb-bd").innerHTML = s

$(document).ready gen;
