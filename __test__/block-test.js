module.exports = test => {
    test(`
    {
        43;
        "hello";
    }
    `, {
        type: 'Program',
        body: [
            {
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'NumericLiteral',
                            value: 43,
                        }
                    },
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'StringLiteral',
                            value: 'hello'
                        }
                    }
                ]
            }
        ]

    }
    ),
    test(`
    {

    }
    `,
    {
        type: 'Program',
        body: [
            {
                type: 'BlockStatement',
                body: []
            }
        ]
    }
    )
}