const initWandboxConfig = {
    status: 0,
    signal: "",
    compiler_output: "",
    compiler_error: "",
    compiler_message: "",
    program_output: "",
    program_error: "",
    program_message: "",
    permlink: "",
    url: ""
}

function parseQuery(queryString) {
    const query = {code: undefined, lang: undefined};
    const pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (let i = 0; i < pairs.length; i++) {
        const pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
}

const initOptions = {
    mode: 'javascript',
    theme: 'material',
    lineNumbers: true,
    smartIndent: true,
    autoCloseBrackets: true,
}

const exampleJS = `
// This is an example Node.js code

function greet(name) {
  console.log(\`Hello, \$\{name\}!\`)
}

greet("world")
`.trimStart()

export default {
    wbConfig: initWandboxConfig,
    parseQuery: parseQuery,
    initOptions: initOptions,
    exampleJS: exampleJS
}