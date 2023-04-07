// 线程版例子
var c_f_0 = 0;
var c_f_1 = 29;
var c_f_2 = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
// “cbb_”开头的是特殊函数（特殊函数才可以异步）
function cbb_hu(c_f_3, c_f_4) {
  for (var c_f_5 = 0; c_f_5 < c_f_3.length; c_f_6 = c_f_5, ++c_f_5, c_f_6) {
    var c_f_6;
    for (var c_f_7 = 0; c_f_7 < c_f_4 % 10; c_f_8 = c_f_7, ++c_f_7, c_f_8) {
      var c_f_8;
      c_f_0 = c_f_7;
    }
    if (c_f_1 + 1 === 1) {
      c_f_1 = 29;
    }
    cbb_prgnx();
    console.log(c_f_1, c_f_3[c_f_5] + c_f_4 % c_f_1 * 3, c_f_2[c_f_1], c_f_1);
    c_f_2[c_f_1] = c_f_2[c_f_1] + c_f_3[c_f_5] + c_f_4 % c_f_1 * 3;
    cbb_prgunx();
    c_f_1 -= 1;
  }
  return 90;
}
function cbb_hu2(c_f_9, c_f_10) {
  for (var c_f_11 = 0; c_f_11 < c_f_9.length; c_f_12 = c_f_11, ++c_f_11, c_f_12) {
    var c_f_12;
    for (var c_f_13 = 0; c_f_13 < c_f_10 % 20; c_f_14 = c_f_13, ++c_f_13, c_f_14) {
      var c_f_14;
      c_f_0 = c_f_13;
    }
    if (c_f_1 + 1 === 1) {
      c_f_1 = 29;
    }
    cbb_prgnx();
    console.log(c_f_1, c_f_9[c_f_11] + c_f_10 % c_f_1, c_f_2[c_f_1], c_f_1);
    c_f_2[c_f_1] = c_f_2[c_f_1] + c_f_9[c_f_11] + c_f_10 % c_f_1;
    cbb_prgunx();
    c_f_1 -= 1;
  }
  return 90;
}
function cbb_op(c_f_15, c_f_16) {
  for (var c_f_17 = 0; c_f_17 < c_f_15.length; c_f_18 = c_f_17, ++c_f_17, c_f_18) {
    var c_f_18;
    for (var c_f_19 = 0; c_f_19 < c_f_16 % 30; c_f_20 = c_f_19, ++c_f_19, c_f_20) {
      var c_f_20;
      c_f_0 = c_f_19;
    }
    if (c_f_1 + 1 === 1) {
      c_f_1 = 29;
    }
    // 线程锁开启
    cbb_prgnx();
    console.log(29 - c_f_1, c_f_15[c_f_17] + c_f_1 + c_f_16, c_f_2[29 - c_f_1], c_f_1);
    c_f_2[29 - c_f_1] = c_f_2[29 - c_f_1] + c_f_15[c_f_17] + c_f_1 + c_f_16;
    // 线程锁关闭
    cbb_prgunx();
    c_f_1 -= 1;
  }
  return 0;
}
function c_f_21() {
  var c_f_22 = "2833844911";
  var c_f_23 = "udiaudisaoduas";
  var c_f_24 = "565767";
  var c_f_25 = c_f_22.split('');
  for (var c_f_26 = 0; c_f_26 < c_f_25.length; c_f_27 = c_f_26, ++c_f_26, c_f_27) {
    var c_f_27;
    c_f_25[c_f_26] = c_f_25[c_f_26].charCodeAt(0);
  }
  var c_f_28 = c_f_23.split('');
  for (c_f_26 = 0; c_f_26 < c_f_28.length; c_f_29 = c_f_26, ++c_f_26, c_f_29) {
    var c_f_29;
    c_f_28[c_f_26] = c_f_28[c_f_26].charCodeAt(0);
  }
  var c_f_30 = c_f_24.split('');
  for (c_f_26 = 0; c_f_26 < c_f_30.length; c_f_31 = c_f_26, ++c_f_26, c_f_31) {
    var c_f_31;
    c_f_30[c_f_26] = c_f_30[c_f_26].charCodeAt(0);
  }
  debugger;
  var c_f_35 = cbb_op(c_f_25, 30);
  console.log("dadasd", c_f_35);
  // 开始线程
  cbb_prg(cbb_op(c_f_25, 30), cbb_hu(c_f_28, 6786), cbb_hu2(c_f_30, 76));
  var c_f_33 = '';
  for (c_f_26 = 0; c_f_26 < 30; c_f_34 = c_f_26, ++c_f_26, c_f_34) {
    var c_f_34;
    c_f_33 += c_f_2[c_f_26];
  }
  console.log(c_f_2);
  var c_f_35 = {
    "zhaohao": c_f_22,
    "mima": c_f_23,
    "code": c_f_24,
    "sign": c_f_33
  };
  return c_f_35;
}
if (window) {
  window.sign = c_f_21;
} else {
  global.sign = c_f_21;
}
var c_f_36 = c_f_21();
debugger;
console.log(c_f_36);
console.log(JSON.stringify(c_f_36));