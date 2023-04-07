// 指令扩张

const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require("@babel/generator").default;
const tee = require("@babel/types");
const { log } = require('console');
const fs = require("fs")

function hsjsvmpTo(data){
    // 可以放到别的位置的case块
    var cancallzhil = [ 1810,47, 36, 37, 38, 39, 53, 54, 550, 19, 291, 20, 24, 240,
        27, 28, 29, 30, 31, 32, 33, 34, 104, 105, 35, 56, 60, 194
    ];




    var cans = JSON.parse(fs.readFileSync('./dist/jiamain.json') + '')
    // let data = fs.readFileSync('./tool/jsvmp_02.js') + ''
    let ast = parser.parse(data)
    let parseNode = {
        SwitchStatement(path){
            var s = path.node.cases;
            var allcans = {}
            var zcsz= [];

            // 可以添加的方法函数
            var cancallzhilw = [];

            var cbbs = path.get("cases")
            for (let i = 0; i < cbbs.length; i++){
                 if (cbbs[i].node.test ==null){
                    continue
                }
                if (cancallzhil.indexOf(cbbs[i].node.test.value) !== -1){
                    let f = cbbs[i]
                    let fg = f.get("consequent")
                    let dat = ""
                    for (let i2 = 0; i2 < fg.length; i2++){
                        if (fg[i2].node.type === "BreakStatement"){
                            continue
                        }
                        let code = fg[i2]+'';
                        code = code.replace(/duei\.cF/g,"duei.sf")
                        code = code.replace(/duei\.cf/g,"duei.sf")
                        code = code.replace(/duei\.Cf/g,"duei.sf")
                        dat += code+"\n";
                    }

                    let bhu = parser.parse(dat)
                    cancallzhilw.push(bhu.program.body)
                }
            }



            for (let i = 0; i < s.length; i++){
                if (s[i].test ==null){
                    zcsz.push(s[i])
                    continue
                }

                allcans["z"+s[i].test.value] = s[i].consequent;
            }
            var skeyList = Object.keys(cans)
            for (let i =0; i< skeyList.length; i++){
                for (let i2 =0; i2 < cans[skeyList[i]].length; i2++){
                    let sjbc = Math.floor(Math.random() * cancallzhilw.length)
                    let bc;
                    if (Math.random() * 100  > 50){
                        bc = cancallzhilw[sjbc].concat( allcans[skeyList[i]]);
                    }else {
                        if (allcans[skeyList[i]][allcans[skeyList[i]].length -1].type === "BreakStatement"){
                            let f = allcans[skeyList[i]].pop()
                            bc = allcans[skeyList[i]].concat(cancallzhilw[sjbc]);
                            bc.push(f)
                            allcans[skeyList[i]].push(f)
                        }else {
                            bc = cancallzhilw[sjbc].concat( allcans[skeyList[i]]);
                        }

                    }

                    zcsz.push(
                        tee.switchCase(
                            tee.numericLiteral(cans[skeyList[i]][i2]),
                             bc
                            )
                    )
                }
            }

            path.node.cases = zcsz;


        }
    }
    traverse(ast, parseNode)
    return generator(ast).code

}
exports.hsjsvmpTo = hsjsvmpTo;
