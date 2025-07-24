const parser = require("@babel/parser");
const generator = require("@babel/generator").default;
const fs = require("fs");
const {renameCj} = require("./tool/rename");
const {hsjsvmpTo} = require("./tool/gooutmvp");
const {switchtoif} = require("./tool/switchtoif");
const {bindfun} = require("./tool/bindfun");
const {tosanyuan} = require("./tool/tosanyuan")
const {es6toes5} = require("./tool/es5toes6");
const process = require("child_process");

// 是否转es5
offes5 = 0

var fornum = 0
var dat = {"instanceof":1811,"+":20, "<":24, "*":27, "%":28, "^":29,  "/":30, "<<":31, "|":32, ">>":33, ">>>":34, "&":35, "-":19, "<=": 36, ">=":37,">":38,"==":39,
    "===":53,"!==":54,
    "!=":550,"in":551}
var datkey = Object.keys(dat)

for (let i = 0; i< datkey.length; i++){
    datkey[i] = datkey[i]+"="
}


function RandDataArray(data) {
    //混乱准备
    var dataTemp = [].concat(data);
    var dataBuffer = [];
    var length = dataTemp.length;

    //混乱数据
    var randCount = 0;
    var position = 0;
    do {
        var randvalue = (((length - randCount) - 1) + 1);
        position = Math.floor(Math.random() * randvalue);

        dataBuffer.push(dataTemp[position]);
        randCount++;
        dataTemp[position] = dataTemp[length - randCount];
    } while (randCount < length);
    return dataBuffer;
}


var zhil = [
    1811,1810,551, 550, 291, 290, 252, 240, 200, 197, 195, 194, 192, 190, 181, 150, 105, 104, 90, 60, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 20, 19, 11, 10, 8, 2, 1
]

zhenzhil = []
for (let i = 0; i < 100000; i++){
    zhenzhil.push(i)
}
zhenzhil = RandDataArray(zhenzhil)

zhilDx = {}
for (let i2 = 0; i2 <zhil.length; i2++ ){
    zhilDx["z"+zhil[i2]] = []
    for (let i =0; i < 30; i++){
        zhilDx["z"+zhil[i2]].push(zhenzhil.pop())
    }
}
var d = JSON.stringify(zhilDx) +""
fs.writeFileSync("./dist/jiamain.json", d, (e)=>{})

function RandDataCheise(data){
     var da = Math.floor(Math.random() * data.length);
    return data[da]
}

function getchhduei(){
    var duei = fs.readFileSync("./tool/cshshuzduei.js") + '';
    duei = duei.replace(/this\.pop/g, "this.cf")
    duei = duei.replace(/this\.push/g, "this.cF")
    duei = duei.replace(/this\.shift/g, "this.Cf")
    duei = duei.replace(/this\.xujia/g, "this.CF")
    duei = duei.replace(/this\.length/g, "this.CFf")
    var hu = []
    for (var i = 2; i< 1000; i++){
        hu.push(i)
    }
    hu = RandDataArray(hu)
    var dat = '{"cbb1": [undefined, "cbbbhhhh", undefined],'
    var sc = 1
    for (let i =0; i< hu.length; i++){
        dat = dat.replace("cbbbhhhh","cbb"+hu[i])
        var d = `"${"cbb"+hu[i]}": ["${"cbb"+sc}", "cbbbhhhh", undefined],`
        dat += d
        sc = hu[i]
    }
    dat = dat.replace("cbbbhhhh","")
    dat += '};'
    duei = duei.replace("CbbTHALLYhh", dat)
    return duei;
}

function cbbjsvmp(soure, outpath){
    var dataText
    if (offes5 === 1){
        dataText = fs.readFileSync("./dist/"+soure) + '';

    }else {
        dataText = fs.readFileSync("./src/"+soure) + '';
    }
    var dataText2 =  getchhduei() + fs.readFileSync("./tool/jsvmp_outcs.js") + '';
    dataText2 = dataText2.replace(/duei\.pop/g, "duei.cf")
    dataText2 = dataText2.replace(/duei\.push/g, "duei.cF")
    dataText2 = dataText2.replace(/duei\.shift/g, "duei.Cf")
    dataText2 = dataText2.replace(/duei\.xujia/g, "duei.CF")
    dataText2 = dataText2.replace(/duei\.length/g, "duei.CFf")

    dataText2 = dataText2.replace(/g2\.pop/g, "g2.cf")
    dataText2 = dataText2.replace(/g2\.push/g, "g2.cF")
    dataText2 = dataText2.replace(/g2\.shift/g, "g2.Cf")
    dataText2 = dataText2.replace(/g2\.xujia/g, "g2.CF")
    dataText2 = dataText2.replace(/g2\.length/g, "g2.CFf")


    // 指令扩展
    dataText2 = hsjsvmpTo(dataText2)
    // 函数隐藏
    dataText2 = bindfun(dataText2)
    // 变if else
    dataText2 = switchtoif(dataText2)
    //es6toes5
    dataText = es6toes5(dataText)
    // 变3元
    for (let i = 0; i< 300; i++){
        dataText2 = tosanyuan(dataText2)
    }
    var changlc = {}
    var constantPool = []
    var ast = parser.parse(dataText)

    // 使用插件优化代码
    ast = renameCj(ast)

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


                zhili.push(RandDataCheise(zhilDx.z192))
                let ujj3 = []
                startgetType(node.alternate, variablePool, ujj3)
                zhili.push(ujj3.length + 2)
                copyArrayList(zhili,ujj3)
                zhili.push(RandDataCheise(zhilDx.z190))
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
                zhili.push(RandDataCheise(zhilDx.z57))
                zhili.push(fbme)
                zhili.push(RandDataCheise(zhilDx.z10))
                zhili.push(toPool( 0))
                zhili.push(RandDataCheise(zhilDx.z23))
                zhili.push(RandDataCheise(zhilDx.z22))
                zhili.push(toPool("for_in_xh_cbb"+fbme))
                let fggg = zhili.length
                zhili.push(RandDataCheise(zhilDx.z23))
                zhili.push(RandDataCheise(zhilDx.z10))
                zhili.push(toPool("for_in_xh_cbb"+fbme))
                zhili.push(RandDataCheise(zhilDx.z181))
                zhili.push(RandDataCheise(zhilDx.z23))
                zhili.push(RandDataCheise(zhilDx.z10))
                zhili.push(toPool("for_in_xh_cbb_list"+fbme))
                zhili.push(RandDataCheise(zhilDx.z181))
                zhili.push(RandDataCheise(zhilDx.z10))
                zhili.push(toPool("length"))
                zhili.push(RandDataCheise(zhilDx.z181))
                zhili.push(RandDataCheise(zhilDx.z240))
                zhili.push(RandDataCheise(zhilDx.z25))

                let dyyy = []
                if (node.left.type === "VariableDeclaration"){
                    startgetType(node.left, variablePool,dyyy)
                    startgetType(node.left.declarations[0].id, variablePool,dyyy)

                }else {
                    startgetType(node.left, variablePool,dyyy)
                }
                dyyy.pop()
                dyyy.push(RandDataCheise(zhilDx.z23))
                dyyy.push(RandDataCheise(zhilDx.z10))
                dyyy.push(toPool( "for_in_xh_cbb_list"+fbme))
                dyyy.push(RandDataCheise(zhilDx.z181))
                dyyy.push(RandDataCheise(zhilDx.z23))
                dyyy.push(RandDataCheise(zhilDx.z10))
                dyyy.push(toPool("for_in_xh_cbb"+fbme))
                dyyy.push(RandDataCheise(zhilDx.z181))
                dyyy.push(RandDataCheise(zhilDx.z181))
                dyyy.push(RandDataCheise(zhilDx.z90))
                startgetType(node.body,variablePool,dyyy)
                dyyy.push(RandDataCheise(zhilDx.z23))
                dyyy.push(RandDataCheise(zhilDx.z26))
                dyyy.push(toPool("for_in_xh_cbb"+fbme))
                dyyy.push(RandDataCheise(zhilDx.z190))
                dyyy.push(fggg - zhili.length  -dyyy.length -2 )

                let bbblenko = dyyy.length
                for (let i =0; i< bbblenko; i++){
                    if (dyyy[i] == "cbb_break_in_the_this_yhh_417"){
                        dyyy[i] = RandDataCheise(zhilDx.z190);
                        dyyy[i+1] = bbblenko - i - 2
                    }else if (dyyy[i] == "cbb_continue_in_the_this_yhh_417"){
                        dyyy[i] = RandDataCheise(zhilDx.z190);
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

                    zhili.push(RandDataCheise(zhilDx.z10))

                    zhili.push(toPool(1))
                    startgetType(node.argument, variablePool, zhili)


                    zhili.push(RandDataCheise(zhilDx.z20))
                    zhili.push(RandDataCheise(zhilDx.z90))
                    startgetType(node.argument, variablePool, zhili)

                }else if (node.operator =="--"){
                    zhili.pop()
                    zhili.push(RandDataCheise(zhilDx.z10))

                    zhili.push(toPool(1))

                    startgetType(node.argument, variablePool, zhili)



                    zhili.push(RandDataCheise(zhilDx.z19))
                    zhili.push(RandDataCheise(zhilDx.z90))
                    startgetType(node.argument, variablePool, zhili)
                }
                break
            case "LabeledStatement":
                let vbvb = [];
                let vbvbname = node.label.name;
                startgetType(node.body, variablePool, vbvb)
                for (var ff=0; ff<vbvb.length; ff++){
                    if (vbvb[ff] === vbvbname){
                        vbvb[ff] = RandDataCheise(zhilDx.z190);;
                        vbvb[ff+1] = vbvb.length - ff-2;
                    }
                }
                copyArrayList(zhili, vbvb)
                break
            case "BreakStatement":
                if (node.label){
                    zhili.push(node.label.name)
                    zhili.push(undefined)
                }else {
                    zhili.push("cbb_break_in_the_this_yhh_417")
                    zhili.push(undefined)
                }
                break
            case "DebuggerStatement":
                zhili.push(RandDataCheise(zhilDx.z194))
                break
            case "ForStatement":
                startgetType(node.init, variablePool,zhili)
                let lenko = zhili.length

                startgetType(node.test, variablePool,zhili)
                if (node.test == null)
                {
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(true))
                }
                zhili.push(RandDataCheise(zhilDx.z25))

                let fgfgfdsujj = []

                startgetType(node.body, variablePool, fgfgfdsujj)
                startgetType(node.update, variablePool, fgfgfdsujj)



                fgfgfdsujj.push(RandDataCheise(zhilDx.z190))
                fgfgfdsujj.push(lenko - zhili.length - fgfgfdsujj.length -2)
                zhili.push(fgfgfdsujj.length)
                lenko = fgfgfdsujj.length
                for (let i =0; i< lenko; i++){
                    if (fgfgfdsujj[i] == "cbb_break_in_the_this_yhh_417"){
                        fgfgfdsujj[i] = RandDataCheise(zhilDx.z190);
                        fgfgfdsujj[i+1] = lenko - i - 2
                    }else if (fgfgfdsujj[i] == "cbb_continue_in_the_this_yhh_417"){
                        fgfgfdsujj[i] = RandDataCheise(zhilDx.z190);
                        fgfgfdsujj[i+1] =  lenko - i - 4
                    }
                }

                copyArrayList(zhili, fgfgfdsujj)
                break
            case "WhileStatement":
                let ffflenko = zhili.length

                startgetType(node.test, variablePool,zhili)

                zhili.push(RandDataCheise(zhilDx.z25))

                let jiiiujj = []
                startgetType(node.body, variablePool, jiiiujj)


                jiiiujj.push(RandDataCheise(zhilDx.z190))
                jiiiujj.push(ffflenko - zhili.length - jiiiujj.length -2)
                zhili.push(jiiiujj.length)
                ffflenko = jiiiujj.length
                for (let i =0; i< ffflenko; i++){
                    if (jiiiujj[i] == "cbb_break_in_the_this_yhh_417"){
                        jiiiujj[i] = RandDataCheise(zhilDx.z190);
                        jiiiujj[i+1] = ffflenko - i - 2
                    }else if (jiiiujj[i] == "cbb_continue_in_the_this_yhh_417"){
                        jiiiujj[i] = RandDataCheise(zhilDx.z190);
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
                        ujj[i] = RandDataCheise(zhilDx.z190);
                        ujj[i+1] = lenkoe - i - 2
                    }else if (ujj[i] == "cbb_continue_in_the_this_yhh_417"){
                        ujj[i] = RandDataCheise(zhilDx.z190);
                        ujj[i+1] =  lenkoe - i - 4
                    }
                }

                copyArrayList(zhili, ujj)
                startgetType(node.test, variablePool,zhili)
                zhili.push(RandDataCheise(zhilDx.z192))
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

                    zhili.push(RandDataCheise(zhilDx.z23))

                    zhili.push(RandDataCheise(zhilDx.z22))
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


                let hu = node.cases.length
                let zwdz = [];
                let gggcbb = []
                for (let i = 0;i < hu; i++){
                    let litshuz = []
                    if (node.cases[i].test == null){
                        zhili.push(RandDataCheise(zhilDx.z10))
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
                zhili.push(RandDataCheise(zhilDx.z10))
                zhili.push(toPool( null))
                for (let i = 0;i < zwdz.length; i++){
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(zwdz[i]))
                }
                zhili.push(RandDataCheise(zhilDx.z10))
                zhili.push(toPool(gggcbb.length))

                zhili.push(RandDataCheise(zhilDx.z48))
                zhili.push(hu+1)
                let oolenko = gggcbb.length
                for (let i =0; i< oolenko; i++){
                    if (gggcbb[i] == "cbb_break_in_the_this_yhh_417"){
                        gggcbb[i] = RandDataCheise(zhilDx.z190);
                        gggcbb[i+1] = oolenko - i -2
                    }
                }

                copyArrayList(zhili, gggcbb)

                break
            case "LogicalExpression":
                if (node.operator == "&&"){
                    startgetType(node.left, variablePool, zhili)

                    zhili.push(RandDataCheise(zhilDx.z51))
                    let bh = []
                    startgetType(node.right, variablePool, bh)

                    zhili.push(bh.length)
                    copyArrayList(zhili, bh)
                }else if (node.operator == "||"){
                    startgetType(node.left, variablePool, zhili)

                    zhili.push(RandDataCheise(zhilDx.z252))
                    let bh = []
                    startgetType(node.right, variablePool, bh)

                    zhili.push(bh.length)
                    copyArrayList(zhili, bh)
                }
                break
            case "BooleanLiteral":
            case "NumericLiteral":
            case "NullLiteral":
            case "StringLiteral":
                zhili.push(RandDataCheise(zhilDx.z10))
                a1 = constantPool.indexOf(node.value)
                zhili.push(toPool(node.value))
                break;
            case "Identifier":
                zhili.push(RandDataCheise(zhilDx.z23))
                zhili.push(RandDataCheise(zhilDx.z10))
                zhili.push(toPool(node.name))
                zhili.push(RandDataCheise(zhilDx.z181))
                break
            case "MemberExpression":
                startgetType(node.object, variablePool, zhili)

                if (node.property.type == "Identifier" && node.computed == false){
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(node.property.name))
                    zhili.push(RandDataCheise(zhilDx.z181))
                }else if (node.property.type == "NumericLiteral" || node.property.type == "StringLiteral"){
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(node.property.value))
                    zhili.push(RandDataCheise(zhilDx.z181))
                }else{
                    startgetType(node.property, variablePool, zhili)

                    zhili.push(RandDataCheise(zhilDx.z181))

                }

                break
            case "BinaryExpression":
                startgetType(node.left, variablePool, zhili)
                startgetType(node.right, variablePool, zhili)
                zhili.push(RandDataCheise(zhilDx["z"+dat[node.operator]]))
                break
            case "UnaryExpression":
                if (node.argument.type == "NumericLiteral" || node.argument.type == "BooleanLiteral" || node.argument.type == "StringLiteral"){
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool( node.argument.value))
                }else{
                    startgetType(node.argument, variablePool, zhili)
                }
                if (node.operator == "~"){
                    zhili.push(RandDataCheise(zhilDx.z44))
                }else if (node.operator == "typeof"){
                    zhili.push(RandDataCheise(zhilDx.z49))
                }else if (node.operator == "!"){
                    zhili.push(RandDataCheise(zhilDx.z60))
                }else if (node.operator == "-"){
                    zhili.push(RandDataCheise(zhilDx.z50))
                }else if (node.operator == "delete"){
                    zhili.pop()
                    zhili.push(RandDataCheise(zhilDx.z55))
                }else if (node.operator == "void"){
                    zhili.push(RandDataCheise(zhilDx.z56))
                }
                break
            case "CallExpression":

                for (let i = 0; i < node.arguments.length; i++){
                    startgetType(node.arguments[i], variablePool, zhili)



                }
                startgetType(node.callee, variablePool, zhili)

                zhili.push(RandDataCheise(zhilDx.z150))
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
                    zhili.push(RandDataCheise(zhilDx.z23))
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(node.id.name))
                    zhili.push(RandDataCheise(zhilDx.z181))
                }else {
                    bcxh = "awcbb_yhh_fun"+numberKuai
                    variablePool[bcxh] = bcxh
                    startfun(node)
                    zhili.push(RandDataCheise(zhilDx.z23))
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(bcxh))
                    zhili.push(RandDataCheise(zhilDx.z181))
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
                        || node.expressions[i].type === "SequenceExpression"
                        || node.expressions[i].type === "UpdateExpression"
                        || node.expressions[i].type === "AssignmentExpression"
                        || node.expressions[i].type === "LogicalExpression"
                        || node.expressions[i].type === "ConditionalExpression"
                        || true
                    ){
                        d = zhili.push(RandDataCheise(zhilDx.z1810))
                        ohh = 1
                    }else {
                        ohh =0
                    }
                }
                if (ohh === 1){
                    zhili.pop()
                }else {
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(undefined))
                }

                break
            case "ObjectExpression":
                zhili.push(RandDataCheise(zhilDx.z104))
                for (let i=0; i< node.properties.length; i++){
                    startgetType(node.properties[i], variablePool, zhili)
                }
                break
            case "ThrowStatement":
                startgetType(node.argument, variablePool, zhili)
                zhili.push(RandDataCheise(zhilDx.z58))
                break
            case "ObjectProperty":
                if (node.key.type == "Identifier"){
                    zhili.push(RandDataCheise(zhilDx.z10))
                    zhili.push(toPool(node.key.name))
                }else{
                    startgetType(node.key, variablePool,zhili)
                }

                startgetType(node.value, variablePool,zhili)
                zhili.push(RandDataCheise(zhilDx.z45))
                break
            case "ArrayExpression":
                zhili.push(RandDataCheise(zhilDx.z105))
                for (let i=0; i< node.elements.length; i++){
                    startgetType(node.elements[i], variablePool, zhili)
                    zhili.push(RandDataCheise(zhilDx.z40))
                }
                break;
            case "RegExpLiteral":
                zhili.push(RandDataCheise(zhilDx.z8))
                zhili.push(toPool( node.pattern))
                zhili.push(toPool( node.flags))

                break
            case "TryStatement":
                zhili.push(RandDataCheise(zhilDx.z195))
                let bcnxbc = []
                startgetType(node.block, variablePool, bcnxbc)
                bcnxbc.push(RandDataCheise(zhilDx.z200))
                zhili.push(bcnxbc.length)
                if (node.handler != null){
                    variablePool[node.handler.param.name] = null
                    startgetType(node.handler.param, variablePool, bcnxbc)
                    bcnxbc.pop()
                    bcnxbc.push(RandDataCheise(zhilDx.z197))
                    startgetType(node.handler.body, variablePool, bcnxbc)
                }
                bcnxbc.push(RandDataCheise(zhilDx.z200))
                zhili.push(bcnxbc.length - zhili[zhili.length-1])
                if (node.finalizer != null){
                    startgetType(node.finalizer, variablePool, bcnxbc)
                }
                bcnxbc.push(RandDataCheise(zhilDx.z200))
                zhili.push(bcnxbc.length - zhili[zhili.length-1]- zhili[zhili.length-2])




                copyArrayList(zhili, bcnxbc)
                break
            case "AssignmentPattern":
            case "AssignmentExpression":
                if (node.operator == '+='){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()

                    startgetType(node.left, variablePool, zhili)
                    startgetType(node.right, variablePool, zhili)

                    zhili.push(RandDataCheise(zhilDx.z20))
                    zhili.push(RandDataCheise(zhilDx.z90))
                }else if (node.operator == '-='){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili)

                    startgetType(node.right, variablePool, zhili)
                    zhili.push(RandDataCheise(zhilDx.z291))
                    zhili.push(RandDataCheise(zhilDx.z90))
                }else if (node.operator == '|='){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili)

                    startgetType(node.right, variablePool, zhili)
                    zhili.push(RandDataCheise(zhilDx.z32))
                    zhili.push(RandDataCheise(zhilDx.z90))
                }else if(datkey.indexOf(node.operator) != -1){
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili)

                    startgetType(node.right, variablePool, zhili)
                    zhili.push(RandDataCheise(zhilDx["z"+dat[node.operator.replace("=","")]]))
                    zhili.push(RandDataCheise(zhilDx.z90))
                }else{
                    startgetType(node.left, variablePool, zhili)
                    zhili.pop()


                    startgetType(node.right, variablePool, zhili)


                    zhili.push(RandDataCheise(zhilDx.z290))
                }
                // startgetType(node.left, variablePool, zhili)

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
                zhili.push(RandDataCheise(zhilDx.z47))
                break
            case "NewExpression":
                let callargsNum = node.arguments.length;
                for (let i =0; i< node.arguments.length; i++){
                    startgetType(node.arguments[i], variablePool, zhili)
                }
                startgetType(node.callee, variablePool,zhili)
                zhili.push(RandDataCheise(zhilDx.z46))
                zhili.push(callargsNum)
                break
            case "ReturnStatement":
                startgetType(node.argument, variablePool, zhili)
                zhili.push(RandDataCheise(zhilDx.z200))
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
                changlc[name]['zhili'].push(RandDataCheise(zhilDx.z10))
                changlc[name]['zhili'].push(toPool(node2.params[i].left.name))

            }else{
                changlc[name]['variablePool'][node2.params[i].name] = null
                changlc[name]['zhili'].push(RandDataCheise(zhilDx.z10))
                changlc[name]['zhili'].push(toPool(node2.params[i].name))
            }

        }
        changlc[name]['zhili'].push(RandDataCheise(zhilDx.z2))

        startgetType(node2.body, changlc[name]['variablePool'], changlc[name]['zhili'])

        let hb = []
        for (let i in changlc[name]['variablePool']){
            if (changlc[name]['variablePool'][i] && changlc[name]['variablePool'][i].indexOf("awcbb_yhh_fun") != -1){
                hb.push(RandDataCheise(zhilDx.z10))
                hb.push(toPool(i))
            }
        }
        hb.push(RandDataCheise(zhilDx.z1))
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
                hb.push(RandDataCheise(zhilDx.z10))
                hb.push(toPool(i))
            }
        }
        hb.push(RandDataCheise(zhilDx.z1))
        let f = hb.length
        for (let i =0;i< f; i++){
            changlc[name]['zhili'].splice(0,0,hb.pop())
        }
    }

    start(ast)

    cood = ``

    datatext = "var constantPool = "+ JSON.stringify(constantPool)+"; var changlc = "+ JSON.stringify(changlc)+";\n"+dataText2;

    fs.writeFileSync(outpath, cood + datatext, (e)=>{})

}

const tst = + new Date()

const soure = "t3.js"
const outpath = "./outsrc/out.js"
cbbjsvmp(soure, outpath);

// 转es6的插件有问题 readme有方法可转
// if (offes5 ===1){
//     process.exec(`traceur --script ./src/${soure} --out ./dist/${soure}`, (error, stdout, stderr) => {
//     if (!error) {
//       console.log("es6 to es5 ==> 成功");
//       cbbjsvmp()
//       console.log("file is save ==> ./outsrc/out.js");
//     } else {
//       console.log("es6 to es5 ==> 失败");
//     }
// });
// } else {
//     cbbjsvmp()
//     console.log("file is save ==> ./outsrc/out.js");
// }

process.exec(`uglifyjs ./outsrc/out.js --output ./outsrc/out3.js`, (error, stdout, stderr) => {
    if (!error) {
        console.log("压缩 ==> 成功");
        console.log("file is save ==> ./outsrc/out3.js");

        process.exec(`node ./tool/pswitch.js`, (error, stdout, stderr) => {
        if (!error) {
            console.log("pswitch ==> 成功");
            console.log("file is save ==> ./outsrc/out2.js");
            process.exec(`uglifyjs ./outsrc/out2.js --mangle --output ./outsrc/out2.js`, (error, stdout, stderr) => {
                if (!error) {
                    console.log("压缩 ==> 成功");
                    console.log("file is save ==> ./outsrc/out2.js");
                    process.exec(`node ./tool/jsdebugger.js`, (error, stdout, stderr) => {
                            if (!error) {
                                console.log("jsdebugger ==> 成功");
                                console.log("file is save ==> ./outsrc/out4.js");
                                console.log("user time =>", +new Date()-tst)

                                } else {
                                    console.log("jsdebugger ==> 失败",error);
                                }
                            })

                    } else {``
                        console.log("压缩 ==> 失败",error);
                    }
            })


            } else {
                console.log("pswitch ==> 失败", error);
            }
        })


    } else {
        console.log("压缩 ==> 失败", error);
    }
})
