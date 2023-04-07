const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require("@babel/generator").default;
const tee = require("@babel/types");
const { log } = require('console');
const fs = require("fs")


function es6toes5(data) {
    var ioio = 0
    var ast = parser.parse(data)
    let parseData = {
        ForOfStatement(path) {
            var isduo = 0;
            var isduolist = [];
            var initOfmyfor, testOfmyfor, upOfmyfor, bodyOfmyfor;
            if (path.node.left.type == "VariableDeclaration" && path.node.left.declarations[0].id.type == "Identifier"){
                isduolist.push(path.node.left.declarations[0].id)
                initOfmyfor = tee.variableDeclaration("var", [path.node.left.declarations[0], tee.variableDeclarator(tee.identifier("cbbiyhh"), tee.numericLiteral(0))])
            }else if(path.node.left.type == "VariableDeclaration" && path.node.left.declarations[0].id.type == "ArrayPattern"){
                let hxdd =[];
                isduo = 1
                for (let i =0; i < path.node.left.declarations[0].id.elements.length; i++){
                    isduolist.push(path.node.left.declarations[0].id.elements[i])
                    hxdd.push(tee.variableDeclarator(path.node.left.declarations[0].id.elements[i], null))

                }
                hxdd.push(tee.variableDeclarator(tee.identifier("cbbiyhh"), tee.numericLiteral(0)))
                initOfmyfor = tee.variableDeclaration("var", hxdd)
            }else if(path.node.left.type == "Identifier"){
                isduolist.push(path.node.left)
                initOfmyfor = tee.variableDeclaration("var", [tee.variableDeclarator(tee.identifier("cbbiyhh"), tee.numericLiteral(0))])
            }else if(path.node.left.type == "ArrayPattern"){
                let hxdd =[];
                isduo = 1
                for (let i =0; i < path.node.left.elements.length; i++){
                    isduolist.push(path.node.left.elements[i])

                }
                hxdd.push(tee.variableDeclarator(tee.identifier("cbbiyhh"), tee.numericLiteral(0)))
                initOfmyfor = tee.variableDeclaration("var", hxdd)
            }else{
                log("for of 条件有缺失")
            }

            testOfmyfor = tee.binaryExpression("<", tee.identifier("cbbiyhh"), tee.memberExpression(path.node.right, tee.identifier("length")))
            upOfmyfor = tee.updateExpression("++",tee.identifier("cbbiyhh"),false)
            var body = [];

            if (isduo === 1){
                for (let i =0; i< isduolist.length; i++){
                    body.push(
                        tee.expressionStatement(tee.assignmentExpression("=", isduolist[i], tee.memberExpression(tee.memberExpression(path.node.right, tee.identifier("cbbiyhh"),true,false),   tee.numericLiteral(i),true,false)))

                    )
                }
            }else{
                body.push(
                    tee.expressionStatement( tee.assignmentExpression("=", isduolist[0], tee.memberExpression(path.node.right, tee.identifier("cbbiyhh"),true,false)))

                )
            }
            if (path.node.body.type == "BlockStatement"){
                body = body.concat(path.node.body.body)
            }else{
                body.push(path.node.body)
            }
            bodyOfmyfor = tee.blockStatement(
                body
            )

            var forme = tee.forStatement(initOfmyfor, testOfmyfor, upOfmyfor, bodyOfmyfor)
            path.replaceInline(forme)

        },
        UpdateExpression(path){
            if (path.node.prefix === false){
                var hm = path.node.argument
                var hmk = path.node.operator
                path.replaceInline(hm)
                path.insertAfter(tee.updateExpression(hmk,hm, true))

                path.skip()
            }
        },
        ObjectExpression(path){
            var ofg = {}
            var off = 0
            var hj = path.get("properties")
            for (let i=0; i< hj.length; i++){

                if (hj[i].node.type === "ObjectMethod"){
           
                    if (hj[i].node.kind === "method"){
                        hj[i].replaceInline( tee.objectProperty(hj[i].node.key, tee.functionExpression(null,hj[i].node.params, hj[i].node.body)))
                        continue
                    }
                    off = 1
                    if (!ofg[hj[i].node.key.name]){
                        ofg[hj[i].node.key.name] = {}
                        ofg[hj[i].node.key.name]['keyme'] = []
                        ofg[hj[i].node.key.name]['value'] = tee.ObjectExpression(ofg[hj[i].node.key.name]['keyme'])
                    }
                    ofg[hj[i].node.key.name]['keyme'].push(
                            tee.ObjectProperty(tee.valueToNode(hj[i].node.kind), tee.functionExpression(null,hj[i].node.params, hj[i].node.body))
                    );
                    hj[i].remove()

                }

            }
            if (off === 1){
                let vvh;
                if(path.parentPath.isAssignmentExpression()){
                    vvh = path.parentPath.node.left;
                }else if (path.parentPath.isVariableDeclarator()){
                    vvh = path.parentPath.node.id;
                }
                for (let i in ofg){
                    let jipo = tee.assignmentExpression("=",
                        tee.identifier("cbbbbyhhhh"+ioio),
                        tee.callExpression(
                            tee.memberExpression(tee.identifier("Object"),tee.identifier("defineProperty")),
                            [
                                vvh,tee.valueToNode(i), ofg[i]['value']
                            ]
                        )
                    )
                    ioio+=1

                    path.parentPath.insertAfter(jipo)

                }
            }



        }


    }
    traverse(ast, parseData)
    var data = generator(ast).code
    return data;

}
exports.es6toes5 = es6toes5;
// var data = fs.readFileSync('./test.js') + ''
// var f = es6toes5(data);
// fs.writeFileSync("../out.js", f, (e)=>{})
//

