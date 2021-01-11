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

export default {
    wbConfig: initWandboxConfig,
    parseQuery: parseQuery
}