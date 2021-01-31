Storage = window.localStorage

cm = new (CodeMirror.fromTextArea)(document.getElementById('compiler-ip'),
  lineNumbers: true
  mode: 'javascript'
  theme: 'dracula'
  lineWrapping: true
  scrollbarStyle: 'overlay'
  autoCloseBrackets: true)

fetchData = (code, lang) ->
  req = await fetch "https://Wandbox-API.snowballsh.repl.co?code=#{encodeURIComponent(code)}&lang=#{encodeURIComponent(lang)}"

  newData = await req.json()

  msg = newData.program_message or newData.compiler_message or ''

  document.getElementById('msg').innerHTML = msg.replaceAll('\n', '<br>').replaceAll(' ', '&nbsp')
  document.getElementById('runbtn').innerHTML = 'Run'
  document.getElementById('runbtn').classList = 'btn btn-success'

submit = ->
  document.getElementById('runbtn').innerHTML = 'Compiling...'
  document.getElementById('runbtn').classList = 'btn btn-info'
  code = cm.getValue()
  update()
  fetchData code, lang
  return

update = ->
  input = document.getElementById('select')
  theme = input.options[input.selectedIndex].value
  cm.setOption 'theme', theme.trim().toLowerCase()
  localStorage.setItem 'SAVETHEME', input.selectedIndex
  localStorage.setItem 'SAVELANG', lang
  localStorage.setItem 'SAVECODE', cm.getValue()
  return

reset = ->
  localStorage.clear()
  return

cm.setValue JSCODE

cm.setSize 'auto', window.innerHeight

lang = 'nodejs-head'

$(document).ready ->
  if t = localStorage.getItem('SAVETHEME')
    document.getElementById('select').selectedIndex = t
  cm.on 'change', update
  if l = localStorage.getItem('SAVELANG')
    lang = l
    temp = JSCODE
    i = 1
    j = 'js'
    m = 'javascript'
    switch l
      when 'cpython-head'
        temp = PYCODE
        i = 2
        j = 'py'
        m = 'python'
      when 'nodejs-head'
        temp = JSCODE
        i = 1
        j = 'js'
        m = 'javascript'
      when 'gcc-head'
        temp = CPPCODE
        i = 3
        j = 'cpp'
        m = 'text/x-c++src'
      when 'ruby-head'
        temp = RBCODE
        i = 4
        j = 'rb'
        m = 'ruby'
      when 'lua-5.4.0'
        temp = LUACODE
        i = 5
        j = 'lua'
        m = 'lua'

    if co = localStorage.getItem('SAVECODE')
      temp = co

    $('#tab-' + i).tab 'show'
    $('#select-' + j).tab 'show'

    cm.setValue temp
    cm.setOption 'mode', m

  document.getElementById('msg').innerHTML = 'Press \'Run\' to run code!'
  $('#select-py').click (e) ->
    e.preventDefault()
    cm.setValue PYCODE
    cm.setOption 'mode', 'python'
    lang = 'cpython-head'
    update()
    return
  $('#select-js').click (e) ->
    e.preventDefault()
    cm.setValue JSCODE
    cm.setOption 'mode', 'javascript'
    lang = 'nodejs-head'
    update()
    return
  $('#select-cpp').click (e) ->
    e.preventDefault()
    cm.setValue CPPCODE
    cm.setOption 'mode', 'text/x-c++src'
    lang = 'gcc-head'
    update()
    return
  $('#select-rb').click (e) ->
    e.preventDefault()
    cm.setValue RBCODE
    cm.setOption 'mode', 'ruby'
    lang = 'ruby-head'
    update()
    return
  $('#select-lua').click (e) ->
    e.preventDefault()
    cm.setValue LUACODE
    cm.setOption 'mode', 'lua'
    lang = 'lua-5.4.0'
    update()
    return
  update()
  $('select').on 'change', update
  return