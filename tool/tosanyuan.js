const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require("@babel/generator").default;
const tee = require("@babel/types");
const { log } = require('console');
const fs = require("fs")

function tosanyuan(data){
    var ast = parser.parse(data)
    let parseDate = {
        IfStatement(path){
            var shuj = []
            if ( path.node.alternate == undefined || path.node.consequent == undefined){
                return
            }
            if (path.node.alternate.body == undefined){
                if (path.node.alternate.type === "ExpressionStatement"){
                        shuj.push(path.node.alternate.expression)
                }else {
                    shuj.push(path.node.alternate)

                }

            }else {
                for (let i = 0; i< path.node.alternate.body.length; i++){
                    if (path.node.alternate.body[i].type === "ExpressionStatement"){
                        shuj.push(path.node.alternate.body[i].expression)
                    }else {
                        shuj.push(path.node.alternate.body[i])

                    }

                }
            }


            var shuj2 = []
            if (path.node.consequent.body == undefined){
                if (path.node.consequent.type === "ExpressionStatement"){
                    shuj2.push(path.node.consequent.expression)
                }else {
                    shuj2.push(path.node.consequent)

                }
            }else{
                for (let i = 0; i< path.node.consequent.body.length; i++){
                    if (path.node.consequent.body[i].type === "ExpressionStatement"){
                        shuj2.push(path.node.consequent.body[i].expression)
                    }else {
                        shuj2.push(path.node.consequent.body[i])

                    }
                }
            }

            var hu,ko,kop, kop2;
            
            
            try{
                hu = tee.conditionalExpression(path.node.test, tee.sequenceExpression(shuj2), tee.sequenceExpression(shuj))

                path.replaceInline(hu)

            }catch (e){
            }
        }
    }
    traverse(ast, parseDate)
    return generator(ast).code

}

exports.tosanyuan = tosanyuan;

