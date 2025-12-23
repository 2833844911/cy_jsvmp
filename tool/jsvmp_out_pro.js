var baoChen = []
function cltothis(cythis, poolList, off) {
    for (let i in poolList) {
        if (off == 1) {
            cythis[i] = undefined
        } else {
            cythis[i] = poolList[i];

        }

    }
}
if (typeof window !== 'undefined') {
    window._fetch = window.fetch
}


function cbb_jsvmp(all, duei, start, shuz, argsList, ogg, op) {
    var cbb_xc = []

    function getproto(s, d, e) {
        let dt = s;
        for (; 1 == 1;) {
            if (s.hasOwnProperty(d)) {
                try {
                    s[d] = e
                } catch (e2) {
                    window[d] = e
                    return
                }

                break
            } else {
                s = s.__proto__
                if (s == undefined || s == null) {
                    window[d] = e
                    return
                }
            }
        }
    }

    if (op !== undefined) {
        var allthis
        allthis = op['allthis']
        duei = op.duei
        all = op.all
        shuz = op.shuz
        argsList = op.argsList
        var a1, a2, a3, a4, a5, a6, a7, a8, a9, j, j2, i, a10;
        a7 = op.a7
        var args = op.args
        var cbbb = op.cbbb;
    } else {
        var allthis
        if (ogg !== undefined) {
            allthis = ogg
        } else {
            allthis = all
        }
        var a1, a2, a3, a4, a5, a6, a7, a8, a9, j, j2, i, a10;
        var args = []
        var cbbb = all;
    }
    var jsq = 0, og = 0, lp = 0;

    while (!![]) {
        if (cbb_xc.length !== 0 && og == 1) {
            if (lp === 0) {
                jsq += 1
            }
            if (jsq === 10) {
                a10 = []
                a10.push(a1)
                a10.push(a2)
                a10.push(a3)
                a10.push(a4)
                a10.push(a5)
                a10.push(a6)
                a10.push(a7)
                a10.push(a8)
                a10.push(a9)
                a10.push(duei)
                a10.push(start)
                a10.push(cbbb)
                cbb_xc.splice(0, 0, a10)


                a10 = cbb_xc.pop()
                a1 = a10[0]
                a2 = a10[1]
                a3 = a10[2]
                a4 = a10[3]
                a5 = a10[4]
                a6 = a10[5]
                a7 = a10[6]
                a8 = a10[7]
                a9 = a10[8]
                duei = a10[9]
                start = a10[10]
                cbbb = a10[11]
                shuz = codeOfmyfun
                jsq = 0
            }
        }
        let s_cbb = shuz[start++];

        switch (s_cbb) {
            case 23:
                all = cbbb
                duei.push(cbbb)
                break
            case 47:
                duei.push(allthis)
                break
            case 36:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 <= a1;
                duei.push(a1)
                break
            case 37:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 >= a1;
                duei.push(a1)
                break
            case 38:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 > a1;
                duei.push(a1)
                break
            case 39:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 == a1;
                duei.push(a1)
                break
            case 48:
                a1 = shuz[start++] * 2
                a3 = []
                a4 = []
                for (a2 = 0; a2 < a1; a2++) {
                    if (a2 < a1 / 2) {
                        a3.splice(0, 0, duei.pop())
                    } else {
                        a4.splice(0, 0, duei.pop())
                    }

                }
                a1 = duei.pop()
                for (a2 = 0; a2 < a3.length; a2++) {
                    if (a4[a2] == a1) {
                        start += a3[a2]
                        break
                    }
                    else if (a4[a2] == null) {
                        start += a3[a2]
                        break
                    }
                }

                break
            case 53:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 === a1;
                duei.push(a1)
                break
            case 54:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 !== a1;
                duei.push(a1)
                break
            case 550:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 != a1;
                duei.push(a1)
                break
            case 551:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 in a1;
                duei.push(a1)
                break
            case 22:
                a1 = shuz[start++]
                a2 = duei.pop()
                a3 = duei.pop()
                a2[constantPool[a1]] = a3
                break
            case 19:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 - a1;
                duei.push(a1)
                break
            case 291:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 - a1;
                duei.push(a1)
                break
            case 20:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 + a1;
                duei.push(a1)
                break
            case 24:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 < a1;
                duei.push(a1)
                break
            case 240:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 < a1;
                duei.push(a1)
                break
            case 27:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a1 * a2;
                duei.push(a1)

                break
            case 2777:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a1 ** a2;
                duei.push(a1)

                break
            case 28:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 % a1;
                duei.push(a1)

                break
            case 29:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 ^ a1;
                duei.push(a1)

                break
            case 30:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 / a1;
                duei.push(a1)

                break
            case 194:
                debugger;
                break
            case 25:
                a1 = duei.pop()
                a2 = shuz[start++]
                if (!a1) {
                    start += a2;
                }
                ; break
            case 31:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 << a1;
                duei.push(a1)

                break
            case 32:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 | a1;
                duei.push(a1)

                break
            case 26:
                a1 = duei.pop()
                a3 = shuz[start++]
                a1[constantPool[a3]] += 1

                break
            case 190:
                a1 = shuz[start++]
                start += a1
                break
            case 192:
                a1 = duei.pop()
                a3 = shuz[start++]
                if (a1) {
                    start += a3
                }
                break
            case 33:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 >> a1;
                duei.push(a1)

                break
            case 34:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 >>> a1;
                duei.push(a1)

                break
            case 52:
                a1 = duei.pop()
                a3 = shuz[start++]
                a1[constantPool[a3]] -= 1
                break
            case 104:
                duei.push({})
                break
            case 105:
                duei.push([])
                break
            case 57:

                i = []
                a3 = shuz[start++]
                a2 = duei.pop()
                for (a1 in a2) {
                    i.push(a1)
                }
                cbbb['for_in_xh_cbb_list' + a3] = i
                break
            case 51:
                a1 = duei.pop()
                a2 = shuz[start++]
                if (!a1) {
                    start += a2;
                    duei.push(a1)
                }
                ; break
            case 252:
                a1 = duei.pop()
                a2 = shuz[start++]
                if (a1) {
                    start += a2;
                    duei.push(a1)
                }
                ; break
            case 195:
                a2 = shuz[start++]
                a3 = shuz[start++]
                a4 = shuz[start++]
                try {
                    a6 = cbb_jsvmp(a3, start, start, duei, args.length, 1, {
                        "shuz": shuz,
                        "cbbb": cbbb,
                        "allthis": allthis,
                        "argsList": argsList,
                        "args": args,
                        "duei": duei,
                        "all": all,
                        "a7": a7
                    })
                    start = a2 + start;
                    if (a6 == "-90_cbb") {
                        return a6
                    }

                } catch (e) {
                    a7 = e
                    start = a2 + start;
                    a6 = cbb_jsvmp(a1, start, start, duei, args.length, 1, {
                        "shuz": shuz,
                        "cbbb": cbbb,
                        "allthis": allthis,
                        "args": args,
                        "argsList": argsList,
                        "duei": duei,
                        "all": all,
                        "a7": a7
                    })
                    if (a6 == "-90_cbb") {
                        return a6
                    }
                } finally {
                    if (a6 == "-90_cbb") {
                        return a6
                    }
                    start = a3 + start;
                    a6 = cbb_jsvmp(a3, start, start, duei, args.length, 1, {
                        "shuz": shuz,
                        "cbbb": cbbb,
                        "allthis": allthis,
                        "argsList": argsList,
                        "args": args,
                        "duei": duei,
                        "all": all,
                        "a7": a7
                    })
                    if (a6 == "-90_cbb") {
                        return a6
                    }
                    start = start + a4
                }


                break
            case 35:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 & a1;
                duei.push(a1)

                break
            case 8:
                a1 = shuz[start++]
                a2 = shuz[start++]
                a1 = new RegExp(constantPool[a1], constantPool[a2]);
                duei.push(a1)

                break
            case 10:
                a1 = shuz[start++]
                duei.push(constantPool[a1])
                break
            case 11:
                a1 = shuz[start++]
                duei.push(a1)
                break
            case 58:
                a1 = duei.pop()
                throw a1
                break
            case 40:
                a1 = duei.pop()
                a2 = duei.pop()
                a2.push(a1);
                duei.push(a2)
                break
            case 1:
                a8 = duei.length
                for (a1 = 0; a1 < a8; a1++) {

                    a7 = duei.pop()
                    if (a7 === "cbbiyhh.online") {
                        break
                    }
                    let g = a7
                    if (changlc[cbbb.variablePool[g]].isfunmr) {
                        a9 = {
                            "variablePool": {},

                            "fg": changlc[cbbb.variablePool[g]].af
                        }
                        a9.__proto__ = cbbb
                        cltothis(a9.variablePool, changlc[cbbb.variablePool[g]].variablePool)
                        cltothis(a9, a9['variablePool'], 1)
                        cbbb[g] = a9;

                        continue
                    }
                    cbbb[g] = function () {
                        let g2 = []
                        var huuuu = this
                        if (offnew == 1) {
                            offnew = 0
                            a9 = {
                                "variablePool": {},
                                "arguments": arguments,
                                "zhili": []
                            }
                            a9.__proto__ = cbbb
                            cltothis(a9.variablePool, changlc[cbbb.variablePool[g]].variablePool)
                            cltothis(a9, a9['variablePool'], 1)
                            cltothis(a9['zhili'], changlc[cbbb.variablePool[g]].zhili)
                            a6 = cbb_jsvmp(a9, g2, 0, a9['zhili'], arguments, huuuu)
                            return huuuu;
                        } else {
                            a9 = {
                                "variablePool": {},
                                "arguments": arguments,
                                "zhili": []
                            }
                            cltothis(a9['variablePool'], changlc[cbbb.variablePool[g]].variablePool)
                            cltothis(a9, a9['variablePool'], 1)
                            cltothis(a9['zhili'], changlc[cbbb.variablePool[g]].zhili)
                            a9.__proto__ = cbbb
                            a6 = cbb_jsvmp(a9, g2, 0, a9['zhili'], arguments, huuuu)

                        }
                        if (g2.length == 0) {
                            return undefined
                        } else {
                            let h = g2.pop()
                            for (; 1 == 1;) {
                                if (g2.length == 0) {
                                    break
                                } else {
                                    g2.pop()
                                }
                            }
                            return h

                        }
                    }
                }
                break
            case 2:
                a1 = duei.length
                for (a2 = 0; a2 < a1; a2++) {
                    a3 = duei.shift()
                    if (argsList[a2] != undefined) {
                        cbbb[a3] = argsList[a2];
                    }

                }
                break
            case 90:
                a1 = duei.pop()
                a2 = duei.pop()
                a3 = duei.pop()

                if (a3.variablePool != undefined) {
                    getproto(a3, a2, a1)
                } else {
                    a3[a2] = a1
                }
                break

            case 290:
                a1 = duei.pop()
                a2 = duei.pop()
                a3 = duei.pop()

                if (a3.variablePool != undefined) {
                    getproto(a3, a2, a1)
                } else {
                    a3[a2] = a1
                }
                break
            case 292:
                a1 = duei.pop()
                a2 = duei.pop()
                a3 = duei.pop()

                if (a3.variablePool != undefined) {
                    getproto(a3, a2, a1)
                } else {
                    a3[a2] = a1
                }
                duei.push(a1)
                break
            case 44:
                a5 = duei.pop()
                duei.push(~a5)
                break
            case 49:
                a5 = duei.pop()
                duei.push(typeof a5)

                break
            case 50:
                a5 = duei.pop()
                duei.push(- a5)
                break
            case 45:
                a1 = duei.pop()
                a2 = duei.pop()
                a3 = duei.pop()

                if (a3.variablePool != undefined) {
                    getproto(a3, a2, a1)
                } else {
                    a3[a2] = a1
                }
                duei.push(a3)
                break
            case 55:
                a1 = duei.pop()
                a2 = duei.pop()
                a3 = delete a2[a1];
                duei.push(a3)
                break
            case 56:
                a5 = duei.pop()
                duei.push(void a5)
                break
            case 60:
                a5 = duei.pop()
                duei.push(!a5)
                break
            case 197:
                j = duei.pop()
                j2 = duei.pop()

                if (j2.variablePool != undefined) {
                    getproto(j2, j, a7)
                } else {
                    j2[j] = a1
                }
                break
            case 46:
                a1 = shuz[start++]
                a3 = duei.pop()
                args = []
                for (a2 = 0; a2 < a1; a2++) {
                    args.splice(0, 0, duei.pop())
                }
                offnew = 1
                if (a3 == RegExp) {
                    a4 = new RegExp(args[0], args[1])
                } else {
                    a4 = new a3(...args)
                }

                offnew = 0
                duei.push(a4)
                break
            case 150:
                a1 = shuz[start++]
                a3 = duei.pop()
                args = []
                for (a2 = 0; a2 < a1; a2++) {
                    args.splice(0, 0, duei.pop())
                }

                let found = false;
                for (let key of Object.getOwnPropertyNames(window)) {
                    if (typeof window[key] === 'function' && a3 === window[key]) {
                        a4 = window[key](...args)
                        found = true;
                        break;
                    }
                }
                if (!found) {
                    a4 = a3.apply(all, args)
                }
                duei.push(a4)
                break
            case 181:
                a1 = duei.pop();
                a2 = duei.pop();

                try {
                    a1 = a2[a1]
                } catch (e) {
                    a1 = window[a1]
                }

                all = a2
                duei.push(a1)
                break
            case 1810:
                a1 = duei.pop();

                break
            case 1811:
                a1 = duei.pop()
                a2 = duei.pop()
                a1 = a2 instanceof a1;
                duei.push(a1)
                break
            case 1812:
                a1 = {
                    "a1": shuz,
                    "a2": start,
                    "a3": duei,
                    "a4": cbbb
                }
                baoChen.push(a1)
                break
            case 1813:
                a1 = duei.pop()
                shuz = codeOfmyfun
                start = a1['fg']
                cbbb = a1
                break
            case 1814:
                if (og === 1) {
                    a10 = cbb_xc.pop()
                    if (!a10) {
                        a1 = baoChen.pop()
                        shuz = a1.a1
                        start = a1.a2 + 1
                        duei = a1.a3
                        cbbb = a1.a4
                        og = 0
                        jsq = 0
                    } else {
                        a1 = a10[0]
                        a2 = a10[1]
                        a3 = a10[2]
                        a4 = a10[3]
                        a5 = a10[4]
                        a6 = a10[5]
                        a7 = a10[6]
                        a8 = a10[7]
                        a9 = a10[8]
                        duei = a10[9]
                        start = a10[10]
                        cbbb = a10[11]
                        shuz = codeOfmyfun
                        jsq = 0
                    }
                    break
                }
                a2 = duei.pop()
                while (1) {
                    a1 = duei.pop()
                    if (a1 === "cbbiyhh_dgggg_opopop") {
                        break
                    }
                }
                break
            case 1815:
                a1 = duei.pop()
                a2 = duei.pop()
                a3 = duei.pop()
                if (a2.variablePool != undefined) {
                    getproto(a2, a1, a3)
                } else {
                    a2[a1] = a3
                }
                break
            case 1816:
                a1 = baoChen.pop()
                shuz = a1.a1
                start = a1.a2 + 1
                cbbb = a1.a4
                duei.push(a2)
                break
            case 1818:
                a1 = []
                while (1) {
                    a2 = duei.pop()
                    if (a2 === "cbb_isokk_yhh_very_p") {
                        break
                    }
                    a1.push(a2)
                }
                duei.push(a1)
                break
            case 1819:
                og = 1
                a10 = cbb_xc.pop()
                a1 = a10[0]
                a2 = a10[1]
                a3 = a10[2]
                a4 = a10[3]
                a5 = a10[4]
                a6 = a10[5]
                a7 = a10[6]
                a8 = a10[7]
                a9 = a10[8]
                duei = a10[9]
                start = a10[10]
                cbbb = a10[11]
                shuz = codeOfmyfun
                jsq = 0
                break
            case 1820:
                lp = 1
                break
            case 1821:
                lp = 0
                break
            case 1817:
                a10 = []
                a10.push(a1)
                a10.push(a2)
                a10.push(a3)
                a10.push(a4)
                a10.push(a5)
                a10.push(a6)
                a10.push(a7)
                a10.push(a8)
                a10.push(a9)
                a10.push(duei.pop())
                a10.push(duei.pop())
                a10.push(duei.pop())
                cbb_xc.push(a10)
                break
            case 200:
                return
            default:
                return "-90_cbb"

        }
    }
}

if (!this.window) { var cywindow = {"process":process, "exports": exports, "require": require, "module": module, "__dirname": __dirname, "__filename": __filename }; cywindow.__proto__ = global; window = global };
offnew = 0

cywindow['variablePool'] = {}
cywindow['zhili'] = []
cltothis(cywindow['variablePool'], changlc.awcbb_yhh_fun0.variablePool)
cltothis(cywindow['zhili'], changlc.awcbb_yhh_fun0.zhili)
cbb_jsvmp(cywindow, [], 0, changlc.awcbb_yhh_fun0.zhili)
