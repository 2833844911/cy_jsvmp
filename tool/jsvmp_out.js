function cltothis(cythis, poolList, off) {
  for (let i in poolList) {
    if (off == 1) {
      cythis[i] = undefined;
    } else {
      cythis[i] = poolList[i];
    }
  }
}
function cbb_jsvmp(all, duei, start, shuz, argsList, ogg, op) {
  function getproto(s, d, e) {
    let dt = s;
    for (; 1 == 1;) {
      if (s.hasOwnProperty(d)) {
        try {
          s[d] = e;
        } catch (e2) {
          this[d] = e;
          return;
        }
        break;
      } else {
        s = s.__proto__;
        if (s == undefined || s == null) {
          window[d] = e;
          return;
        }
      }
    }
  }
  if (op !== undefined) {
    var allthis;
    allthis = op['allthis'];
    duei = op.duei;
    all = op.all;
    shuz = op.shuz;
    argsList = op.argsList;
    var a1, a2, a3, a4, a5, a6, a7, a8, a9;
    a7 = op.a7;
    var args = op.args;
    var cbbb = op.cbbb;
  } else {
    var allthis;
    if (ogg !== undefined) {
      allthis = ogg;
    } else {
      allthis = all;
    }
    var a1, a2, a3, a4, a5, a6, a7, a8, a9;
    var args = [];
    var cbbb = all;
  }

  while (!![]) {
    let s_cbb = shuz[start++];
    if ([null, 551, 550, 291, 290, 252, 240, 200, 197, 195, 194, 192, 190, 181, 150, 105, 104, 90, 60, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 20, 19, 11, 10, 8, 2, 1].indexOf(s_cbb) == -1) {
      return "-90_cbb";
    } else if (s_cbb < 48) {
      if (s_cbb < 30) {
        if (s_cbb < 23) {
          if (s_cbb < 11) {
            if (s_cbb < 8) {
              if (s_cbb <= 1) {
                a8 = duei.length;
                for (a1 = 0; a1 < a8; a1++) {
                  a7 = duei.pop();
                  let g = a7;
                  all[g] = function () {
                    let g2 = [];
                    if (offnew == 1) {
                      offnew = 0;
                      a9 = {
                        "variablePool": {},
                        "arguments": arguments,
                        "zhili": []
                      };
                      a9.__proto__ = cbbb;
                      cltothis(a9.variablePool, changlc[cbbb.variablePool[g]].variablePool);
                      cltothis(a9, a9['variablePool'], 1);
                      cltothis(a9['zhili'], changlc[cbbb.variablePool[g]].zhili);
                      a6 = cbb_jsvmp(a9, g2, 0, a9['zhili'], arguments, this);
                    } else {
                      a9 = {
                        "variablePool": {},
                        "arguments": arguments,
                        "zhili": []
                      };
                      cltothis(a9['variablePool'], changlc[cbbb.variablePool[g]].variablePool);
                      cltothis(a9, a9['variablePool'], 1);
                      cltothis(a9['zhili'], changlc[cbbb.variablePool[g]].zhili);
                      a9.__proto__ = cbbb;
                      a6 = cbb_jsvmp(a9, g2, 0, a9['zhili'], arguments, this);
                    }
                    if (g2.length == 0) {
                      return undefined;
                    } else {
                      let h = g2.pop();
                      for (; 1 == 1;) {
                        if (g2.length == 0) {
                          break;
                        } else {
                          g2.pop();
                        }
                      }
                      return h;
                    }
                  };
                }
              } else {
                a1 = duei.length;
                for (a2 = 0; a2 < a1; a2++) {
                  cbbb[duei.shift()] = argsList[a2];
                }
              }
            } else if (s_cbb <= 8) {
              a1 = shuz[start++];
              a2 = shuz[start++];
              a1 = new RegExp(constantPool[a1], constantPool[a2]);
              duei.push(a1);
            } else {
              a1 = shuz[start++];
              duei.push(constantPool[a1]);
            }
          } else if (s_cbb < 20) {
            if (s_cbb <= 11) {
              a1 = shuz[start++];
              duei.push(a1);
            } else {
              a1 = duei.pop();
              a2 = duei.pop();
              a1 = a1 - a2;
              duei.push(a1);
            }
          } else if (s_cbb <= 20) {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a1 + a2;
            duei.push(a1);
          } else {
            a1 = shuz[start++];
            a2 = duei.pop();
            a3 = duei.pop();
            a2[constantPool[a1]] = a3;
          }
        } else if (s_cbb < 27) {
          if (s_cbb < 25) {
            if (s_cbb <= 23) {
              all = cbbb;
              duei.push(cbbb);
            } else {
              a1 = duei.pop();
              a2 = duei.pop();
              a1 = a1 < a2;
              duei.push(a1);
            }
          } else if (s_cbb <= 25) {
            a1 = duei.pop();
            a2 = shuz[start++];
            if (!a1) {
              start += a2;
            }
            ;
          } else {
            a1 = duei.pop();
            // a2 = duei.pop()
            a3 = shuz[start++];
            a1[constantPool[a3]] += 1;
          }
        } else if (s_cbb < 29) {
          if (s_cbb <= 27) {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a2 * a1;
            duei.push(a1);
          } else {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a1 % a2;
            duei.push(a1);
          }
        } else {
          a1 = duei.pop();
          a2 = duei.pop();
          a1 = a1 ^ a2;
          duei.push(a1);
        }
      } else if (s_cbb < 38) {
        if (s_cbb < 34) {
          if (s_cbb < 32) {
            if (s_cbb <= 30) {
              a1 = duei.pop();
              a2 = duei.pop();
              a1 = a1 / a2;
              duei.push(a1);
            } else {
              a1 = duei.pop();
              a2 = duei.pop();
              a1 = a1 << a2;
              duei.push(a1);
            }
          } else if (s_cbb <= 32) {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a1 | a2;
            duei.push(a1);
          } else {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a1 >> a2;
            duei.push(a1);
          }
        } else if (s_cbb < 36) {
          if (s_cbb <= 34) {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a1 >>> a2;
            duei.push(a1);
          } else {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a1 & a2;
            duei.push(a1);
          }
        } else if (s_cbb <= 36) {
          a1 = duei.pop();
          a2 = duei.pop();
          a1 = a1 <= a2;
          duei.push(a1);
        } else {
          a1 = duei.pop();
          a2 = duei.pop();
          a1 = a1 >= a2;
          duei.push(a1);
        }
      } else if (s_cbb < 45) {
        if (s_cbb < 40) {
          if (s_cbb <= 38) {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a1 > a2;
            duei.push(a1);
          } else {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a2 == a1;
            duei.push(a1);
          }
        } else if (s_cbb <= 40) {
          a1 = duei.pop();
          a2 = duei.pop();
          a2.push(a1);
          duei.push(a2);
        } else {
          a5 = duei.pop();
          duei.push(~a5);
        }
      } else if (s_cbb < 47) {
        if (s_cbb <= 45) {
          a1 = duei.pop();
          a2 = duei.pop();
          a3 = duei.pop();
          // a3[a2] = a1;
          // getproto(a3,a2,a1)
          if (a3.variablePool != undefined) {
            getproto(a3, a2, a1);
          } else {
            a3[a2] = a1;
          }
          duei.push(a3);
        } else {
          a1 = shuz[start++];
          a3 = duei.pop();
          args = [];
          for (a2 = 0; a2 < a1; a2++) {
            args.splice(0, 0, duei.pop());
          }
          offnew = 1;
          if (a3 == RegExp) {
            a4 = new RegExp(args[0], args[1]);
          } else {
            a4 = new a3(...args);
          }
          offnew = 0;
          duei.push(a4);
        }
      } else {
        duei.push(allthis);
      }
    } else if (s_cbb < 150) {
      if (s_cbb < 56) {
        if (s_cbb < 52) {
          if (s_cbb < 50) {
            if (s_cbb <= 48) {
              a1 = shuz[start++] * 2;
              a3 = [];
              a4 = [];
              for (a2 = 0; a2 < a1; a2++) {
                if (a2 < a1 / 2) {
                  a3.splice(0, 0, duei.pop());
                } else {
                  a4.splice(0, 0, duei.pop());
                }
              }
              a1 = duei.pop();
              for (a2 = 0; a2 < a3.length; a2++) {
                if (a4[a2] == a1) {
                  start += a3[a2];
                  break;
                } else if (a4[a2] == null) {
                  start += a3[a2];
                  break;
                }
              }
            } else {
              a5 = duei.pop();
              duei.push(typeof a5);
            }
          } else if (s_cbb <= 50) {
            a5 = duei.pop();
            duei.push(-a5);
          } else {
            a1 = duei.pop();
            a2 = shuz[start++];
            if (!a1) {
              start += a2;
              duei.push(a1);
            }
            ;
          }
        } else if (s_cbb < 54) {
          if (s_cbb <= 52) {
            a1 = duei.pop();
            // a2 = duei.pop()
            a3 = shuz[start++];
            a1[constantPool[a3]] -= 1;
          } else {
            a1 = duei.pop();
            a2 = duei.pop();
            a1 = a2 === a1;
            duei.push(a1);
          }
        } else if (s_cbb <= 54) {
          a1 = duei.pop();
          a2 = duei.pop();
          a1 = a2 !== a1;
          duei.push(a1);
        } else {
          a1 = duei.pop();
          a2 = duei.pop();
          a3 = delete a2[a1];
          duei.push(a3);
        }
      } else if (s_cbb < 90) {
        if (s_cbb < 58) {
          if (s_cbb <= 56) {
            a5 = duei.pop();
            duei.push(void a5);
          } else {
            let i = [];
            a2 = duei.pop();
            for (a1 in a2) {
              i.push(a1);
            }
            cbbb['for_in_xh_cbb_list'] = i;
          }
        } else if (s_cbb <= 58) {
          a1 = duei.pop();
          throw a1;
        } else {
          a5 = duei.pop();
          duei.push(!a5);
        }
      } else if (s_cbb < 105) {
        if (s_cbb <= 90) {
          a1 = duei.pop();
          a2 = duei.pop();
          a3 = duei.pop();
          // a3[a2] = a1;
          // getproto(a3,a2,a1)
          if (a3.variablePool != undefined) {
            getproto(a3, a2, a1);
          } else {
            a3[a2] = a1;
          }
        } else {
          duei.push({});
        }
      } else {
        duei.push([]);
      }
    } else if (s_cbb < 200) {
      if (s_cbb < 194) {
        if (s_cbb < 190) {
          if (s_cbb <= 150) {
            a1 = shuz[start++];
            a3 = duei.pop();
            args = [];
            for (a2 = 0; a2 < a1; a2++) {
              args.splice(0, 0, duei.pop());
            }
            if (a3 == window.setTimeout) {
              a4 = setTimeout(args[0]);
            } else if (a3 == window.atob) {
              a4 = atob(...args);
            } else if (a3 == window.RegExp) {
              a4 = RegExp(...args);
            } else {
              a4 = a3.apply(all, args);
            }
            duei.push(a4);
          } else {
            a1 = duei.pop();
            a2 = duei.pop();
            try {
              a1 = a2[a1];
            } catch (e) {
              a1 = window[a1];
            }
            all = a2;
            duei.push(a1);
          }
        } else if (s_cbb <= 190) {
          a1 = shuz[start++];
          start += a1;
        } else {
          a1 = duei.pop();
          a3 = shuz[start++];
          if (a1) {
            start += a3;
          }
        }
      } else if (s_cbb < 197) {
        if (s_cbb <= 194) {
          debugger;
        } else {
          a2 = shuz[start++];
          a3 = shuz[start++];
          a4 = shuz[start++];
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
            });
            start = a2 + start;
            if (a6 == "-90_cbb") {
              return a6;
            }
          } catch (e) {
            a7 = e;
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
            });
            if (a6 == "-90_cbb") {
              return a6;
            }
          } finally {
            if (a6 == "-90_cbb") {
              return a6;
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
            });
            if (a6 == "-90_cbb") {
              return a6;
            }
            start = start + a4;
          }
        }
      } else {
        let j = duei.pop();
        let j2 = duei.pop();
        // j2[j] = a1
        // getproto(j2,j,a1)
        if (j2.variablePool != undefined) {
          getproto(j2, j, a7);
        } else {
          j2[j] = a1;
        }
      }
    } else if (s_cbb < 291) {
      if (s_cbb < 252) {
        if (s_cbb <= 200) {
          return;
        } else {
          a1 = duei.pop();
          a2 = duei.pop();
          a1 = a2 < a1;
          duei.push(a1);
        }
      } else if (s_cbb <= 252) {
        a1 = duei.pop();
        a2 = shuz[start++];
        if (a1) {
          start += a2;
          duei.push(a1);
        }
        ;
      } else {
        a1 = duei.pop();
        a2 = duei.pop();
        a3 = duei.pop();
        // a3[a2] = a1;
        // getproto(a2,a1,a3)
        if (a2.variablePool != undefined) {
          getproto(a3, a2, a1);
        } else {
          a3[a2] = a1;
        }
      }
    } else if (s_cbb < 551) {
      if (s_cbb <= 291) {
        a1 = duei.pop();
        a2 = duei.pop();
        a1 = a2 - a1;
        duei.push(a1);
      } else {
        a1 = duei.pop();
        a2 = duei.pop();
        a1 = a2 != a1;
        duei.push(a1);
      }
    } else {
      a1 = duei.pop();
      a2 = duei.pop();
      a1 = a1 in a2;
      duei.push(a1);
    }
  }
}
if (!this.window) {

  global._fetch = global.fetch;
}else{
  window._fetch = window.fetch;
}
var ruc = this;
this.offnew = 0;
ruc['variablePool'] = {};
ruc['zhili'] = [];
cltothis(ruc['variablePool'], changlc.awcbb_yhh_fun0.variablePool);
cltothis(ruc['zhili'], changlc.awcbb_yhh_fun0.zhili);
cbb_jsvmp(ruc, [], 0, changlc.awcbb_yhh_fun0.zhili);
