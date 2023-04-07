const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require("@babel/generator").default;
const tee = require("@babel/types");
const { log } = require('console');
const fs = require("fs")

let parseData = {
    IfStatement(path){
        if (path.node.alternate && path.node.alternate.type === "BlockStatement"){
            path.node.alternate.body.splice(0,0, tee.debuggerStatement())
        }
        if (path.node.consequent && path.node.consequent.type === "BlockStatement"){
            path.node.consequent.body.splice(0,0, tee.debuggerStatement())
        }
    }
}

let data = fs.readFileSync('./outsrc/out2.js') + ''
let ast = parser.parse(data)
traverse(ast, parseData)

let u = generator(ast,{
    compact:true,
    comments:false
}).code
fs.writeFileSync("./outsrc/out4.js", u, (e)=>{})

