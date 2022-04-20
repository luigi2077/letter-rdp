
const{ Parser } = require('../src/Parse')
const assert = require('assert')

const parser = new Parser()

const tests = [
    require('./literals-test'),
    require('./statement-list-test'),
    require('./block-test'),
    require('./empty-statement-test')
]
function exec() {
    const program = `  
    /* this is multiple lines
     * second
    */
    "hello";
    
    // Number
    42;
    `

    const ast = parser.parse(program)

    console.log(JSON.stringify(ast, null, 2))
}

exec()

function test(program, expected) {
    const ast = parser.parse(program)
    assert.deepEqual(ast, expected)
}
tests.forEach(testRun => testRun(test))

console.log('All assertions passed!')