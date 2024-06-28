function cltothis(cythis, poolList,off){
    for (let i in poolList){
        if (off == 1){
            cythis[i] = undefined
        }else{
            cythis[i] = poolList[i];

        }

    }
}
window._fetch = window.fetch

function cbb_jsvmp(all, duei, start, shuz,argsList, ogg, op) {

    function getproto(s,d,e){
        let dt = s;
        for ( ;1==1;){
        if (s.hasOwnProperty(d)){
            try{
                s[d] = e
            }catch(e2){
                this[d] = e
                return
            }

            break
        }else{
            s = s.__proto__
            if (s == undefined || s==null){
                    window[d] = e
                    return
            }else{
                a9 =9
            }
        }
        }
    }

    if (op !==undefined){
        var allthis
        allthis = op['allthis']
        duei = op.duei
        all = op.all
        shuz = op.shuz
        argsList = op.argsList
        var a1,a2,a3,a4,a5,a6,a7,a8,a9,j, j2,i ;
        a7 = op.a7
        var args = op.args
        var cbbb = op.cbbb;
    }else{
        var allthis
        if (ogg !== undefined){
            allthis = ogg
        }else{
            allthis = all
        }
        var a1,a2,a3,a4,a5,a6,a7,a8,a9,j, j2, i;
        var args = []
        var cbbb = all;
    }
    CbbCs(duei, [duei.push, duei.pop, duei.shift,  duei.sf])
    Cbb([], [])
    while (!![]) {
        let s_cbb = shuz[start++];
        switch(s_cbb){
            case 23:
                all = cbbb
                a1 = duei.push(cbbb)
                break
            case 47:
                a2 = duei.push(allthis)
                break
            case 36:
                a1 = duei.pop(cbbb)
                a2 = duei.pop(a1)
                a1 = a2 <= a1;
                a5 = duei.push(a1)
                break
            case 37:
                a1 = duei.pop(a4)
                a2 = duei.pop(a1)
                a1 = a2 >= a1;
                a2 = duei.push(a1)
                break
            case 38:
                a1 = duei.pop(a3)
                a2 = duei.pop(a3)
                a1 = a2 > a1;
                a2 = duei.push(a1)
                break
            case 39:
                a1 = duei.pop(a2)
                a2 = duei.pop(a1)
                a1 = a2 == a1;
                a4 = duei.push(a1)
                break
            case 48:
                (function (){
                   a1 = shuz[start++] * 2
                    a3 = []
                    a4 = []
                    for (a2=0; a2< a1;a2++){
                        if (a2 < a1/2){
                            a3.splice(0,0,duei.pop())
                        }else{
                            a4.splice(0,0,duei.pop())
                        }

                    }
                    a1 = duei.pop(a2)
                    for (a2=0; a2 < a3.length; a2++){
                        if (a4[a2] == a1){
                            start += a3[a2]
                            break
                        }
                        else if (a4[a2] == null){
                            start += a3[a2]
                            break
                        }else {
                            a9 = 10;
                        }
                    }
                })()


                break
            case 53:
                a1 = duei.pop(a2)
                a2 = duei.pop(a1)
                a1 = a2 === a1;
                a3 = duei.push(a1)
                break
            case 54:
                a1 = duei.pop(a5)
                a2 = duei.pop(a6)
                a1 = a2 !== a1;
                a1 = duei.push(a1)
                break
            case 550:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 != a1;
                duei.push(a1)
                break
            case 551:
                a1 = duei.pop(a3)
                a2 = duei.pop(a1)
                a1 = a2 in a1;
                a1 = duei.push(a1)
                break
            case 22:
                a1 = shuz[start++]
                a2 = duei.pop(a3)
                a3 = duei.pop(a1)
                a2[constantPool[a1]] = a3
                break
            case 19:
                a1 = duei.pop(a4)
                a2 = duei.pop(a5)
                a1 = a2 - a1;
                a6 = duei.push(a1)
                break
            case 291:
                a1 = duei.pop(a2)
                a2 = duei.pop(a1)
                a1 = a2 - a1;
                a1 = duei.push(a1)
                break
            case 20:
                a1 = duei.pop(a2)
                a2 = duei.pop(a1)
                a1 = a2 + a1;
                a1 = duei.push(a1)
                break
            case 24:
                a1 = duei.pop(a3)
                a2 = duei.pop(a1)
                a1 = a2 < a1;
                a1 = duei.push(a1)
                break
            case 240:
                a1 = duei.pop(a5)
                a2 = duei.pop(a9)
                a1 = a2 < a1;
                a6 = duei.push(a1)
                break
            case 27:
                a1 = duei.pop(a5)
                a2 = duei.pop(a6)
                a1 = a2 * a1;
                a7 = duei.push(a1)

                break
            case 28:
                a1 = duei.pop(a3)
                a2 = duei.pop(a4)
                a1 = a2 % a1;
                a5 = duei.push(a1)

                break
            case 29:
                a1 = duei.pop(a3)
                a2 = duei.pop(a4)
                a1 = a2 ^ a1;
                a5 = duei.push(a1)

                break
            case 30:
                a1 = duei.pop(a2)
                a2 = duei.pop(a1)
                a1 = a2 / a1;
                a3 = duei.push(a1)

                break
            case 194:
                (function (){
                    debugger;

                })()
                break
            case 25:
                a1 = duei.pop(a6)
                a2 = shuz[start++]
                if (!a1) {
                    start += a2;
                }else {
                        a9 = 10;
                    }
                ;break
            case 31:
                a1 = duei.pop(a3)
                a2 = duei.pop(a2)
                a1 = a2 << a1;
                a1 = duei.push(a1)

                break
            case 32:
                a1 = duei.pop(a6)
                a2 = duei.pop(a7)
                a1 = a2 | a1;
                a8 = duei.push(a1)

                break
            case 26:
                a1 = duei.pop(a9)
                // a2 = duei.pop()
                a3 = shuz[start++]
                a1[ constantPool[a3]] += 1

                break
            case 190:
                a1 = shuz[start++]
                start += a1
                break
            case 192:
                a1 = duei.pop(a2)
                a3 = shuz[start++]
                if (a1) {
                    start += a3
                }else {
                    a9 = 9
                }
                break
            case 33:
                a1 = duei.pop(a3)
                a2 = duei.pop(a4)
                a1 = a2 >> a1;
                a5 = duei.push(a1)

                break
            case 34:
                a1 = duei.pop(a6 )
                a2 = duei.pop(a1)
                a1 = a2 >>> a1;
                a2 = duei.push(a1)

                break
            case 52:
                a1 = duei.pop(a3 )
                // a2 = duei.pop()
                a3 = shuz[start++]
                a1[ constantPool[a3]] -= 1
                break
            case 104:
                a1 = duei.push({})
                break
            case 105:
                a2 = duei.push([])
                break
            case 57:
                (function (){
                    i = []
                    a3 = shuz[start++]
                    a2 = duei.pop(a2)
                    for (a1 in a2){
                        i.push(a1)
                    }
                    cbbb['for_in_xh_cbb_list'+a3] = i

                })()

                break
            case 51:
                a1 = duei.pop(a3)
                a2 = shuz[start++]
                if (!a1) {
                    start += a2;
                    a4 = duei.push(a1)
                }else {
                        a9 = 10;
                    }
                ;break
            case 252:
                a1 = duei.pop(a5)
                a2 = shuz[start++]
                if (a1) {
                    start += a2;
                    a7 = duei.push(a1)
                }else {
                        a9 = 10;
                    }
                ;break
            case 195:
                a2 = shuz[start++]
                a3 = shuz[start++]
                a4 = shuz[start++]
                try{
                    a6 = cbb_jsvmp(a3, start, start, duei, args.length, 1, {
                        "shuz":shuz,
                        "cbbb":cbbb,
                        "allthis":allthis,
                        "argsList":argsList,
                        "args":args,
                        "duei":duei,
                        "all": all,
                        "a7":a7
                    })
                    start = a2+start;
                    if (a6 == "-90_cbb"){
                        return a6
                    }

                }catch(e){
                    a7 = e
                    start = a2+start;
                    a6 = cbb_jsvmp(a1, start, start, duei, args.length, 1, {
                        "shuz":shuz,
                        "cbbb":cbbb,
                        "allthis":allthis,
                        "args":args,
                        "argsList":argsList,
                        "duei":duei,
                        "all": all,
                        "a7":a7
                    })
                    if (a6 == "-90_cbb"){
                        return a6
                    }else {
                        a9 = 10;
                    }
                }finally{
                        if (a6 == "-90_cbb"){
                        return a6
                    }else {
                        a9 = 10;
                    }
                    start = a3+start;
                    a6 = cbb_jsvmp(a3, start, start, duei, args.length, 1, {
                        "shuz":shuz,
                        "cbbb":cbbb,
                        "allthis":allthis,
                        "argsList":argsList,
                        "args":args,
                        "duei":duei,
                        "all": all,
                        "a7":a7
                    })
                    if (a6 == "-90_cbb"){
                        return a6
                    }else {
                        a9 = 10;
                    }
                    start =start+ a4
                }


                break
            case 35:
                a1 = duei.pop(a2)
                a2 = duei.pop(a3)
                a1 = a2 & a1;
                a3 = duei.push(a1)

                break
            case 8:
                a1 = shuz[start++]
                a2 = shuz[start++]
                a1 = new RegExp( constantPool[a1], constantPool[a2]) ;
                a4 = duei.push(a1)

                break
            case 10:
                a1 = shuz[start++]
                a2 = duei.push(constantPool[a1])
                break
            case 11:
                a1 = shuz[start++]
                a2 = duei.push(a1)
                break
            case 58:
                (function (){
                    a1 = duei.pop(a2)
                    throw a1
                })()

                break
            case 40:
                a1 = duei.pop(a3)
                a2 = duei.pop(a1)
                a2.push(a1);
                a1 = duei.push(a2)
                break
            case 1:
                a8 = duei.length
                for (a1=0; a1< a8; a1++){
                    a7 = duei.pop(a1)
                    let g = a7

                    all[g] = function(){
                        let g2 = new cshduei()
                        var huuuu = this

                        if (offnew == 1){
                            offnew=0
                            a9 = {
                                "variablePool":{},
                                "arguments": arguments,
                                "zhili":[]
                            }
                            a9.__proto__ = cbbb
                            cltothis(a9.variablePool,changlc[cbbb.variablePool[g]].variablePool)
                            cltothis(a9,a9['variablePool'], 1)
                            cltothis(a9['zhili'], changlc[cbbb.variablePool[g]].zhili)
                            a6 = cbb_jsvmp(a9, g2, 0, a9['zhili'],arguments, huuuu)
                            return huuuu

                        }else{
                            a9 = {
                                "variablePool":{},
                                "arguments": arguments,
                                "zhili":[]
                            }
                            cltothis(a9['variablePool'],changlc[cbbb.variablePool[g]].variablePool)
                            cltothis(a9,a9['variablePool'], 1)
                            cltothis(a9['zhili'], changlc[cbbb.variablePool[g]].zhili)
                            a9.__proto__ = cbbb
                            a6 = cbb_jsvmp(a9, g2, 0, a9['zhili'],arguments, huuuu)

                        }
                        if (g2.length == 0){
                            return undefined
                        }else{
                            let h = g2.pop(a1)
                            for (;1==1;){
                                if (g2.length == 0){
                                    break
                                }else{
                                    a9 = g2.pop(a1)
                                }
                            }
                            return h

                        }
                    }
                }
                break
            case 2:
                (function (){
                    a1 = duei.length
                    for (a2 = 0; a2 < a1; a2++)
                        a9 = duei.shift(a2),argsList[a2]!=undefined ? cbbb[a9] = argsList[a2]:a3 = argsList[a2];
                })()

                break
            case 90:
                a1 = duei.pop(a3)
                a2 = duei.pop(a4)
                a3 = duei.pop(a5)

                if (a3.variablePool != undefined){
                    getproto(a3,a2,a1)
                }else{
                    a3[a2] = a1
                }
                break
            case 290:
                a1 = duei.pop(a5)
                a2 = duei.pop(a3)
                a3 = duei.pop(a1)
                // a3[a2] = a1;
                // getproto(a2,a1,a3)
                if (a3.variablePool != undefined){
                    getproto(a3,a2,a1)
                }else{
                    a3[a2] = a1
                }
                break
            case 44:
                a5 = duei.pop(a3)
                a1 = duei.push(~a5)
                break
            case 49:
                a5 = duei.pop(a3)
                a1 = duei.push(typeof a5)

                break
            case 50:
                a5 = duei.pop(a2)
                a2 = duei.push(- a5)
                break
            case 45:
                a1 = duei.pop(a2)
                a2 = duei.pop(a3)
                a3 = duei.pop(a4)
                if (a3.variablePool != undefined){
                    getproto(a3,a2,a1)
                }else{
                    a3[a2] = a1
                }
                a1 = duei.push(a3)
                break
            case 55:
                a1 = duei.pop(a3)
                a2 = duei.pop(a1)
                a3 = delete a2[a1];
                a1 = duei.push(a3)
                break
            case 56:
                a5 = duei.pop(a1)
                a2 = duei.push(void a5)
                break
            case 60:
                a5 = duei.pop(a3)
                a4 = duei.push(!a5)
                break
            case 197:

                j = duei.pop(a1)
                j2 = duei.pop(a2)
                // j2[j] = a1
                // getproto(j2,j,a1)
                if (j2.variablePool != undefined){
                    getproto(j2,j,a7)
                }else{
                    j2[j] = a1
                }
                break
            case 46:
                 (function () {
                     cbbb['for_in_xh_cbb_list'] = i
                     a1 = shuz[start++]
                     a3 = duei.pop(a5)
                     args = []
                     for (a2 = 0; a2 < a1; a2++) {
                         args.splice(0, 0, duei.pop(a6))
                     }
                     offnew = 1
                     if (a3 == RegExp) {

                         a4 = new RegExp(args[0], args[1])


                     } else {
                         a4 = new a3(...args)
                     }

                     offnew = 0
                     a1 = duei.push(a4)
                 })()

                break
            case 150:
                (function (){
                        a1   = shuz[start++]
                        a3 = duei.pop(a5)
                        args = []
                        for (a2=0; a2<a1; a2++ ){
                            args.splice(0,0,duei.pop(a6))
                        }
                        if (a3 == window.setTimeout){
                            a4 = setTimeout(...args)
                        }
                        else if (a3 == window.atob){

                            a4 =  atob(...args)}
                        else if (a3 == window.clearInterval){

                        a4 =  clearInterval(...args)}
                        else if (a3 == window.setInterval){

                            a4 =  setInterval(...args)
                        }
                        else if (a3 == window.RegExp){
                            a4 =  RegExp(...args)
                        }else if (a3 == window._fetch){

                            a4 =  _fetch(...args)
                        }else if (a3 == window.alert){

                            a4 =  alert(...args)
                    }else{
                            a4 = a3.apply(all,args)

                        }
                        a2 = duei.push(a4)
                })()



                break
            case 181:
                (function (){
                    a1 = duei.pop(a2);
                    a2 = duei.pop(a3);
                    try{
                        a1 = a2[a1]
                    }catch(e){
                        a1 = window[a1]
                    }
                    // if (a2 == window && a1==undefined){
                    //     throw new Error("")
                    // }
                    all = a2
                    a1 = duei.push(a1)

                })()

                break
            case 1810:
                a1 = duei.pop(a2);

                break
            case 1811:
                a1 = duei.pop(a2)
                a2 = duei.pop(a4)
                a1 = a2 instanceof a1;
                a7 = duei.push(a1)
                break
            case 200:
                return
            default:
                return "-90_cbb"

        }
    }
}

if (!this.window){var window = {"exports": exports,"require": require,"module":module,"__dirname":__dirname,"__filename":__filename};window.__proto__=global;}
offnew = 0
window['variablePool'] = {}
window['zhili'] = []
cltothis(window['variablePool'],changlc.awcbb_yhh_fun0.variablePool)
cltothis(window['zhili'], changlc.awcbb_yhh_fun0.zhili)
cbb_jsvmp( window, new cshduei(), 0, changlc.awcbb_yhh_fun0.zhili)
