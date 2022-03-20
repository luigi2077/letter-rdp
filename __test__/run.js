
const{ Parser } = require('../src/Parse')

const parser = new Parser()

const program = `42`

const ast = parser.parse(program)

console.log(JSON.stringify(ast, null, 2))