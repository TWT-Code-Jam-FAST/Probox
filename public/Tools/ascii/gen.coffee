replace =
  26: "SUB"
  27: "ESC"
  28: "FS"
  29: "GS"
  30: "RS"
  31: "US"
  32: "SPACE"
  127: "DEL"
  

gen = -> 
  document.getElementById("tb-bd").innerHTML = ""
  s = ""
  for i in [26..127]
    w = ""

    # Dec
    w += "<td>#{i}</td>"

    # Hex
    w += "<td>" + i.toString(16).padStart(2, 0) + "</td>"

    # Bin
    w += "<td>" + i.toString(2).padStart(8, 0) + "</td>"
    
    # HTML
    w += "<td>&amp;##{i};</td>"
    
    # Char
    w += "<td>" + 
      if i of replace then replace[i] 
      else String.fromCharCode(i) + "</td>"

    w ="<tr>\n" + w + "\n</tr>"
    s += w
  document.getElementById("tb-bd").innerHTML = s

$(document).ready gen;
