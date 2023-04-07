const parser = require("@babel/parser");
const generator = require("@babel/generator").default;
const fs = require("fs");
const {renameCj} = require("./tool/rename");
const process = require("child_process");
const {es6toes5} = require("./tool/es5toes6");

// 是否转es5
offes5 = 0
var dat = {"instanceof": 1811,"+":20, "<":24, "*":27, "%":28, "^":29,  "/":30, "<<":31, "|":32, ">>":33, ">>>":34, "&":35, "-":19, "<=": 36, ">=":37,">":38,"==":39,"===":53,"!==":54,"!=":550,"in":551}
var datkey = Object.keys(dat)

for (let i = 0; i< datkey.length; i++){
    datkey[i] = datkey[i]+"="
}


var fornum = 0

function cbbjsvmp(){
    var dataText
    if (offes5 === 1){
        dataText = fs.readFileSync("./dist/"+soure) + '';

    }else {
        dataText = fs.readFileSync("./src/"+soure) + '';
    }
    dataText2 = fs.readFileSync("./tool/jsvmp_02.js") + '';
    var changlc = {}
    var constantPool = []
    dataText = es6toes5(dataText)
    var ast = parser.parse(dataText)

    // 使用插件优化代码
    // ast = renameCj(ast)




    var numberKuai = 0

    function copyArrayList(sour, newl){
        for (let i = 0; i < newl.length; i++){
            sour.push(newl[i])
        }
    }
    function toPool(value){
        var a1,a2
        a1 = constantPool.indexOf(value)
        if (a1 == -1){
            a2 = constantPool.length
            constantPool.push(value)
            return a2
        }else{
            return a1
        }
    }

    function startgetType(node, variablePool, zhili){
        if (node == null){
            return;
        }
        var a1,a2,a3,a4,a5;
        switch(node.type){
            case "EmptyStatement":
                break
            case "ConditionalExpression":
            case "IfStatement":

                startgetType(node.test, variablePool, zhili);
                if (node.test.type === "AssignmentExpression"){
                    startgetType(node.test.left, variablePool, zhili);
                }

                zhili.push(192)
                let ujj3 = []
                startgetType(node.alternate, variablePool, ujj3)
                zhili.push(ujj3.length + 2)
                copyArrayList(zhili,ujj3)
                zhili.push(190)
                let ujj2 = []
                startgetType(node.consequent, variablePool, ujj2)
                zhili.push(ujj2.length)
                copyArrayList(zhili,ujj2)
                break

            case "VariableDeclaration":
                for (let i=0;i< node.declarations.length; i++){
                    startgetType(node.declarations[i], variablePool, zhili)
                }

                break
            case "ForInStatement":
                fornum += 1

                let fbme = fornum
                startgetType(node.right, variablePool,zhili)
                zhili.push(57)
                zhili.push(fbme)
                zhili.push(10)
                zhili.push(toPool( 0))
                zhili.push(23)
                zhili.push(22)
                zhili.push(toPool("for_in_xh_cbb"+fbme))
                let fggg = zhili.length
                zhili.push(23)
                zhili.push(10)
                zhili.push(toPool("for_in_xh_cbb"+fbme))
                zhili.push(181)
                zhili.push(23)
                zhili.push(10)
                zhili.push(toPool("for_in_xh_cbb_list"+fbme))
                zhili.push(181)
                zhili.push(10)
                zhili.push(toPool("length"))
                zhili.push(181)
                zhili.push(240)
                zhili.push(25)

                let dyyy = []
                if (node.left.type === "VariableDeclaration"){
                    startgetType(node.left, variablePool,dyyy)
                    startgetType(node.left.declarations[0].id, variablePool,dyyy)

                }else {
                    startgetType(node.left, variablePool,dyyy)
                }
                dyyy.pop()
                dyyy.push(23)
                dyyy.push(10)
                dyyy.push(toPool( "for_in_xh_cbb_list"+fbme))
                dyyy.push(181)
                dyyy.push(23)
                dyyy.push(10)
                dyyy.push(toPool("for_in_xh_cbb"+fbme))
                dyyy.push(181)
                dyyy.push(181)
                dyyy.push(90)
                startgetType(node.body,variablePool,dyyy)
                dyyy.push(23)
                dyyy.push(26)
                dyyy.push(toPool("for_in_xh_cbb"+fbme))
                dyyy.push(190)
                dyyy.push(fggg - zhili.length  -dyyy.length -2 )

                let bbblenko = dyyy.length
                for (let i =0; i< bbblenko; i++){
                    if (dyyy[i] == "cbb_break_in_the_this_yhh_417"){
                        dyyy[i] = 190;
                        dyyy[i+1] = bbblenko - i - 2
                    }else if (dyyy[i] == "cbb_continue_in_the_this_yhh_417"){
                        dyyy[i] = 190;
                        dyyy[i+1] =  bbblenko - i - 7
                    }
                }


                zhili.push(dyyy.length)
                copyArrayList(zhili, dyyy)
                break
            case "UpdateExpression":
                startgetType(node.argument, variablePool, zhili)

                if (node.operator =="++"){
                    // zhili.push(26)
                    zhili.pop()

                    zhili.push(10)

                    zhili.push(toPool(1))
                    startgetType(node.argument, variablePool, zhili)


                    zhili.push(20)
                    zhili.push(90)
                    startgetType(node.argument, variablePool, zhili)

                }else if (node.operator =="--"){
                    zhili.pop()
                    zhili.push(10)

                    zhili.push(toPool(1))

                    startgetType(node.argument, variablePool, zhili)



                    zhili.push(19)
                    zhili.push(90)
                    startgetType(node.argument, variablePool, zhili)

                }
                break
            case "BreakStatement":
                zhili.push("cbb_break_in_the_this_yhh_417")
                zhili.push(undefined)
                break
            case "DebuggerStatement":
                zhili.push(194)
                break
            case "ForStatement":
                startgetType(node.init, variablePool,zhili)
                let lenko = zhili.length

                startgetType(node.test, variablePool,zhili)
                if (node.test == null)
                {
                    zhili.push(10)
                    zhili.push(toPool(true))
                }

                zhili.push(25)

                let fgfgfdsujj = []


                startgetType(node.body, variablePool, fgfgfdsujj)
                startgetType(node.update, variablePool, fgfgfdsujj)



                fgfgfdsujj.push(190)
                fgfgfdsujj.push(lenko - zhili.length - fgfgfdsujj.length -2)
                zhili.push(fgfgfdsujj.length)
                lenko = fgfgfdsujj.length
                for (let i =0; i< lenko; i++){
                    if (fgfgfdsujj[i] == "cbb_break_in_the_this_yhh_417"){
                        fgfgfdsujj[i] = 190;
                        fgfgfdsujj[i+1] = lenko - i - 2
                    }else if (fgfgfdsujj[i] == "cbb_continue_in_the_this_yhh_417"){
                        fgfgfdsujj[i] = 190;
                        fgfgfdsujj[i+1] =  lenko - i - 4
                    }
                }

                copyArrayList(zhili, fgfgfdsujj)
                break
            case "WhileStatement":
                let ffflenko = zhili.length

                startgetType(node.test, variablePool,zhili)

                zhili.push(25)

                let jiiiujj = []
                startgetType(node.body, variablePool, jiiiujj)


                jiiiujj.push(190)
                jiiiujj.push(ffflenko - zhili.length - jiiiujj.length -2)
                zhili.push(jiiiujj.length)
                ffflenko = jiiiujj.length
                for (let i =0; i< ffflenko; i++){
                    if (jiiiujj[i] == "cbb_break_in_the_this_yhh_417"){
                        jiiiujj[i] = 190;
                        jiiiujj[i+1] = ffflenko - i - 2
                    }else if (jiiiujj[i] == "cbb_continue_in_the_this_yhh_417"){
                        jiiiujj[i] = 190;
                        jiiiujj[i+1] =  ffflenko - i - 4
                    }
                }

                copyArrayList(zhili, jiiiujj)
                break
            case "DoWhileStatement":
                let lenko2 = zhili.length
                let ujj = []
                startgetType(node.body, variablePool,ujj)
                // ujj.push(190)
                // ujj.push(lenko - zhili.length -ujj.length-2)

                lenkoe = ujj.length
                for (let i =0; i< lenkoe; i++){
                    if (ujj[i] == "cbb_break_in_the_this_yhh_417"){
                        ujj[i] = 190;
                        ujj[i+1] = lenkoe - i - 2
                    }else if (ujj[i] == "cbb_continue_in_the_this_yhh_417"){
                        ujj[i] = 190;
                        ujj[i+1] =  lenkoe - i - 4
                    }
                }

                copyArrayList(zhili, ujj)
                startgetType(node.test, variablePool,zhili)
                zhili.push(192)
                zhili.push(lenko2-zhili.length-1)
                break
            case "ContinueStatement":
                zhili.push("cbb_continue_in_the_this_yhh_417")
                zhili.push(undefined)
                break
            case "VariableDeclarator":
                variablePool[node.id.name] = null;
                if (node.init != null){
                    startgetType(node.init, variablePool, zhili)
                    if (node.init.type == "AssignmentExpression"){
                        startgetType(node.init.left, variablePool, zhili)

                    }
                    zhili.push(23)

                    zhili.push(22)
                    a1 = constantPool.indexOf(node.id.name)
                    if (a1 == -1){
                        zhili.push(constantPool.length)
                        constantPool.push(node.id.name)
                    }else{
                        zhili.push(a1)
                    }
                }

                break
            case "SwitchStatement":
                startgetType(node.discriminant, variablePool,zhili)
                if (node.discriminant.type === "AssignmentExpression"){
                    startgetType(node.discriminant.left, variablePool,zhili)
                }

                let hu = node.cases.length
                let zwdz = [];
                let gggcbb = []
                for (let i = 0;i < hu; i++){
                    let litshuz = []
                    if (node.cases[i].test == null){
                        zhili.push(10)
                        zhili.push(toPool( null))
                    }else{
                        startgetType(node.cases[i].test, variablePool, zhili)
                    }
                    zwdz.push(gggcbb.length)
                    // 块
                    for (let i2 = 0; i2 < node.cases[i].consequent.length; i2++){
                        startgetType(node.cases[i].consequent[i2], variablePool, litshuz)
                    }

                    copyArrayList(gggcbb, litshuz)
                }
                zhili.push(10)
                zhili.push(toPool( null))
                for (let i = 0;i < zwdz.length; i++){
                    zhili.push(10)
                    zhili.push(toPool(zwdz[i]))
                }
                zhili.push(10)
                zhili.push(toPool(gggcbb.length))

                zhili.push(48)
                zhili.push(hu+1)
                let oolenko = gggcbb.length
                for (let i =0; i< oolenko; i++){
                    if (gggcbb[i] == "cbb_break_in_the_this_yhh_417"){
                        gggcbb[i] = 190;
                        gggcbb[i+1] = oolenko - i -2
                    }
                }

                copyArrayList(zhili, gggcbb)

                break
            case "LogicalExpression":
                if (node.operator == "&&"){
                    startgetType(node.left, variablePool, zhili)
                    if (node.left.type == "AssignmentExpression"){
                        startgetType(node.left.left, variablePool, zhili)
                    }
                    zhili.push(51)
                    let bh = []
                    startgetType(node.right, variablePool, bh)
                    if (node.right.type == "AssignmentExpression"){
                        startgetType(node.right.left, variablePool, bh)
                    }
                    zhili.push(bh.length)
                    copyArrayList(zhili, bh)
                }else if (node.operator == "||"){
                    startgetType(node.left, variablePool, zhili)
                    if (node.left.type == "AssignmentExpression"){
                        startgetType(node.left.left, variablePool, zhili)
                    }
                    zhili.push(252)
                    let bh = []
                    startgetType(node.right, variablePool, bh)
                    if (node.right.type == "AssignmentExpression"){
                        startgetType(node.right.left, variablePool, bh)
                    }
                    zhili.push(bh.length)
                    copyArrayList(zhili, bh)
                }
                break
            case "BooleanLiteral":
            case "NumericLiteral":
            case "NullLiteral":
            case "StringLiteral":
                zhili.push(10)
                a1 = constantPool.indexOf(node.value)
                zhili.push(toPool(node.value))
                break;
            case "Identifier":
                zhili.push(23)
                zhili.push(10)
                zhili.push(toPool(node.name))
                zhili.push(181)
                break
            case "MemberExpression":
                startgetType(node.object, variablePool, zhili)
                if (node.object.type == "AssignmentExpression"){
                    startgetType(node.object.left, variablePool, zhili)
                }
                if (node.property.type == "Identifier" && node.computed == false){
                    zhili.push(10)
                    zhili.push(toPool(node.property.name))
                    zhili.push(181)
                }else if (node.property.type == "NumericLiteral" || node.property.type == "StringLiteral"){
                    zhili.push(10)
                    zhili.push(toPool(node.property.value))
                    zhili.push(181)
                }else{
                    startgetType(node.property, variablePool, zhili)
                    if (node.property.type == "AssignmentExpression"){
                        startgetType(node.property.left, variablePool, zhili)
                    }
                    zhili.push(181)

                }

                break
            case "BinaryExpression":
                startgetType(node.right, variablePool, zhili)
                if (node.right.type == "AssignmentExpression"){
                    startgetType(node.right.left, variablePool, zhili)
                }
                startgetType(node.left, variablePool, zhili)
                if (node.left.type == "AssignmentExpression"){
                    startgetType(node.left.left, variablePool, zhili)
                }
                zhili.push(dat[node.operator])
                break
            case "UnaryExpression":
                if (node.argument.type == "NumericLiteral" || node.argument.type == "BooleanLiteral" || node.argument.type == "StringLiteral"){
                    zhili.push(10)
                    zhili.push(toPool( node.argument.value))
                }else{
                    startgetType(node.argument, variablePool, zhili)
                }
                if (node.operator == "~"){
                    zhili.push(44)
                }else if (node.operator == "typeof"){
                    zhili.push(49)
                }else if (node.operator == "!"){
                    zhili.push(60)
                }else if (node.operator == "-"){
                    zhili.push(50)
                }else if (node.operator == "delete"){
                    zhili.pop()
                    zhili.push(55)
                }else if (node.operator == "void"){
                    zhili.push(56)
                }
                break
            case "CallExpression":

                for (let i = 0; i < node.arguments.length; i++){
                    startgetType(node.arguments[i], variablePool, zhili)
                    if (node.arguments[i].type == "AssignmentExpression" && node.arguments[i].operator == "="){
                        startgetType(node.arguments[i].left, variablePool, zhili)
                    }
                }
                startgetType(node.callee, variablePool, zhili)
                if (node.callee.type == "AssignmentExpression"){
                    startgetType(node.callee.left, variablePool, zhili)
                }
                zhili.push(150)
                zhili.push(node.arguments.length)
                break
            case "FunctionDeclaration":
                variablePool[node.id.name] = "awcbb_yhh_fun"+numberKuai
                startfun(node)
                break
            case "ArrowFunctionExpression":
            case "FunctionExpression":
                let bcxh
                if (node.id){
                    bcxh = "awcbb_yhh_fun"+numberKuai
                    variablePool[node.id.name] = bcxh
                    startfun(node)
                    zhili.push(23)
                    zhili.push(10)
                    zhili.push(toPool(node.id.name))
                    zhili.push(181)
                }else {
                    bcxh = "awcbb_yhh_fun"+numberKuai
                    variablePool[bcxh] = bcxh
                    startfun(node)
                    zhili.push(23)
                    zhili.push(10)
                    zhili.push(toPool(bcxh))
                    zhili.push(181)
                }
                break

            case "SequenceExpression":
                var d,ohh;
                for (let i=0; i< node.expressions.length; i++){
                    startgetType(node.expressions[i], variablePool, zhili)
                    if (node.expressions[i].type === "CallExpression" || node.expressions[i].type === "Identifier" || node.expressions[i].type === "MemberExpression"
                    || node.expressions[i].type === "BooleanLiteral"|| node.expressions[i].type === "NumericLiteral"
                        || node.expressions[i].type === "NullLiteral"|| node.expressions[i].type === "StringLiteral"
                        || node.expressions[i].type === "FunctionExpression"
                        || node.expressions[i].type === "UnaryExpression"
                        || node.expressions[i].type === "BinaryExpression"
                        || node.expressions[i].type === "UpdateExpression"
                        || node.expressions[i].type === "SequenceExpression"
                        || node.expressions[i].type === "LogicalExpression"
                        || node.expressions[i].type === "ConditionalExpression"
                        || true
                    ){
                        d = zhili.push(1810)
                        ohh = 1
                    }else {
                        ohh =0
                    }
                }
                if (ohh === 1){
                    zhili.pop()
                }else {
                    zhili.push(10)
                    zhili.push(toPool(undefined))
                }

                break
            case "ObjectExpression":
                zhili.push(104)
                for (let i=0; i< node.properties.length; i++){
                    startgetType(node.properties[i], variablePool, zhili)
                }
                break
            case "ThrowStatement":
                startgetType(node.argument, variablePool, zhili)
                zhili.push(58)
                break
            case "ObjectProperty":
                if (node.key.type == "Identifier"){
                    zhili.push(10)
                    zhili.push(toPool(node.key.name))
                }else{
                    startgetType(node.key, variablePool,zhili)
                }

                startgetType(node.value, variablePool,zhili)
                zhili.push(45)
                break
            case "ArrayExpression":
                zhili.push(105)
                for (let i=0; i< node.elements.length; i++){
                    startgetType(node.elements[i], variablePool, zhili)
                    zhili.push(40)
                }
                break;
            case "RegExpLiteral":
                zhili.push(8)
                zhili.push(toPool( node.pattern))
                zhili.push(toPool( node.flags))

                break
            case "TryStatement":
                zhili.push(195)
                let bcnxbc = []
                startgetType(node.block, variablePool, bcnxbc)
                bcnxbc.push(200)
                zhili.push(bcnxbc.length)
                if (node.handler != null){
                    variablePool[node.handler.param.name] = null
                    startgetType(node.handler.param, variablePool, bcnxbc)
                    bcnxbc.pop()
                    bcnxbc.push(197)
                    startgetType(node.handler.body, variablePool, bcnxbc)
                }
                bcnxbc.push(200)
                zhili.push(bcnxbc.length - zhili[zhili.length-1])
                if (node.finalizer != null){
                    startgetType(node.finalizer, variablePool, bcnxbc)
                }
                bcnxbc.push(200)
                zhili.push(bcnxbc.length - zhili[zhili.length-1]- zhili[zhili.length-2])




                copyArrayList(zhili, bcnxbc)
                break
            case "AssignmentPattern":
            case "AssignmentExpression":
                if (node.operator == '+='){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()

                    startgetType(node.right, variablePool, zhili)
                    startgetType(node.left, variablePool, zhili)

                    zhili.push(20)
                    zhili.push(90)
                }else if (node.operator == '-='){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili)

                    startgetType(node.right, variablePool, zhili)
                    zhili.push(291)
                    zhili.push(90)
                }else if (node.operator == '|='){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili)

                    startgetType(node.right, variablePool, zhili)
                    zhili.push(32)
                    zhili.push(90)
                }else if(datkey.indexOf(node.operator) != -1){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili)

                    startgetType(node.right, variablePool, zhili)
                    zhili.push(dat[node.operator.replace("=","")])
                    zhili.push(90)
                }
                else{
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()

                    if (node.right.type == "AssignmentExpression"){
                        startgetType(node.right, variablePool, zhili)
                        startgetType(node.right.left, variablePool, zhili)

                    }else{
                        startgetType(node.right, variablePool, zhili)

                    }
                    zhili.push(290)
                }

                break;
            case "ExpressionStatement":
                startgetType(node.expression, variablePool, zhili)
                break
            case "BlockStatement":
                for (a1= 0; a1< node.body.length; a1++){
                    startgetType(node.body[a1], variablePool, zhili)
                }

                break
            case "ThisExpression":
                zhili.push(47)
                break
            case "NewExpression":
                let callargsNum = node.arguments.length;
                for (let i =0; i< node.arguments.length; i++){
                    startgetType(node.arguments[i], variablePool, zhili)
                }
                startgetType(node.callee, variablePool,zhili)
                zhili.push(46)
                zhili.push(callargsNum)
                break
            case "ReturnStatement":
                startgetType(node.argument, variablePool, zhili)
                zhili.push(-1)
                break
            default:
                console.log(generator(node).code)
                console.log("is not jiex");
        }

    }

    function startfun(node2){
        let name = "awcbb_yhh_fun"+numberKuai
        numberKuai += 1
        changlc[name] = {"variablePool":{}
                    , "zhili": []}

        for (let i =0; i< node2.params.length; i++){
            if (node2.params[i].type === "AssignmentPattern"){
                changlc[name]['variablePool'][node2.params[i].left.name] = null
                startgetType(node2.params[i], changlc[name]['variablePool'], changlc[name]['zhili'])
                changlc[name]['zhili'].push(10)
                changlc[name]['zhili'].push(toPool(node2.params[i].left.name))

            }else {
                changlc[name]['variablePool'][node2.params[i].name] = null
                changlc[name]['zhili'].push(10)
                changlc[name]['zhili'].push(toPool(node2.params[i].name))
            }

        }
        changlc[name]['zhili'].push(2)

        startgetType(node2.body, changlc[name]['variablePool'], changlc[name]['zhili'])

        let hb = []
        for (let i in changlc[name]['variablePool']){
            if (changlc[name]['variablePool'][i] && changlc[name]['variablePool'][i].indexOf("awcbb_yhh_fun") != -1){
                hb.push(10)
                hb.push(toPool(i))
            }
        }
        hb.push(1)
        let f = hb.length
        for (let i =0;i< f; i++){
            changlc[name]['zhili'].splice(0,0,hb.pop())
        }
    }


    function start(node2){
        let name = "awcbb_yhh_fun"+numberKuai
        numberKuai += 1
        changlc[name] = {"variablePool":{}
                    , "zhili": []}

        let node = node2.program.body
        for (let i = 0; i < node.length; i++){
            startgetType(node[i], changlc[name]['variablePool'], changlc[name]['zhili'])
        }
        let hb = []
        for (let i in changlc[name]['variablePool']){
            if (changlc[name]['variablePool'][i] && changlc[name]['variablePool'][i].indexOf("awcbb_yhh_fun") != -1){
                hb.push(10)
                hb.push(toPool(i))
            }
        }
        hb.push(1)
        let f = hb.length
        for (let i =0;i< f; i++){
            changlc[name]['zhili'].splice(0,0,hb.pop())
        }
    }

    start(ast)

    cood = ``

    datatext = "var constantPool = "+ JSON.stringify(constantPool)+"; var changlc = "+ JSON.stringify(changlc)+";\n"+dataText2;

    fs.writeFileSync("./outsrc/out.js", cood + datatext, (e)=>{})

}


const soure = "test.js"
if (offes5 ===1){
    process.exec(`traceur --script ./src/${soure} --out ./dist/${soure}`, (error, stdout, stderr) => {
    if (!error) {
      console.log("es6 to es5 ==> 成功");
      cbbjsvmp()
      console.log("file is save ==> ./outsrc/out.js");
    } else {
      console.log("es6 to es5 ==> 失败");
    }
});
} else {
    cbbjsvmp()
    console.log("file is save ==> ./outsrc/out.js");
}


