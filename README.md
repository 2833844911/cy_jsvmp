JSVMP
```
npm install @babel/parser

npm install -g traceur
```



使用前要把js转es5 教程链接

https://blog.csdn.net/qq_46013295/article/details/128481895

main.js 正常调试版

jiamian.js 加密版  // 重新打乱指令集

jiajianbian.js 快速加密版


main_pro 升级版，带线程 // 防止反编译算法还原

下面例子中的特殊函数是走的另一vm这个比正常函数走的vm要难

```javascript

// 线程版例子
var a = 0
var ad = 29

var f = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
// “cbb_”开头的是特殊函数（特殊函数才可以线程）
function cbb_hu(e,b){
  for (var i =0; i < e.length; i++){
      for (var u=0;u < b % 10; u++){
          a = u;
      }
      if (ad + 1 === 1){
        ad = 29
      }
      cbb_prgnx()
      console.log(ad, e[i] +  (b % ad) *3, f[ad], ad)

      f[ad] =f[ad] +  e[i] +  (b % ad) *3
      cbb_prgunx()
      ad -= 1
  }
  return 90
}

function cbb_hu2(e,b){
  for (var i =0; i < e.length; i++){

      for (var u=0;u < b % 20; u++){
          a = u;
      }

      if (ad + 1 === 1){
        ad = 29
      }
      cbb_prgnx()
      console.log(ad, e[i] +  b % ad, f[ad], ad)

      f[ad] = f[ad] + e[i] +  b % ad
      cbb_prgunx()
      ad -= 1
  }
  return 90
}
function cbb_op(e,b){
  for (var i =0; i < e.length; i++){
      for (var u=0;u < b % 30; u++){
          a = u;
      }
      if (ad + 1 === 1){
        ad = 29
      }
      // 线程锁开启
      cbb_prgnx()
      console.log(29-ad, e[i] + ad + b, f[29 - ad], ad)
      f[29 - ad] = f[29 - ad] + e[i] + ad + b
      // 线程锁关闭
      cbb_prgunx()
      ad -= 1
  }
  return 0
}

// 没有带cbb_ 属于正常函数
function sign(){
  var mm_ = "2833844911"
  var mm2_ = "udiaudisaoduas"
  var code_ = "565767"
  var mm = mm_.split('')
  for (var i =0; i< mm.length; i++){
    mm[i] = mm[i].charCodeAt(0)
  }
  var mm2 = mm2_.split('')
  for (i =0; i< mm2.length; i++){
    mm2[i] = mm2[i].charCodeAt(0)
  }
  var code = code_.split('')
  for (i =0; i< code.length; i++){
    code[i] = code[i].charCodeAt(0)
  }
    debugger
    var s = cbb_op(mm, 30);
    console.log("dadasd",s)
    // 开始线程
  cbb_prg(cbb_op(mm, 30), cbb_hu(mm2, 6786), cbb_hu2(code, 76))
  var dt = ''
  for (i = 0 ; i<30; i++){

    dt += f[i]
  }
    console.log(f)
  var s = {"zhaohao": mm_,"mima":mm2_,"code":code_,"sign":dt}

  return s
}
if (window){
    window.sign = sign;

}else {
    global.sign = sign;
}
var tw = sign()
debugger
console.log(tw)
console.log(JSON.stringify(tw))
```

压缩代码

uglifyjs out.js --mangle --output out2.js

uglifyjs out.js --compress --mangle --output out3.js


### 作者： 陈不不
### 邮箱：2833844911@qq.com
已经开设反编译jsvmp课程了哦，需要报名的可以咨询wx: Chankipen
