const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require("@babel/generator").default;
const tee = require("@babel/types");
const { log } = require('console');
const fs = require("fs")





//混乱数组
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


iftrueData2 = `
if (typeof document.all == "undefined"){

}else{

}

if (typeof document.all == "undefined"){

}else{

}

if (window.btoa("1234") == "MTIzNA=="){

}else {

}

`

iffalseDate2 = `

if (typeof document.all == "object"){

}else{

}

if (!navigator.appName){

}else{

}
`

function randomUnmber(start, end){
    let data = Math.ceil(Math.random() * end) + start;
    return data;
}

function hljiamshuz(data){
    if (Math.random() * 10 < 98){
        if (typeof data.value == typeof []){
            data.value = data.value[0]
        }

        return {"data": data, "zx":[]}
    }
    let trueFalseList = [];
    let qiant = Math.ceil(Math.random() * 2 );
    let unqiant = Math.ceil(Math.random() * 2 );

    for (let i = 0; i < qiant; i++){
        trueFalseList.push(1)
    }

    for (let i = 0; i < unqiant; i++){
        trueFalseList.push(-1)
    }


    trueFalseList = RandDataArray(trueFalseList);

    let zxshuz = []

    for (let i = 0; i < trueFalseList.length; i++){

        iftrueData = parser.parse(iftrueData2)

        iftrueData = iftrueData.program.body


        iffalseDate = parser.parse(iffalseDate2)
        iffalseDate = iffalseDate.program.body

        if (trueFalseList[i] == 1){
            let df = iftrueData[randomUnmber(0, iftrueData.length-1)]
            let jianqNumber = Math.ceil(Math.random() * 2) + 1
            data.value -= jianqNumber
            let y = tee.assignmentExpression("=", data.key, tee.binaryExpression("+",data.key, tee.NumericLiteral(jianqNumber)))
            df.consequent.body.push(y);

            let y2 = tee.assignmentExpression("=", data.key, tee.binaryExpression("+",data.key, tee.NumericLiteral(Math.ceil(Math.random() * 4) + 1)))
            df.alternate.body.push(y2);

            zxshuz.push(df);
        }else if (trueFalseList[i] == -1){
            let df = iffalseDate[randomUnmber(0, iffalseDate.length-1)]

            let jianqNumber = Math.ceil(Math.random() * 2) + 1
            data.value -= jianqNumber
            let y = tee.assignmentExpression("=", data.key, tee.binaryExpression("+",data.key, tee.NumericLiteral(jianqNumber)))
            df.alternate.body.push(y);

            let y2 = tee.assignmentExpression("=", data.key, tee.binaryExpression("+",data.key, tee.NumericLiteral(Math.ceil(Math.random() * 4) + 1)))
            df.consequent.body.push(y2);

            zxshuz.push(df);
        }
    }
    return {"data": data, "zx":zxshuz};
}





// 构建躯体
function gitBody(data){
    var body = tee.expressionStatement(tee.callExpression(tee.functionExpression(null,[],tee.blockStatement(
        data
    )), []))
    return body;
}

//顺序数组
var shengxu = [];

// 创建字典并初始值， 可在执行后插入代码；
function createDict(args, body, bodyNode){
    let medata = [];
    let start = shengxu.length
    let dyb = {}
    let ifel = [];


    let gyhhu = []

    for (let i2 = 0; i2 < body.length; i2++){
        shengxu.push(body[i2])
    }
    for (let i = 0; i < args.length; i++){
        let data = {
            key :  tee.identifier("oo"+ i) ,
            value: args[i]
        }
        let gh = hljiamshuz(data)
        // medata.push(tee.objectProperty(tee.identifier("oo"+i),tee.NumericLiteral(gh['data'].value)))

        gyhhu.push(["oo"+i,tee.NumericLiteral(gh['data'].value) ])

        dyb[args[i]] = gh['data'].key
        ifel = ifel.concat(gh['zx'])

    }


    data2 = {
        key : tee.identifier("oost"),
        value: start
    }
    let gh2 = hljiamshuz(data2)
    // medata.push(tee.objectProperty(tee.identifier("oost"), tee.NumericLiteral(gh2['data'].value)))

    gyhhu.push(["oost",tee.NumericLiteral(gh2['data'].value)])

    dyb["start"] = gh2['data'].key
    let gh = ifel.concat(gh2['zx'])


    // let data = tee.variableDeclaration("var", [tee.variableDeclarator(
    //     tee.identifier("cbb_hx1"), tee.objectExpression(medata)
    // )])
    // let gh = [data].concat(ifel)

    for (let i =0; i < gyhhu.length; i++){
        data = tee.variableDeclaration("var", [tee.variableDeclarator(
            tee.identifier(gyhhu[i][0]), gyhhu[i][1]
        )])
        gh = [data].concat(gh)
    }


    gh.push(bodyNode)
    let body2 = gitBody(gh)
    return {"e":body2, "e2":dyb};

}

// pp = createDict([10,22,33], [2,5,8,6])
// let u = generator(pp).code
// console.log(u);


let parseData = {
    CallExpression(path){
        if (path.node.callee.name == "Cbb"){
            var trueList = []
            var falseList = []
            for (let i=0; i< path.node.arguments[0].elements.length; i++){
                trueList.push("if ("+ path.node.arguments[0].elements[i].value+ "){}else{};")
            }
            for (let i=0; i< path.node.arguments[1].elements.length; i++){
                falseList.push("if ("+ path.node.arguments[1].elements[i].value+ "){}else{};")
            }
            var funPath = path.findParent((p)=>p.isFunctionDeclaration());
            var mg = [];
            let shuz = []

            var leme = [];
            var leme2 = [];
            funPath.traverse({
                NumericLiteral(path2){
                    let gh = path2.findParent((p)=>p.isFunctionDeclaration());
                    if (funPath == gh){
                        leme.push([path2.node.value, path2])
                        leme2.push([path2.node.value])
                    }
                }
            })
            funPath.replaceInline(tee.assignmentExpression("=", tee.identifier(funPath.node.id.name), tee.functionExpression(null,funPath.node.params, funPath.node.body)))

            var hui = createDict(leme2,shuz, funPath.node);
            for (let i = 0; i< leme.length; i++){
                leme[i][1].replaceInline( hui["e2"][leme[i][0]])
            }
            funPath.replaceInline(hui["e"])
            funPath.skip()

            path.remove();
        }
    }
}



let data = fs.readFileSync('./outsrc/out3.js') + ''
let ast = parser.parse(data)
traverse(ast, parseData)
let wmhans = "var shengxu = "+JSON.stringify(shengxu)+";\n"+
`
function cbbfuntome(a){
    var i = shengxu[a.cbb];
    a.cbb += 1
    return i;
};\n
`
let u =wmhans+ generator(ast,{
    // compact:true
}).code
fs.writeFileSync("./outsrc/out2.js", u, (e)=>{})







