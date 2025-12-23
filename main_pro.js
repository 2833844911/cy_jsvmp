const parser = require("@babel/parser");
const generator = require("@babel/generator").default;
const fs = require("fs");
const { renameCj } = require("./tool/rename");
const process = require("child_process");
const { es6toes5 } = require("./tool/es5toes6");

const { switchtoif } = require("./tool/switchtoif");
const { bindfun } = require("./tool/bindfun");

// 是否转es5
offes5 = 0
var dat = { "instanceof": 1811, "+": 20, "<": 24, "*": 27, "**": 2777, "%": 28, "^": 29, "/": 30, "<<": 31, "|": 32, ">>": 33, ">>>": 34, "&": 35, "-": 19, "<=": 36, ">=": 37, ">": 38, "==": 39, "===": 53, "!==": 54, "!=": 550, "in": 551 }
var datkey = Object.keys(dat)

for (let i = 0; i < datkey.length; i++) {
    datkey[i] = datkey[i] + "="
}


var fornum = 0
var codeOfmyfun = [];

function cbbjsvmp(soure, outpath) {
    var dataText
    if (offes5 === 1) {
        dataText = fs.readFileSync("./dist/" + soure) + '';

    } else {
        dataText = fs.readFileSync("./src/" + soure) + '';
    }
    var dataText2 = fs.readFileSync("./tool/jsvmp_out_pro.js") + '';
    var changlc = {}
    var constantPool = []
    dataText = es6toes5(dataText)
    var ast = parser.parse(dataText)

    // 使用插件优化代码
    ast = renameCj(ast)
    // dataText2 = switchtoif(dataText2)




    var numberKuai = 0

    function copyArrayList(sour, newl) {
        for (let i = 0; i < newl.length; i++) {
            sour.push(newl[i])
        }
    }
    function toPool(value) {
        var a1, a2
        a1 = constantPool.indexOf(value)
        if (a1 == -1) {
            a2 = constantPool.length
            constantPool.push(value)
            return a2
        } else {
            return a1
        }
    }

    function startgetType(node, variablePool, zhili, come) {
        if (node == null) {
            return;
        }
        var a1, a2, a3, a4, a5;
        switch (node.type) {
            case "EmptyStatement":
                break
            case "ConditionalExpression":
            case "IfStatement":

                startgetType(node.test, variablePool, zhili, come);


                zhili.push(192)
                let ujj3 = []
                startgetType(node.alternate, variablePool, ujj3, come)
                zhili.push(ujj3.length + 2)
                copyArrayList(zhili, ujj3)
                zhili.push(190)
                let ujj2 = []
                startgetType(node.consequent, variablePool, ujj2, come)
                zhili.push(ujj2.length)
                copyArrayList(zhili, ujj2)
                break

            case "VariableDeclaration":
                for (let i = 0; i < node.declarations.length; i++) {
                    startgetType(node.declarations[i], variablePool, zhili, come)
                }

                break
            case "ForInStatement":
                fornum += 1

                let fbme = fornum
                startgetType(node.right, variablePool, zhili, come)
                zhili.push(57)
                zhili.push(fbme)
                zhili.push(10)
                zhili.push(toPool(0))
                zhili.push(23)
                zhili.push(22)
                zhili.push(toPool("for_in_xh_cbb" + fbme))
                let fggg = zhili.length
                zhili.push(23)
                zhili.push(10)
                zhili.push(toPool("for_in_xh_cbb" + fbme))
                zhili.push(181)
                zhili.push(23)
                zhili.push(10)
                zhili.push(toPool("for_in_xh_cbb_list" + fbme))
                zhili.push(181)
                zhili.push(10)
                zhili.push(toPool("length"))
                zhili.push(181)
                zhili.push(240)
                zhili.push(25)

                let dyyy = []
                if (node.left.type === "VariableDeclaration") {
                    startgetType(node.left, variablePool, dyyy, come)
                    startgetType(node.left.declarations[0].id, variablePool, dyyy, come)

                } else {
                    startgetType(node.left, variablePool, dyyy, come)
                }
                dyyy.pop()
                dyyy.push(23)
                dyyy.push(10)
                dyyy.push(toPool("for_in_xh_cbb_list" + fbme))
                dyyy.push(181)
                dyyy.push(23)
                dyyy.push(10)
                dyyy.push(toPool("for_in_xh_cbb" + fbme))
                dyyy.push(181)
                dyyy.push(181)
                dyyy.push(90)
                startgetType(node.body, variablePool, dyyy, come)
                dyyy.push(23)
                dyyy.push(26)
                dyyy.push(toPool("for_in_xh_cbb" + fbme))
                dyyy.push(190)
                dyyy.push(fggg - zhili.length - dyyy.length - 2)

                let bbblenko = dyyy.length
                for (let i = 0; i < bbblenko; i++) {
                    if (dyyy[i] == "cbb_break_in_the_this_yhh_417") {
                        dyyy[i] = 190;
                        dyyy[i + 1] = bbblenko - i - 2
                    } else if (dyyy[i] == "cbb_continue_in_the_this_yhh_417") {
                        dyyy[i] = 190;
                        dyyy[i + 1] = bbblenko - i - 7
                    }
                }


                zhili.push(dyyy.length)
                copyArrayList(zhili, dyyy)
                break
            case "UpdateExpression":
                // 修复：对于 i++ 或 i--，应该生成正确的字节码
                // i++ -> i = i + 1
                // i-- -> i = i - 1
                // obj.prop++ -> obj.prop = obj.prop + 1

                if (node.operator == "++") {
                    if (node.argument.type === "Identifier") {
                        // 对于简单标识符 i++
                        // 1. 加载 i 的值
                        startgetType(node.argument, variablePool, zhili, come)
                        // 2. 加载 1 并 ADD
                        zhili.push(10)
                        zhili.push(toPool(1))
                        zhili.push(20)  // ADD
                        // 3. 存储回 i
                        zhili.push(23)  // LOAD_THIS
                        zhili.push(22)  // STORE_ATTR
                        zhili.push(toPool(node.argument.name))
                    } else {
                        // 对于成员表达式 obj.prop++
                        // 1. 先生成左值地址（obj, 'prop'）
                        startgetType(node.argument, variablePool, zhili, come)
                        zhili.pop()  // 移除 LOAD_ATTR，栈: [obj, 'prop']
                        // 2. 再次加载当前值
                        startgetType(node.argument, variablePool, zhili, come)  // 栈: [obj, 'prop', oldValue]
                        // 3. 加载 1 并 ADD
                        zhili.push(10)
                        zhili.push(toPool(1))
                        zhili.push(20)  // 栈: [obj, 'prop', newValue]
                        // 4. STORE_VAR
                        zhili.push(290)
                    }

                } else if (node.operator == "--") {
                    if (node.argument.type === "Identifier") {
                        // 对于简单标识符 i--
                        // 1. 加载 i 的值
                        startgetType(node.argument, variablePool, zhili, come)
                        // 2. 加载 1 并 SUB
                        zhili.push(10)
                        zhili.push(toPool(1))
                        zhili.push(19)  // SUB
                        // 3. 存储回 i
                        zhili.push(23)  // LOAD_THIS
                        zhili.push(22)  // STORE_ATTR
                        zhili.push(toPool(node.argument.name))
                    } else {
                        // 对于成员表达式 obj.prop--
                        // 1. 先生成左值地址（obj, 'prop'）
                        startgetType(node.argument, variablePool, zhili, come)
                        zhili.pop()  // 移除 LOAD_ATTR，栈: [obj, 'prop']
                        // 2. 再次加载当前值
                        startgetType(node.argument, variablePool, zhili, come)  // 栈: [obj, 'prop', oldValue]
                        // 3. 加载 1 并 SUB
                        zhili.push(10)
                        zhili.push(toPool(1))
                        zhili.push(19)  // 栈: [obj, 'prop', newValue]
                        // 4. STORE_VAR
                        zhili.push(290)
                    }
                }
                break
            case "LabeledStatement":
                let vbvb = [];
                let vbvbname = node.label.name;
                startgetType(node.body, variablePool, vbvb, come)
                for (var ff = 0; ff < vbvb.length; ff++) {
                    if (vbvb[ff] === vbvbname) {
                        vbvb[ff] = 190;
                        vbvb[ff + 1] = vbvb.length - ff - 2;
                    }
                }
                copyArrayList(zhili, vbvb)
                break
            case "BreakStatement":
                if (node.label) {
                    zhili.push(node.label.name)
                    zhili.push(undefined)
                } else {
                    zhili.push("cbb_break_in_the_this_yhh_417")
                    zhili.push(undefined)
                }
                break
            case "DebuggerStatement":
                zhili.push(194)
                break
            case "ForStatement":
                startgetType(node.init, variablePool, zhili, come)
                let lenko = zhili.length

                startgetType(node.test, variablePool, zhili, come)
                if (node.test == null) {
                    zhili.push(10)
                    zhili.push(toPool(true))
                }

                zhili.push(25)

                let fgfgfdsujj = []


                startgetType(node.body, variablePool, fgfgfdsujj, come)
                let mydddd = fgfgfdsujj.length
                startgetType(node.update, variablePool, fgfgfdsujj, come)



                fgfgfdsujj.push(190)
                fgfgfdsujj.push(lenko - zhili.length - fgfgfdsujj.length - 2)
                zhili.push(fgfgfdsujj.length)
                lenko = fgfgfdsujj.length
                for (let i = 0; i < lenko; i++) {
                    if (fgfgfdsujj[i] == "cbb_break_in_the_this_yhh_417") {
                        fgfgfdsujj[i] = 190;
                        fgfgfdsujj[i + 1] = lenko - i - 2
                    } else if (fgfgfdsujj[i] == "cbb_continue_in_the_this_yhh_417") {
                        fgfgfdsujj[i] = 190;
                        fgfgfdsujj[i + 1] = lenko - i - mydddd - 1
                    }
                }

                copyArrayList(zhili, fgfgfdsujj)
                break
            case "WhileStatement":
                let ffflenko = zhili.length

                startgetType(node.test, variablePool, zhili, come)

                zhili.push(25)

                let jiiiujj = []
                startgetType(node.body, variablePool, jiiiujj, come)


                jiiiujj.push(190)
                jiiiujj.push(ffflenko - zhili.length - jiiiujj.length - 2)
                zhili.push(jiiiujj.length)
                ffflenko = jiiiujj.length
                for (let i = 0; i < ffflenko; i++) {
                    if (jiiiujj[i] == "cbb_break_in_the_this_yhh_417") {
                        jiiiujj[i] = 190;
                        jiiiujj[i + 1] = ffflenko - i - 2
                    } else if (jiiiujj[i] == "cbb_continue_in_the_this_yhh_417") {
                        jiiiujj[i] = 190;
                        jiiiujj[i + 1] = ffflenko - i - 4
                    }
                }

                copyArrayList(zhili, jiiiujj)
                break
            case "DoWhileStatement":
                let lenko2 = zhili.length
                let ujj = []
                startgetType(node.body, variablePool, ujj, come)
                // ujj.push(190)
                // ujj.push(lenko - zhili.length -ujj.length-2)

                lenkoe = ujj.length
                for (let i = 0; i < lenkoe; i++) {
                    if (ujj[i] == "cbb_break_in_the_this_yhh_417") {
                        ujj[i] = 190;
                        ujj[i + 1] = lenkoe - i - 2
                    } else if (ujj[i] == "cbb_continue_in_the_this_yhh_417") {
                        ujj[i] = 190;
                        ujj[i + 1] = lenkoe - i - 4
                    }
                }

                copyArrayList(zhili, ujj)
                startgetType(node.test, variablePool, zhili, come)
                zhili.push(192)
                zhili.push(lenko2 - zhili.length - 1)
                break
            case "ContinueStatement":
                zhili.push("cbb_continue_in_the_this_yhh_417")
                zhili.push(undefined)
                break
            case "VariableDeclarator":
                variablePool[node.id.name] = null;
                if (node.init != null) {
                    startgetType(node.init, variablePool, zhili, come)

                    zhili.push(23)

                    zhili.push(22)
                    a1 = constantPool.indexOf(node.id.name)
                    if (a1 == -1) {
                        zhili.push(constantPool.length)
                        constantPool.push(node.id.name)
                    } else {
                        zhili.push(a1)
                    }
                }

                break
            case "SwitchStatement":
                startgetType(node.discriminant, variablePool, zhili, come)


                let hu = node.cases.length
                let zwdz = [];
                let gggcbb = []
                for (let i = 0; i < hu; i++) {
                    let litshuz = []
                    if (node.cases[i].test == null) {
                        zhili.push(10)
                        zhili.push(toPool(null))
                    } else {
                        startgetType(node.cases[i].test, variablePool, zhili, come)
                    }
                    zwdz.push(gggcbb.length)
                    // 块
                    for (let i2 = 0; i2 < node.cases[i].consequent.length; i2++) {
                        startgetType(node.cases[i].consequent[i2], variablePool, litshuz, come)
                    }

                    copyArrayList(gggcbb, litshuz)
                }
                zhili.push(10)
                zhili.push(toPool(null))
                for (let i = 0; i < zwdz.length; i++) {
                    zhili.push(10)
                    zhili.push(toPool(zwdz[i]))
                }
                zhili.push(10)
                zhili.push(toPool(gggcbb.length))

                zhili.push(48)
                zhili.push(hu + 1)
                let oolenko = gggcbb.length
                for (let i = 0; i < oolenko; i++) {
                    if (gggcbb[i] == "cbb_break_in_the_this_yhh_417") {
                        gggcbb[i] = 190;
                        gggcbb[i + 1] = oolenko - i - 2
                    }
                }

                copyArrayList(zhili, gggcbb)

                break
            case "LogicalExpression":
                if (node.operator == "&&") {
                    startgetType(node.left, variablePool, zhili, come)

                    zhili.push(51)
                    let bh = []
                    startgetType(node.right, variablePool, bh, come)

                    zhili.push(bh.length)
                    copyArrayList(zhili, bh)
                } else if (node.operator == "||") {
                    startgetType(node.left, variablePool, zhili, come)

                    zhili.push(252)
                    let bh = []
                    startgetType(node.right, variablePool, bh, come)

                    zhili.push(bh.length)
                    copyArrayList(zhili, bh)
                }
                break
            case "BooleanLiteral":
            case "NumericLiteral":
            case "NullLiteral":
            case "BigIntLiteral":
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
                startgetType(node.object, variablePool, zhili, come)

                if (node.property.type == "Identifier" && node.computed == false) {
                    zhili.push(10)
                    zhili.push(toPool(node.property.name))
                    zhili.push(181)
                } else if (node.property.type == "NumericLiteral" || node.property.type == "StringLiteral") {
                    zhili.push(10)
                    zhili.push(toPool(node.property.value))
                    zhili.push(181)
                } else {
                    startgetType(node.property, variablePool, zhili, come)

                    zhili.push(181)
                }

                break
            case "BinaryExpression":
                startgetType(node.left, variablePool, zhili, come)
                startgetType(node.right, variablePool, zhili, come)

                zhili.push(dat[node.operator])
                break
            case "UnaryExpression":
                if (node.argument.type == "NumericLiteral" || node.argument.type == "BooleanLiteral" || node.argument.type == "StringLiteral") {
                    zhili.push(10)
                    zhili.push(toPool(node.argument.value))
                } else {
                    startgetType(node.argument, variablePool, zhili, come)
                }
                if (node.operator == "~") {
                    zhili.push(44)
                } else if (node.operator == "typeof") {
                    zhili.push(49)
                } else if (node.operator == "!") {
                    zhili.push(60)
                } else if (node.operator == "-") {
                    zhili.push(50)
                } else if (node.operator == "delete") {
                    zhili.pop()
                    zhili.push(55)
                } else if (node.operator == "void") {
                    zhili.push(56)
                }
                break
            case "CallExpression":
                if (node.callee.type === "Identifier" && node.callee.name === "cbb_prgnx") {
                    zhili.push(1820)

                    break
                }
                if (node.callee.type === "Identifier" && node.callee.name === "cbb_prgunx") {
                    zhili.push(1821)

                    break
                }
                if (node.callee.type === "Identifier" && node.callee.name === "cbb_prg") {

                    for (let i = 0; i < node.arguments.length; i++) {
                        startgetType(node.arguments[i].callee, variablePool, zhili, come)
                        zhili.push(23)
                        zhili.push(10)
                        zhili.push(toPool(node.arguments[i].callee.name))
                        zhili.push(181)
                        zhili.push(10)
                        zhili.push(toPool("fg"))
                        zhili.push(181)
                        zhili.push(10)
                        zhili.push(toPool("cbb_isokk_yhh_very_p"))
                        for (let i2 = 0; i2 < node.arguments[i].arguments.length; i2++) {
                            startgetType(node.arguments[i].arguments[node.arguments[i].arguments.length - i2 - 1], variablePool, zhili)
                        }
                        zhili.push(1818)
                        zhili.push(1817)

                    }

                    zhili.push(1812)
                    zhili.push(1819)
                    break
                }

                if (node.callee.type === "Identifier" && node.callee.name.indexOf("cbb_") === 0) {
                    zhili.push(10)
                    zhili.push(toPool("cbbiyhh_dgggg_opopop"))
                }
                for (let i = 0; i < node.arguments.length; i++) {
                    startgetType(node.arguments[i], variablePool, zhili, come)

                }
                if (node.callee.type === "Identifier" && node.callee.name.indexOf("cbb_") === 0) {

                    startgetType(node.callee, variablePool, zhili, come)
                    zhili.push(1812)
                    zhili.push(1813)

                } else {
                    startgetType(node.callee, variablePool, zhili, come)

                    zhili.push(150)
                    zhili.push(node.arguments.length)
                }

                break
            case "FunctionDeclaration":
                if (node.id.name.indexOf("cbb_") === 0) {
                    variablePool[node.id.name] = "awcbb_yhh_fun" + numberKuai
                    startfun2(node)
                } else {
                    variablePool[node.id.name] = "awcbb_yhh_fun" + numberKuai
                    startfun(node)
                }

                break
            case "ArrowFunctionExpression":
            case "FunctionExpression":
                let bcxh
                if (node.id) {
                    bcxh = "awcbb_yhh_fun" + numberKuai
                    variablePool[node.id.name] = bcxh
                    startfun(node)
                    zhili.push(23)
                    zhili.push(10)
                    zhili.push(toPool(node.id.name))
                    zhili.push(181)
                } else {
                    bcxh = "awcbb_yhh_fun" + numberKuai
                    variablePool[bcxh] = bcxh
                    startfun(node)
                    zhili.push(23)
                    zhili.push(10)
                    zhili.push(toPool(bcxh))
                    zhili.push(181)
                }


                break

            case "SequenceExpression":
                var d, ohh;
                for (let i = 0; i < node.expressions.length; i++) {
                    startgetType(node.expressions[i], variablePool, zhili, come)
                    if (node.expressions[i].type === "CallExpression" || node.expressions[i].type === "Identifier" || node.expressions[i].type === "MemberExpression"
                        || node.expressions[i].type === "BooleanLiteral" || node.expressions[i].type === "NumericLiteral"
                        || node.expressions[i].type === "NullLiteral" || node.expressions[i].type === "StringLiteral"
                        || node.expressions[i].type === "FunctionExpression"
                        || node.expressions[i].type === "UnaryExpression"
                        || node.expressions[i].type === "BinaryExpression"
                        || node.expressions[i].type === "UpdateExpression"
                        || node.expressions[i].type === "SequenceExpression"
                        || node.expressions[i].type === "AssignmentExpression"
                        || node.expressions[i].type === "LogicalExpression"
                        || node.expressions[i].type === "ConditionalExpression"
                        || true
                    ) {
                        d = zhili.push(1810)
                        ohh = 1
                    } else {
                        ohh = 0
                    }
                }
                if (ohh === 1) {
                    zhili.pop()
                } else {
                    zhili.push(10)
                    zhili.push(toPool(undefined))
                }

                break
            case "ObjectExpression":
                zhili.push(104)
                for (let i = 0; i < node.properties.length; i++) {
                    startgetType(node.properties[i], variablePool, zhili, come)
                }
                break
            case "ThrowStatement":
                startgetType(node.argument, variablePool, zhili, come)
                zhili.push(58)
                break
            case "ObjectProperty":
                if (node.key.type == "Identifier") {
                    zhili.push(10)
                    zhili.push(toPool(node.key.name))
                } else {
                    startgetType(node.key, variablePool, zhili, come)
                }

                startgetType(node.value, variablePool, zhili, come)
                zhili.push(45)
                break
            case "ArrayExpression":
                zhili.push(105)
                for (let i = 0; i < node.elements.length; i++) {
                    let gy = node.elements[i]
                    if (gy == null) {
                        gy = { type: "NullLiteral" }
                        gy.value = undefined
                    }
                    startgetType(gy, variablePool, zhili, come)
                    zhili.push(40)
                }
                break;
            case "RegExpLiteral":
                zhili.push(8)
                zhili.push(toPool(node.pattern))
                zhili.push(toPool(node.flags))

                break
            case "TryStatement":
                zhili.push(195)
                let bcnxbc = []
                startgetType(node.block, variablePool, bcnxbc, come)
                bcnxbc.push(200)
                zhili.push(bcnxbc.length)
                if (node.handler != null) {
                    variablePool[node.handler.param.name] = null
                    startgetType(node.handler.param, variablePool, bcnxbc, come)
                    bcnxbc.pop()
                    bcnxbc.push(197)
                    startgetType(node.handler.body, variablePool, bcnxbc, come)
                }
                bcnxbc.push(200)
                zhili.push(bcnxbc.length - zhili[zhili.length - 1])
                if (node.finalizer != null) {
                    startgetType(node.finalizer, variablePool, bcnxbc, come)
                }
                bcnxbc.push(200)
                zhili.push(bcnxbc.length - zhili[zhili.length - 1] - zhili[zhili.length - 2])




                copyArrayList(zhili, bcnxbc)
                break
            case "AssignmentPattern":
            case "AssignmentExpression":
                if (node.operator == '+=') {
                    startgetType(node.left, variablePool, zhili, come)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili, come)
                    startgetType(node.right, variablePool, zhili, come)

                    zhili.push(20)
                    zhili.push(292)
                } else if (node.operator == '-=') {
                    startgetType(node.left, variablePool, zhili, come)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili, come)

                    startgetType(node.right, variablePool, zhili, come)
                    zhili.push(291)
                    zhili.push(292)
                } else if (node.operator == '|=') {
                    startgetType(node.left, variablePool, zhili, come)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili, come)

                    startgetType(node.right, variablePool, zhili, come)
                    zhili.push(32)
                    zhili.push(292)
                } else if (datkey.indexOf(node.operator) != -1) {
                    startgetType(node.left, variablePool, zhili, come)
                    zhili.pop()
                    startgetType(node.left, variablePool, zhili, come)

                    startgetType(node.right, variablePool, zhili, come)
                    zhili.push(dat[node.operator.replace("=", "")])
                    zhili.push(292)
                }
                else {
                    startgetType(node.left, variablePool, zhili, come)
                    zhili.pop()
                    startgetType(node.right, variablePool, zhili, come)

                    zhili.push(292)
                }
                // startgetType(node.left, variablePool, zhili,come)
                break;
            case "ExpressionStatement":
                startgetType(node.expression, variablePool, zhili, come)
                break
            case "BlockStatement":
                for (a1 = 0; a1 < node.body.length; a1++) {
                    startgetType(node.body[a1], variablePool, zhili, come)
                }

                break
            case "ThisExpression":
                zhili.push(47)
                break
            case "NewExpression":
                let callargsNum = node.arguments.length;
                for (let i = 0; i < node.arguments.length; i++) {
                    startgetType(node.arguments[i], variablePool, zhili, come)
                }
                startgetType(node.callee, variablePool, zhili, come)
                zhili.push(46)
                zhili.push(callargsNum)
                break
            case "ReturnStatement":
                if (come) {
                    startgetType(node.argument, variablePool, zhili, come)
                    zhili.push(1814)
                    zhili.push(1816)
                } else {
                    startgetType(node.argument, variablePool, zhili, come)
                    zhili.push(-1)
                }

                break
            default:
                console.log(generator(node).code)
                console.log("is not jiex");
        }

    }

    function startfun2(node2) {
        let name = "awcbb_yhh_fun" + numberKuai
        numberKuai += 1
        var fyyy = codeOfmyfun.length
        changlc[name] = {
            "variablePool": {}
            , "zhili": codeOfmyfun,
            "af": fyyy,
            "isfunmr": 1,
        }


        for (let iy = 0; iy < node2.params.length; iy++) {
            let i = node2.params.length - iy - 1;
            if (node2.params[i].type === "AssignmentPattern") {
                changlc[name]['variablePool'][node2.params[i].left.name] = null
                startgetType(node2.params[i], changlc[name]['variablePool'], changlc[name]['zhili'], 1)
                changlc[name]['zhili'].push(23)
                changlc[name]['zhili'].push(10)
                changlc[name]['zhili'].push(toPool(node2.params[i].left.name))
                changlc[name]['zhili'].push(1815)

            } else {
                changlc[name]['variablePool'][node2.params[i].name] = null
                changlc[name]['zhili'].push(23)
                changlc[name]['zhili'].push(10)
                changlc[name]['zhili'].push(toPool(node2.params[i].name))
                changlc[name]['zhili'].push(1815)
            }

        }


        startgetType(node2.body, changlc[name]['variablePool'], changlc[name]['zhili'], 1)

        let hb = []
        hb.push(10)
        hb.push(toPool("cbbiyhh.online"))
        for (let i in changlc[name]['variablePool']) {
            if (changlc[name]['variablePool'][i] && changlc[name]['variablePool'][i].indexOf("awcbb_yhh_fun") != -1) {
                hb.push(10)
                hb.push(toPool(i))
            }
        }
        hb.push(1)
        let f = hb.length
        for (let i = 0; i < f; i++) {
            changlc[name]['zhili'].splice(fyyy, 0, hb.pop())
        }
        delete changlc[name]['zhili']

    }

    function startfun(node2) {
        let name = "awcbb_yhh_fun" + numberKuai
        numberKuai += 1
        changlc[name] = {
            "variablePool": {}
            , "zhili": []
        }

        for (let i = 0; i < node2.params.length; i++) {
            if (node2.params[i].type === "AssignmentPattern") {
                changlc[name]['variablePool'][node2.params[i].left.name] = null
                startgetType(node2.params[i], changlc[name]['variablePool'], changlc[name]['zhili'])
                changlc[name]['zhili'].push(10)
                changlc[name]['zhili'].push(toPool(node2.params[i].left.name))

            } else {
                changlc[name]['variablePool'][node2.params[i].name] = null
                changlc[name]['zhili'].push(10)
                changlc[name]['zhili'].push(toPool(node2.params[i].name))
            }

        }
        changlc[name]['zhili'].push(2)

        startgetType(node2.body, changlc[name]['variablePool'], changlc[name]['zhili'])

        let hb = []
        for (let i in changlc[name]['variablePool']) {
            if (changlc[name]['variablePool'][i] && changlc[name]['variablePool'][i].indexOf("awcbb_yhh_fun") != -1) {
                hb.push(10)
                hb.push(toPool(i))
            }
        }
        hb.push(1)
        let f = hb.length
        for (let i = 0; i < f; i++) {
            changlc[name]['zhili'].splice(0, 0, hb.pop())
        }
    }


    function start(node2) {
        let name = "awcbb_yhh_fun" + numberKuai
        numberKuai += 1
        changlc[name] = {
            "variablePool": {}
            , "zhili": []
        }

        let node = node2.program.body
        for (let i = 0; i < node.length; i++) {
            startgetType(node[i], changlc[name]['variablePool'], changlc[name]['zhili'])
        }
        let hb = []
        for (let i in changlc[name]['variablePool']) {
            if (changlc[name]['variablePool'][i] && changlc[name]['variablePool'][i].indexOf("awcbb_yhh_fun") != -1) {
                hb.push(10)
                hb.push(toPool(i))
            }
        }
        hb.push(1)
        let f = hb.length
        for (let i = 0; i < f; i++) {
            changlc[name]['zhili'].splice(0, 0, hb.pop())
        }
    }

    start(ast)

    cood = ``

    datatext = "(function(){\nvar cywindow = this; var codeOfmyfun = " + JSON.stringify(codeOfmyfun) + ";var constantPool = " + JSON.stringify(constantPool) + "; var changlc = " + JSON.stringify(changlc) + ";\n" + dataText2 + "})()";

    fs.writeFileSync(outpath, cood + datatext, (e) => { })

}


// 需要加密的js
const soure = "t3.js"
const outpath = "./outsrc/out.js"

cbbjsvmp(soure, outpath)

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


