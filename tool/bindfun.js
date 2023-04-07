const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require("@babel/generator").default;
const tee = require("@babel/types");



function tiancHans(data){
    var code = `
    function banhhans(){
      for (let i = 0; i < zzhans.length; i++){
          if (zzhans[i] == 1) {
              zzhans[i] = duei.cf.bind(duei).call.bind(duei.cf.bind(duei), duei.cf.bind(duei))
          } else {
              if (zzhans[i] == 2){
                   zzhans[i] = duei.sf.bind(duei).call.bind(duei.sf.bind(duei), duei.sf.bind(duei))
              }else{
                  if (zzhans[i] == 3){
                       zzhans[i] = duei.Cf.bind(duei).call.bind(duei.Cf.bind(duei), duei.Cf.bind(duei))
                  }else{
                      zzhans[i] = duei.cF.bind(duei).call.bind(duei.cF.bind(duei), duei.cF.bind(duei))
                  }
                   
              }

          };
      }

  }
  banhhans();
    `
    var datame = []
    var kswz = "";
    var ffff = 0
    var fg;
    var ggggj = []

    var parseHj = {
        VariableDeclaration(path){
            if (path.node.declarations[0].id.name.indexOf("cbb0") === -1 ){
                return
            }
            if (kswz === ""){
                kswz = path.node.declarations[0].id.name
            }
            var y = path.node.declarations[0].init.callee.object.object.callee.object.property.name
            var yu;
            switch (y){
                case "cf":
                    yu = 1;
                    break
                case "sf":
                    yu = 2
                    break
                case "Cf":
                    yu = 3
                    break
                case "cF":
                    yu = Math.ceil(3 +Math.random() * 10 +0.1)
                    break
                default:
                    break
            }
            datame.push(yu)
            ggggj.push(tee.variableDeclarator(tee.identifier(path.node.declarations[0].id.name), tee.memberExpression(
                tee.identifier("zzhans"), tee.NumericLiteral(datame.length-1), true, false
            )))
            if (ffff === 0){
                fg = path
                ffff = 1
                path.skip()
            }else {
                path.remove();
            }



        }
    }

    let ast = parser.parse(data)
    traverse(ast, parseHj)
    var f = tee.variableDeclaration("var",ggggj)
    fg.replaceInline(f)
    data = generator(ast).code;
    code = "var zzhans = "+ JSON.stringify(datame)+";\n"+code;
    data = data.replace("var "+ kswz, code+";var "+ kswz)
    return data


}

function bindfun(data){
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

    var needth = []
    let ast = parser.parse(data)
    let parseHj = {
        CallExpression(path){
            if (path.node.callee.name !== "CbbCs"){
                return
            }
            var needBand = path.scope.getBinding(path.node.arguments[0].name);
            var czsj = []
            for (let i = 0; i < path.node.arguments[1].elements.length; i++){
                czsj.push(generator(path.node.arguments[1].elements[i]).code)
            }
            var jiaf = []
            var fname = 0;
            for (let i =0; i < needBand.referencePaths.length; i++){
                if (czsj.indexOf(needBand.referencePaths[i].parentPath+ '') !== -1){
                    var data = `${"var cbb000000"+ fname} = ${needBand.referencePaths[i].parentPath+ ''}.bind(${needBand.referencePaths[i]+ ''}).call.bind(${needBand.referencePaths[i].parentPath+ ''}.bind(${needBand.referencePaths[i] + ''}), ${needBand.referencePaths[i].parentPath+ ''}.bind(${needBand.referencePaths[i] + ''}));`
                    jiaf.push( data);
                    needBand.referencePaths[i].parentPath.replaceWithSourceString("cbb000000"+ fname)
                    fname += 1;

                }
            }
            jiaf = RandDataArray(jiaf)
            needth.push([path+"", jiaf.join('')])
            path.skip()
        }
    }
    traverse(ast, parseHj)
    var d = generator(ast).code;
    for (let i = 0; i< needth.length; i++){
        d = d.replace(needth[i][0], needth[i][1])
    }
    d = tiancHans(d)
    return d

}

exports.bindfun = bindfun;
