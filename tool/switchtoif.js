const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require("@babel/generator").default;
const tee = require("@babel/types");
const { log } = require('console');


function switchtoif(data){
    let parsetoSy = {
        SwitchStatement(path){

            function diedaidata( shuenxun){
                if (shuenxun.length == 2){
                    var s = shuenxun[0][1].pop()
                    if (s.type !== "BreakStatement"){
                        shuenxun[0][1].push(s)
                    }
                    s = shuenxun[1][1].pop()
                    if (s.type !== "BreakStatement"){
                        shuenxun[1][1].push(s)
                    }
                    var jiego = tee.ifStatement(tee.binaryExpression("<", tee.identifier(tiaojian), tee.numericLiteral(shuenxun[0][0] +1)),
                    tee.blockStatement(shuenxun[0][1]), tee.blockStatement(shuenxun[1][1]))
                    ;
                    return jiego;
                }else if (shuenxun.length == 1){
                    var s = shuenxun[0][1].pop()
                    if (s.type !== "BreakStatement"){
                        shuenxun[0][1].push(s)
                    }
                    return tee.blockStatement(shuenxun[0][1])
                }
                var zj = Math.ceil(shuenxun.length/2)
                var jiego = tee.ifStatement(tee.binaryExpression("<", tee.identifier(tiaojian), tee.numericLiteral(shuenxun[zj][0])),
                    diedaidata(shuenxun.slice(0, zj)), diedaidata(shuenxun.slice(zj))
                );
                return jiego

            }
            var tiaojian = path.node.discriminant.name;
            var shuenxun = [];
            var shunull = null
            var cz = [];
            while (1){
                let max = -1;
                let value = null
                for (let i = 0; i < path.node.cases.length; i++){
                    if (path.node.cases[i].test == null){
                        if (cz.indexOf(null) == -1 && shunull == null){
                            cz.push(null)
                            shunull =path.node.cases[i].consequent
                        }
                        continue
                    }
                    if ( path.node.cases[i].test.value > max && cz.indexOf(path.node.cases[i].test.value ) == -1){
                        max = path.node.cases[i].test.value
                        value = path.node.cases[i].consequent;
                    }
                }

                shuenxun.splice(0,0,[max,value])
                cz.push(max)
                if (cz.length >= path.node.cases.length){
                    break
                }
            }

            log(cz)
            var rety;
            if (shunull == null){
                rety = diedaidata(shuenxun, tiaojian)

            }else{
                var s = shunull.pop()
                if (s.type !== "BreakStatement"){
                    shunull.push(s)
                }
                rety =
                tee.ifStatement(parser.parse(`${JSON.stringify(cz)}.indexOf(${tiaojian}) == -1`).program.body[0].expression,
                tee.blockStatement(shunull), diedaidata(shuenxun, tiaojian)
                );
            }

            path.replaceInline(rety)
            path.skip()

        }
    }

    let ast = parser.parse(data)

    traverse(ast, parsetoSy)
    return generator(ast).code

}


exports.switchtoif = switchtoif;




