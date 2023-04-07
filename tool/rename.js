const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const tee = require("@babel/types");
const fs = require("fs");
const generator = require("@babel/generator").default;
function renameCj(ast){
    var offchaConsole = 0
    var remanet = 1
    var neNum = 0
    var cbbfunj = 0
    var parseInfo = {
        VariableDeclarator(path){
            if (remanet === 0){
                return
            }
            var d = path.get("id")
            d.scope.rename(d.node.name,"c_f_"+neNum)
            neNum += 1
        },
        CatchClause(path){
            if (remanet === 0){
                return
            }
            var d = path.get("param")
            if (d.node != null){
                d.scope.rename(d.node.name,"c_f_"+neNum)
                neNum += 1
            }
        },
        FunctionDeclaration(path){
            if (offchaConsole !== 0){
                path.node.body.body.splice(0,0,tee.callExpression(
                    tee.memberExpression(tee.identifier("console"),tee.identifier("log")),
                    [tee.stringLiteral("cbbfun"+cbbfunj)]
                ))
                cbbfunj += 1

            }
            if (remanet === 0){
                return
            }

            var d = path.get("id")
            if (d.node != null &&  d.node.name.indexOf("cbb_")!==0){
                d.scope.rename(d.node.name,"c_f_"+neNum)
                neNum += 1
            }
            var d = path.node.params
            var k =path.get("param")
            for (let i =0; i< d.length; i++){
                k.scope.rename(d[i].name,"c_f_"+neNum)
                neNum += 1
            }
        },
        FunctionExpression(path){
            if (offchaConsole !== 0) {
                path.node.body.body.splice(0, 0, tee.callExpression(
                    tee.memberExpression(tee.identifier("console"), tee.identifier("log")),
                    [tee.stringLiteral("cbbfun" + cbbfunj)]
                ))
                cbbfunj += 1

            }
            if (remanet === 0){
                return
            }
            var d = path.get("id")
            if (d.node != null){
                d.scope.rename(d.node.name,"c_f_"+neNum)
                neNum += 1
            }
            var d = path.node.params
            var k =path.get("param")
            for (let i =0; i< d.length; i++){
                k.scope.rename(d[i].name,"c_f_"+neNum)
                neNum += 1
            }
        }

    }

    traverse(ast, parseInfo)
    var f = generator(ast).code;
    fs.writeFileSync("./outsrc/out2.js", f, (e)=>{})
    return ast
}


exports.renameCj = renameCj;