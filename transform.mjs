function fail(message) {
    throw new Error(message);
}
export function transform(s) {
    if (!s.trim()) fail('Enter some source text.');
    const rows = [];

    function visit(x, path) {
        const kind = x === null ? 'null' : Array.isArray(x) ? 'array' : typeof x;
        rows.push(path + ' · ' + kind);
        if (x && typeof x === 'object') Object.entries(x).forEach(([k, v]) => visit(v, path + '[' + JSON.stringify(Array.isArray(x) ? Number(k) : k) + ']'))
    }
    visit(JSON.parse(s), '$');
    return rows.join('\n')
}
