
const { Tokenizer } = require('./Tokenizer.js')

class Parser {
    constructor() {
        this._string = ''
        this._tokenizer = new Tokenizer()
    }
    parse(string) {
        this._string = string
        this._tokenizer.init(string)
        this._lookahead = this._tokenizer.getNextToken()
        return this.Program()
    }

    Program() {
        return this.NumbericLiteral()
    }

    NumbericLiteral() {
        const token = this._eat('NUMBER')
        return {
            type: 'NumberricLiteral',
            value: Number(token.value)
        }
    }

    _eat(tokenType) {
        const token = this._lookahead
        if(token == null) {
            throw new SyntaxError(
                `Unexpected end of input, expected: "${tokenType}"`
            )
        }
        
        if(token.type !== tokenType) {
            throw new SyntaxError(
                `Unexpected token: "${token.value}", expected: "${tokenType}"`
            )
        }
        
        this._lookahead = this._tokenizer.getNextToken()
        return token
    }
}

module.exports = {
    Parser
}
