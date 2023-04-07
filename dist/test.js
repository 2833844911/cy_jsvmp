function df(undefined) {
  'use strict';
  var add32 = function(a, b) {
    return (a + b) & 0xFFFFFFFF;
  },
      hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  function cmn(q, a, b, x, s, t) {
    a = add32(add32(a, q), add32(x, t));
    return add32((a << s) | (a >>> (32 - s)), b);
  }
  function md5cycle(x, k) {
    var a = x[0],
        b = x[1],
        c = x[2],
        d = x[3];
    a += (b & c | ~b & d) + k[0] - 680876936 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[1] - 389564586 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[2] + 606105819 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[4] - 176418897 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[7] - 45705983 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[10] - 42063 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
    a = (a << 7 | a >>> 25) + b | 0;
    d += (a & b | ~a & c) + k[13] - 40341101 | 0;
    d = (d << 12 | d >>> 20) + a | 0;
    c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
    c = (c << 17 | c >>> 15) + d | 0;
    b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
    b = (b << 22 | b >>> 10) + c | 0;
    a += (b & d | c & ~d) + k[1] - 165796510 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[11] + 643717713 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[0] - 373897302 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[5] - 701558691 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[10] + 38016083 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[15] - 660478335 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[4] - 405537848 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[9] + 568446438 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[3] - 187363961 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
    a = (a << 5 | a >>> 27) + b | 0;
    d += (a & c | b & ~c) + k[2] - 51403784 | 0;
    d = (d << 9 | d >>> 23) + a | 0;
    c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
    c = (c << 14 | c >>> 18) + d | 0;
    b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
    b = (b << 20 | b >>> 12) + c | 0;
    a += (b ^ c ^ d) + k[5] - 378558 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[14] - 35309556 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[7] - 155497632 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[13] + 681279174 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[0] - 358537222 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[3] - 722521979 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[6] + 76029189 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (b ^ c ^ d) + k[9] - 640364487 | 0;
    a = (a << 4 | a >>> 28) + b | 0;
    d += (a ^ b ^ c) + k[12] - 421815835 | 0;
    d = (d << 11 | d >>> 21) + a | 0;
    c += (d ^ a ^ b) + k[15] + 530742520 | 0;
    c = (c << 16 | c >>> 16) + d | 0;
    b += (c ^ d ^ a) + k[2] - 995338651 | 0;
    b = (b << 23 | b >>> 9) + c | 0;
    a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
    a = (a << 6 | a >>> 26) + b | 0;
    d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
    d = (d << 10 | d >>> 22) + a | 0;
    c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
    c = (c << 15 | c >>> 17) + d | 0;
    b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
    b = (b << 21 | b >>> 11) + c | 0;
    x[0] = a + x[0] | 0;
    x[1] = b + x[1] | 0;
    x[2] = c + x[2] | 0;
    x[3] = d + x[3] | 0;
  }
  function md5blk(s) {
    var md5blks = [],
        i;
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
    }
    return md5blks;
  }
  function md5blk_array(a) {
    var md5blks = [],
        i;
    for (i = 0; i < 64; i += 4) {
      md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
    }
    return md5blks;
  }
  function md51(s) {
    var n = s.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk(s.substring(i - 64, i)));
    }
    s = s.substring(i - 64);
    length = s.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
    }
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }
  function md51_array(a) {
    var n = a.length,
        state = [1732584193, -271733879, -1732584194, 271733878],
        i,
        length,
        tail,
        tmp,
        lo,
        hi;
    for (i = 64; i <= n; i += 64) {
      md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
    }
    a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);
    length = a.length;
    tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= a[i] << ((i % 4) << 3);
    }
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(state, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }
    tmp = n * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(state, tail);
    return state;
  }
  function rhex(n) {
    var s = '',
        j;
    for (j = 0; j < 4; j += 1) {
      s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
    }
    return s;
  }
  function hex(x) {
    var i;
    for (i = 0; i < x.length; i += 1) {
      x[i] = rhex(x[i]);
    }
    return x.join('');
  }
  if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
    add32 = function(x, y) {
      var lsw = (x & 0xFFFF) + (y & 0xFFFF),
          msw = (x >> 16) + (y >> 16) + (lsw >> 16);
      return (msw << 16) | (lsw & 0xFFFF);
    };
  }
  if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
    (function() {
      function clamp(val, length) {
        val = (val | 0) || 0;
        if (val < 0) {
          return Math.max(val + length, 0);
        }
        return Math.min(val, length);
      }
      ArrayBuffer.prototype.slice = function(from, to) {
        var length = this.byteLength,
            begin = clamp(from, length),
            end = length,
            num,
            target,
            targetArray,
            sourceArray;
        if (to !== undefined) {
          end = clamp(to, length);
        }
        if (begin > end) {
          return new ArrayBuffer(0);
        }
        num = end - begin;
        target = new ArrayBuffer(num);
        targetArray = new Uint8Array(target);
        sourceArray = new Uint8Array(this, begin, num);
        targetArray.set(sourceArray);
        return target;
      };
    })();
  }
  function toUtf8(str) {
    if (/[\u0080-\uFFFF]/.test(str)) {
      str = unescape(encodeURIComponent(str));
    }
    return str;
  }
  function utf8Str2ArrayBuffer(str, returnUInt8Array) {
    var length = str.length,
        buff = new ArrayBuffer(length),
        arr = new Uint8Array(buff),
        i;
    for (i = 0; i < length; i += 1) {
      arr[i] = str.charCodeAt(i);
    }
    return returnUInt8Array ? arr : buff;
  }
  function arrayBuffer2Utf8Str(buff) {
    return String.fromCharCode.apply(null, new Uint8Array(buff));
  }
  function concatenateArrayBuffers(first, second, returnUInt8Array) {
    var result = new Uint8Array(first.byteLength + second.byteLength);
    result.set(new Uint8Array(first));
    result.set(new Uint8Array(second), first.byteLength);
    return returnUInt8Array ? result : result.buffer;
  }
  function hexToBinaryString(hex) {
    var bytes = [],
        length = hex.length,
        x;
    for (x = 0; x < length - 1; x += 2) {
      bytes.push(parseInt(hex.substr(x, 2), 16));
    }
    return String.fromCharCode.apply(String, bytes);
  }
  function SparkMD5() {
    this.reset();
  }
  SparkMD5.prototype.append = function(str) {
    this.appendBinary(toUtf8(str));
    return this;
  };
  SparkMD5.prototype.appendBinary = function(contents) {
    this._buff += contents;
    this._length += contents.length;
    var length = this._buff.length,
        i;
    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
    }
    this._buff = this._buff.substring(i - 64);
    return this;
  };
  SparkMD5.prototype.end = function(raw) {
    var buff = this._buff,
        length = buff.length,
        i,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ret;
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
    }
    this._finish(tail, length);
    ret = hex(this._hash);
    if (raw) {
      ret = hexToBinaryString(ret);
    }
    this.reset();
    return ret;
  };
  SparkMD5.prototype.reset = function() {
    this._buff = '';
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  SparkMD5.prototype.getState = function() {
    return {
      buff: this._buff,
      length: this._length,
      hash: this._hash
    };
  };
  SparkMD5.prototype.setState = function(state) {
    this._buff = state.buff;
    this._length = state.length;
    this._hash = state.hash;
    return this;
  };
  SparkMD5.prototype.destroy = function() {
    delete this._hash;
    delete this._buff;
    delete this._length;
  };
  SparkMD5.prototype._finish = function(tail, length) {
    var i = length,
        tmp,
        lo,
        hi;
    tail[i >> 2] |= 0x80 << ((i % 4) << 3);
    if (i > 55) {
      md5cycle(this._hash, tail);
      for (i = 0; i < 16; i += 1) {
        tail[i] = 0;
      }
    }
    tmp = this._length * 8;
    tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
    lo = parseInt(tmp[2], 16);
    hi = parseInt(tmp[1], 16) || 0;
    tail[14] = lo;
    tail[15] = hi;
    md5cycle(this._hash, tail);
  };
  SparkMD5.hash = function(str, raw) {
    return SparkMD5.hashBinary(toUtf8(str), raw);
  };
  SparkMD5.hashBinary = function(content, raw) {
    var hash = md51(content),
        ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  };
  SparkMD5.ArrayBuffer = function() {
    this.reset();
  };
  SparkMD5.ArrayBuffer.prototype.append = function(arr) {
    var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
        length = buff.length,
        i;
    this._length += arr.byteLength;
    for (i = 64; i <= length; i += 64) {
      md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
    }
    this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);
    return this;
  };
  SparkMD5.ArrayBuffer.prototype.end = function(raw) {
    var buff = this._buff,
        length = buff.length,
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        i,
        ret;
    for (i = 0; i < length; i += 1) {
      tail[i >> 2] |= buff[i] << ((i % 4) << 3);
    }
    this._finish(tail, length);
    ret = hex(this._hash);
    if (raw) {
      ret = hexToBinaryString(ret);
    }
    this.reset();
    return ret;
  };
  SparkMD5.ArrayBuffer.prototype.reset = function() {
    this._buff = new Uint8Array(0);
    this._length = 0;
    this._hash = [1732584193, -271733879, -1732584194, 271733878];
    return this;
  };
  SparkMD5.ArrayBuffer.prototype.getState = function() {
    var state = SparkMD5.prototype.getState.call(this);
    state.buff = arrayBuffer2Utf8Str(state.buff);
    return state;
  };
  SparkMD5.ArrayBuffer.prototype.setState = function(state) {
    state.buff = utf8Str2ArrayBuffer(state.buff, true);
    return SparkMD5.prototype.setState.call(this, state);
  };
  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
  SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
  SparkMD5.ArrayBuffer.hash = function(arr, raw) {
    var hash = md51_array(new Uint8Array(arr)),
        ret = hex(hash);
    return raw ? hexToBinaryString(ret) : ret;
  };
  return SparkMD5;
}
var tttttcbbbbbt = ["0", "window", "self", "document", "name", "location", "customElements", "history", "locationbar", "menubar", "personalbar", "scrollbars", "statusbar", "toolbar", "status", "closed", "frames", "length", "top", "opener", "parent", "frameElement", "navigator", "origin", "external", "screen", "innerWidth", "innerHeight", "scrollX", "pageXOffset", "scrollY", "pageYOffset", "visualViewport", "screenX", "screenY", "outerWidth", "outerHeight", "devicePixelRatio", "clientInformation", "screenLeft", "screenTop", "styleMedia", "onsearch", "isSecureContext", "trustedTypes", "performance", "onappinstalled", "onbeforeinstallprompt", "crypto", "indexedDB", "sessionStorage", "localStorage", "onbeforexrselect", "onabort", "onbeforeinput", "onblur", "oncancel", "oncanplay", "oncanplaythrough", "onchange", "onclick", "onclose", "oncontextlost", "oncontextmenu", "oncontextrestored", "oncuechange", "ondblclick", "ondrag", "ondragend", "ondragenter", "ondragleave", "ondragover", "ondragstart", "ondrop", "ondurationchange", "onemptied", "onended", "onerror", "onfocus", "onformdata", "oninput", "oninvalid", "onkeydown", "onkeypress", "onkeyup", "onload", "onloadeddata", "onloadedmetadata", "onloadstart", "onmousedown", "onmouseenter", "onmouseleave", "onmousemove", "onmouseout", "onmouseover", "onmouseup", "onmousewheel", "onpause", "onplay", "onplaying", "onprogress", "onratechange", "onreset", "onresize", "onscroll", "onsecuritypolicyviolation", "onseeked", "onseeking", "onselect", "onslotchange", "onstalled", "onsubmit", "onsuspend", "ontimeupdate", "ontoggle", "onvolumechange", "onwaiting", "onwebkitanimationend", "onwebkitanimationiteration", "onwebkitanimationstart", "onwebkittransitionend", "onwheel", "onauxclick", "ongotpointercapture", "onlostpointercapture", "onpointerdown", "onpointermove", "onpointerrawupdate", "onpointerup", "onpointercancel", "onpointerover", "onpointerout", "onpointerenter", "onpointerleave", "onselectstart", "onselectionchange", "onanimationend", "onanimationiteration", "onanimationstart", "ontransitionrun", "ontransitionstart", "ontransitionend", "ontransitioncancel", "onafterprint", "onbeforeprint", "onbeforeunload", "onhashchange", "onlanguagechange", "onmessage", "onmessageerror", "onoffline", "ononline", "onpagehide", "onpageshow", "onpopstate", "onrejectionhandled", "onstorage", "onunhandledrejection", "onunload", "crossOriginIsolated", "scheduler", "cbbopen", "alert", "atob", "blur", "btoa", "cancelAnimationFrame", "cancelIdleCallback", "captureEvents", "clearInterval", "clearTimeout", "close", "confirm", "createImageBitmap", "fetch", "find", "focus", "getComputedStyle", "getSelection", "matchMedia", "moveBy", "moveTo", "open", "postMessage", "print", "prompt", "queueMicrotask", "releaseEvents", "reportError", "requestAnimationFrame", "requestIdleCallback", "resizeBy", "resizeTo", "scroll", "scrollBy", "scrollTo", "setInterval", "setTimeout", "stop", "structuredClone", "webkitCancelAnimationFrame", "webkitRequestAnimationFrame", "chrome", "caches", "cookieStore", "ondevicemotion", "ondeviceorientation", "ondeviceorientationabsolute", "launchQueue", "onbeforematch", "onpopuphide", "onpopupshow", "getScreenDetails", "queryLocalFonts", "showDirectoryPicker", "showOpenFilePicker", "showSaveFilePicker", "originAgentCluster", "navigation", "webkitStorageInfo", "speechSynthesis", "oncontentvisibilityautostatechanged", "openDatabase", "webkitRequestFileSystem", "webkitResolveLocalFileSystemURL", "JSCompiler_renameProperty", "ShadyCSS", "cr", "loadTimeData"];
function encodeUTF8(s) {
  var i,
      r = [],
      c,
      x;
  for (i = 0; i < s.length; i++)
    if ((c = s.charCodeAt(i)) < 0x80)
      r.push(c);
    else if (c < 0x800)
      r.push(0xC0 + (c >> 6 & 0x1F), 0x80 + (c & 0x3F));
    else {
      if ((x = c ^ 0xD800) >> 10 == 0)
        c = (x << 10) + (s.charCodeAt(++i) ^ 0xDC00) + 0x10000, r.push(0xF0 + (c >> 18 & 0x7), 0x80 + (c >> 12 & 0x3F));
      else
        r.push(0xE0 + (c >> 12 & 0xF));
      r.push(0x80 + (c >> 6 & 0x3F), 0x80 + (c & 0x3F));
    }
  ;
  return r;
}
function sha1(s) {
  var data = new Uint8Array(encodeUTF8(s));
  var i,
      j,
      t;
  var l = ((data.length + 8) >>> 6 << 4) + 16,
      s = new Uint8Array(l << 2);
  s.set(new Uint8Array(data.buffer)), s = new Uint32Array(s.buffer);
  for (t = new DataView(s.buffer), i = 0; i < l; i++)
    s[i] = t.getUint32(i << 2);
  s[data.length >> 2] |= 0x80 << (24 - (data.length & 3) * 8);
  s[l - 1] = data.length << 3;
  var w = [],
      f = [function() {
        return m[1] & m[2] | ~m[1] & m[3];
      }, function() {
        return m[1] ^ m[2] ^ m[3];
      }, function() {
        return m[1] & m[2] | m[1] & m[3] | m[2] & m[3];
      }, function() {
        return m[1] ^ m[2] ^ m[3];
      }],
      rol = function(n, c) {
        return n << c | n >>> (32 - c);
      },
      k = [1518500250, 1859775393, -1894007588, -899497514],
      m = [1732584193, -271733879, null, null, -1009589776];
  m[2] = ~m[0], m[3] = ~m[1];
  for (i = 0; i < s.length; i += 16) {
    var o = m.slice(0);
    for (j = 0; j < 80; j++)
      w[j] = j < 16 ? s[i + j] : rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1), t = rol(m[0], 5) + f[j / 20 | 0]() + m[4] + w[j] + k[j / 20 | 0] | 0, m[1] = rol(m[1], 30), m.pop(), m.unshift(t);
    for (j = 0; j < 5; j++)
      m[j] = m[j] + o[j] | 0;
  }
  ;
  t = new DataView(new Uint32Array(m).buffer);
  for (var i = 0; i < 5; i++)
    m[i] = t.getUint32(i << 2);
  var hex = Array.prototype.map.call(new Uint8Array(new Uint32Array(m).buffer), function(e) {
    return (e < 16 ? "0" : "") + e.toString(16);
  }).join("");
  return hex;
}
var CryptoJS = CryptoJS || (function(Math, undefined) {
  var C = {};
  var C_lib = C.lib = {};
  var Base = C_lib.Base = (function() {
    function F() {}
    ;
    return {
      extend: function(overrides) {
        F.prototype = this;
        var subtype = new F();
        if (overrides) {
          subtype.mixIn(overrides);
        }
        if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
          subtype.init = function() {
            subtype.$super.init.apply(this, arguments);
          };
        }
        subtype.init.prototype = subtype;
        subtype.$super = this;
        return subtype;
      },
      create: function() {
        var instance = this.extend();
        instance.init.apply(instance, arguments);
        return instance;
      },
      init: function() {},
      mixIn: function(properties) {
        var propertyName;
        for (propertyName in properties) {
          if (properties.hasOwnProperty(propertyName)) {
            this[propertyName] = properties[propertyName];
          }
        }
        if (properties.hasOwnProperty('toString')) {
          this.toString = properties.toString;
        }
      },
      clone: function() {
        return this.init.prototype.extend(this);
      }
    };
  }());
  var WordArray = C_lib.WordArray = Base.extend({
    init: function(words, sigBytes) {
      words = this.words = words || [];
      if (sigBytes != undefined) {
        this.sigBytes = sigBytes;
      } else {
        this.sigBytes = words.length * 4;
      }
    },
    toString: function(encoder) {
      return (encoder || Hex).stringify(this);
    },
    concat: function(wordArray) {
      var thisWords = this.words;
      var thatWords = wordArray.words;
      var thisSigBytes = this.sigBytes;
      var thatSigBytes = wordArray.sigBytes;
      this.clamp();
      if (thisSigBytes % 4) {
        for (var i = 0; i < thatSigBytes; i++) {
          var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
          thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
        }
      } else if (thatWords.length > 0xffff) {
        for (var i = 0; i < thatSigBytes; i += 4) {
          thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
        }
      } else {
        thisWords.push.apply(thisWords, thatWords);
      }
      this.sigBytes += thatSigBytes;
      return this;
    },
    clamp: function() {
      var words = this.words;
      var sigBytes = this.sigBytes;
      words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
      words.length = Math.ceil(sigBytes / 4);
    },
    clone: function() {
      var clone = Base.clone.call(this);
      clone.words = this.words.slice(0);
      return clone;
    },
    random: function(nBytes) {
      var words = [];
      var r = (function(m_w) {
        var m_w = m_w;
        var m_z = 0x3ade68b1;
        var mask = 0xffffffff;
        return function() {
          m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
          m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
          var result = ((m_z << 0x10) + m_w) & mask;
          result /= 0x100000000;
          result += 0.5;
          return result * (Math.random() > .5 ? 1 : -1);
        };
      });
      for (var i = 0,
          rcache = void 0; i < nBytes; i += 4) {
        var _r = r((rcache || Math.random()) * 0x100000000);
        rcache = _r() * 0x3ade67b7;
        words.push((_r() * 0x100000000) | 0);
      }
      return new WordArray.init(words, nBytes);
    }
  });
  var C_enc = C.enc = {};
  var Hex = C_enc.Hex = {
    stringify: function(wordArray) {
      var words = wordArray.words;
      var sigBytes = wordArray.sigBytes;
      var hexChars = [];
      for (var i = 0; i < sigBytes; i++) {
        var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        hexChars.push((bite >>> 4).toString(16));
        hexChars.push((bite & 0x0f).toString(16));
      }
      return hexChars.join('');
    },
    parse: function(hexStr) {
      var hexStrLength = hexStr.length;
      var words = [];
      for (var i = 0; i < hexStrLength; i += 2) {
        words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
      }
      return new WordArray.init(words, hexStrLength / 2);
    }
  };
  var Latin1 = C_enc.Latin1 = {
    stringify: function(wordArray) {
      var words = wordArray.words;
      var sigBytes = wordArray.sigBytes;
      var latin1Chars = [];
      for (var i = 0; i < sigBytes; i++) {
        var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        latin1Chars.push(String.fromCharCode(bite));
      }
      return latin1Chars.join('');
    },
    parse: function(latin1Str) {
      var latin1StrLength = latin1Str.length;
      var words = [];
      for (var i = 0; i < latin1StrLength; i++) {
        words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
      }
      return new WordArray.init(words, latin1StrLength);
    }
  };
  var Utf8 = C_enc.Utf8 = {
    stringify: function(wordArray) {
      try {
        return decodeURIComponent(escape(Latin1.stringify(wordArray)));
      } catch (e) {
        throw new Error('Malformed UTF-8 data');
      }
    },
    parse: function(utf8Str) {
      return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
    }
  };
  var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
    reset: function() {
      this._data = new WordArray.init();
      this._nDataBytes = 0;
    },
    _append: function(data) {
      if (typeof data == 'string') {
        data = Utf8.parse(data);
      }
      this._data.concat(data);
      this._nDataBytes += data.sigBytes;
    },
    _process: function(doFlush) {
      var data = this._data;
      var dataWords = data.words;
      var dataSigBytes = data.sigBytes;
      var blockSize = this.blockSize;
      var blockSizeBytes = blockSize * 4;
      var nBlocksReady = dataSigBytes / blockSizeBytes;
      if (doFlush) {
        nBlocksReady = Math.ceil(nBlocksReady);
      } else {
        nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
      }
      var nWordsReady = nBlocksReady * blockSize;
      var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);
      if (nWordsReady) {
        for (var offset = 0; offset < nWordsReady; offset += blockSize) {
          this._doProcessBlock(dataWords, offset);
        }
        var processedWords = dataWords.splice(0, nWordsReady);
        data.sigBytes -= nBytesReady;
      }
      return new WordArray.init(processedWords, nBytesReady);
    },
    clone: function() {
      var clone = Base.clone.call(this);
      clone._data = this._data.clone();
      return clone;
    },
    _minBufferSize: 0
  });
  var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
    cfg: Base.extend(),
    init: function(cfg) {
      this.cfg = this.cfg.extend(cfg);
      this.reset();
    },
    reset: function() {
      BufferedBlockAlgorithm.reset.call(this);
      this._doReset();
    },
    update: function(messageUpdate) {
      this._append(messageUpdate);
      this._process();
      return this;
    },
    finalize: function(messageUpdate) {
      if (messageUpdate) {
        this._append(messageUpdate);
      }
      var hash = this._doFinalize();
      return hash;
    },
    blockSize: 512 / 32,
    _createHelper: function(hasher) {
      return function(message, cfg) {
        return new hasher.init(cfg).finalize(message);
      };
    },
    _createHmacHelper: function(hasher) {
      return function(message, key) {
        return new C_algo.HMAC.init(hasher, key).finalize(message);
      };
    }
  });
  var C_algo = C.algo = {};
  return C;
}(Math));
(function() {
  var C = CryptoJS;
  var C_lib = C.lib;
  var WordArray = C_lib.WordArray;
  var C_enc = C.enc;
  var Base64 = C_enc.Base64 = {
    stringify: function(wordArray) {
      var words = wordArray.words;
      var sigBytes = wordArray.sigBytes;
      var map = this._map;
      wordArray.clamp();
      var base64Chars = [];
      for (var i = 0; i < sigBytes; i += 3) {
        var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
        var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
        var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;
        var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
        for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
          base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
        }
      }
      var paddingChar = map.charAt(64);
      if (paddingChar) {
        while (base64Chars.length % 4) {
          base64Chars.push(paddingChar);
        }
      }
      return base64Chars.join('');
    },
    parse: function(base64Str) {
      var base64StrLength = base64Str.length;
      var map = this._map;
      var reverseMap = this._reverseMap;
      if (!reverseMap) {
        reverseMap = this._reverseMap = [];
        for (var j = 0; j < map.length; j++) {
          reverseMap[map.charCodeAt(j)] = j;
        }
      }
      var paddingChar = map.charAt(64);
      if (paddingChar) {
        var paddingIndex = base64Str.indexOf(paddingChar);
        if (paddingIndex !== -1) {
          base64StrLength = paddingIndex;
        }
      }
      return parseLoop(base64Str, base64StrLength, reverseMap);
    },
    _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  };
  function parseLoop(base64Str, base64StrLength, reverseMap) {
    var words = [];
    var nBytes = 0;
    for (var i = 0; i < base64StrLength; i++) {
      if (i % 4) {
        var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
        var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
        words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
        nBytes++;
      }
    }
    return WordArray.create(words, nBytes);
  }
}());
(function(Math) {
  var C = CryptoJS;
  var C_lib = C.lib;
  var WordArray = C_lib.WordArray;
  var Hasher = C_lib.Hasher;
  var C_algo = C.algo;
  var T = [];
  (function() {
    for (var i = 0; i < 64; i++) {
      T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
    }
  }());
  var MD5 = C_algo.MD5 = Hasher.extend({
    _doReset: function() {
      this._hash = new WordArray.init([0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476]);
    },
    _doProcessBlock: function(M, offset) {
      for (var i = 0; i < 16; i++) {
        var offset_i = offset + i;
        var M_offset_i = M[offset_i];
        M[offset_i] = ((((M_offset_i << 8) | (M_offset_i >>> 24)) & 0x00ff00ff) | (((M_offset_i << 24) | (M_offset_i >>> 8)) & 0xff00ff00));
      }
      var H = this._hash.words;
      var M_offset_0 = M[offset + 0];
      var M_offset_1 = M[offset + 1];
      var M_offset_2 = M[offset + 2];
      var M_offset_3 = M[offset + 3];
      var M_offset_4 = M[offset + 4];
      var M_offset_5 = M[offset + 5];
      var M_offset_6 = M[offset + 6];
      var M_offset_7 = M[offset + 7];
      var M_offset_8 = M[offset + 8];
      var M_offset_9 = M[offset + 9];
      var M_offset_10 = M[offset + 10];
      var M_offset_11 = M[offset + 11];
      var M_offset_12 = M[offset + 12];
      var M_offset_13 = M[offset + 13];
      var M_offset_14 = M[offset + 14];
      var M_offset_15 = M[offset + 15];
      var a = H[0];
      var b = H[1];
      var c = H[2];
      var d = H[3];
      a = FF(a, b, c, d, M_offset_0, 7, T[0]);
      d = FF(d, a, b, c, M_offset_1, 12, T[1]);
      c = FF(c, d, a, b, M_offset_2, 17, T[2]);
      b = FF(b, c, d, a, M_offset_3, 22, T[3]);
      a = FF(a, b, c, d, M_offset_4, 7, T[4]);
      d = FF(d, a, b, c, M_offset_5, 12, T[5]);
      c = FF(c, d, a, b, M_offset_6, 17, T[6]);
      b = FF(b, c, d, a, M_offset_7, 22, T[7]);
      a = FF(a, b, c, d, M_offset_8, 7, T[8]);
      d = FF(d, a, b, c, M_offset_9, 12, T[9]);
      c = FF(c, d, a, b, M_offset_10, 17, T[10]);
      b = FF(b, c, d, a, M_offset_11, 22, T[11]);
      a = FF(a, b, c, d, M_offset_12, 7, T[12]);
      d = FF(d, a, b, c, M_offset_13, 12, T[13]);
      c = FF(c, d, a, b, M_offset_14, 17, T[14]);
      b = FF(b, c, d, a, M_offset_15, 22, T[15]);
      a = GG(a, b, c, d, M_offset_1, 5, T[16]);
      d = GG(d, a, b, c, M_offset_6, 9, T[17]);
      c = GG(c, d, a, b, M_offset_11, 14, T[18]);
      b = GG(b, c, d, a, M_offset_0, 20, T[19]);
      a = GG(a, b, c, d, M_offset_5, 5, T[20]);
      d = GG(d, a, b, c, M_offset_10, 9, T[21]);
      c = GG(c, d, a, b, M_offset_15, 14, T[22]);
      b = GG(b, c, d, a, M_offset_4, 20, T[23]);
      a = GG(a, b, c, d, M_offset_9, 5, T[24]);
      d = GG(d, a, b, c, M_offset_14, 9, T[25]);
      c = GG(c, d, a, b, M_offset_3, 14, T[26]);
      b = GG(b, c, d, a, M_offset_8, 20, T[27]);
      a = GG(a, b, c, d, M_offset_13, 5, T[28]);
      d = GG(d, a, b, c, M_offset_2, 9, T[29]);
      c = GG(c, d, a, b, M_offset_7, 14, T[30]);
      b = GG(b, c, d, a, M_offset_12, 20, T[31]);
      a = HH(a, b, c, d, M_offset_5, 4, T[32]);
      d = HH(d, a, b, c, M_offset_8, 11, T[33]);
      c = HH(c, d, a, b, M_offset_11, 16, T[34]);
      b = HH(b, c, d, a, M_offset_14, 23, T[35]);
      a = HH(a, b, c, d, M_offset_1, 4, T[36]);
      d = HH(d, a, b, c, M_offset_4, 11, T[37]);
      c = HH(c, d, a, b, M_offset_7, 16, T[38]);
      b = HH(b, c, d, a, M_offset_10, 23, T[39]);
      a = HH(a, b, c, d, M_offset_13, 4, T[40]);
      d = HH(d, a, b, c, M_offset_0, 11, T[41]);
      c = HH(c, d, a, b, M_offset_3, 16, T[42]);
      b = HH(b, c, d, a, M_offset_6, 23, T[43]);
      a = HH(a, b, c, d, M_offset_9, 4, T[44]);
      d = HH(d, a, b, c, M_offset_12, 11, T[45]);
      c = HH(c, d, a, b, M_offset_15, 16, T[46]);
      b = HH(b, c, d, a, M_offset_2, 23, T[47]);
      a = II(a, b, c, d, M_offset_0, 6, T[48]);
      d = II(d, a, b, c, M_offset_7, 10, T[49]);
      c = II(c, d, a, b, M_offset_14, 15, T[50]);
      b = II(b, c, d, a, M_offset_5, 21, T[51]);
      a = II(a, b, c, d, M_offset_12, 6, T[52]);
      d = II(d, a, b, c, M_offset_3, 10, T[53]);
      c = II(c, d, a, b, M_offset_10, 15, T[54]);
      b = II(b, c, d, a, M_offset_1, 21, T[55]);
      a = II(a, b, c, d, M_offset_8, 6, T[56]);
      d = II(d, a, b, c, M_offset_15, 10, T[57]);
      c = II(c, d, a, b, M_offset_6, 15, T[58]);
      b = II(b, c, d, a, M_offset_13, 21, T[59]);
      a = II(a, b, c, d, M_offset_4, 6, T[60]);
      d = II(d, a, b, c, M_offset_11, 10, T[61]);
      c = II(c, d, a, b, M_offset_2, 15, T[62]);
      b = II(b, c, d, a, M_offset_9, 21, T[63]);
      H[0] = (H[0] + a) | 0;
      H[1] = (H[1] + b) | 0;
      H[2] = (H[2] + c) | 0;
      H[3] = (H[3] + d) | 0;
    },
    _doFinalize: function() {
      var data = this._data;
      var dataWords = data.words;
      var nBitsTotal = this._nDataBytes * 8;
      var nBitsLeft = data.sigBytes * 8;
      dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
      var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
      var nBitsTotalL = nBitsTotal;
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = ((((nBitsTotalH << 8) | (nBitsTotalH >>> 24)) & 0x00ff00ff) | (((nBitsTotalH << 24) | (nBitsTotalH >>> 8)) & 0xff00ff00));
      dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = ((((nBitsTotalL << 8) | (nBitsTotalL >>> 24)) & 0x00ff00ff) | (((nBitsTotalL << 24) | (nBitsTotalL >>> 8)) & 0xff00ff00));
      data.sigBytes = (dataWords.length + 1) * 4;
      this._process();
      var hash = this._hash;
      var H = hash.words;
      for (var i = 0; i < 4; i++) {
        var H_i = H[i];
        H[i] = (((H_i << 8) | (H_i >>> 24)) & 0x00ff00ff) | (((H_i << 24) | (H_i >>> 8)) & 0xff00ff00);
      }
      return hash;
    },
    clone: function() {
      var clone = Hasher.clone.call(this);
      clone._hash = this._hash.clone();
      return clone;
    }
  });
  function FF(a, b, c, d, x, s, t) {
    var n = a + ((b & c) | (~b & d)) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  }
  function GG(a, b, c, d, x, s, t) {
    var n = a + ((b & d) | (c & ~d)) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  }
  function HH(a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  }
  function II(a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + x + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  }
  C.MD5 = Hasher._createHelper(MD5);
  C.HmacMD5 = Hasher._createHmacHelper(MD5);
}(Math));
(function() {
  var C = CryptoJS;
  var C_lib = C.lib;
  var Base = C_lib.Base;
  var WordArray = C_lib.WordArray;
  var C_algo = C.algo;
  var MD5 = C_algo.MD5;
  var EvpKDF = C_algo.EvpKDF = Base.extend({
    cfg: Base.extend({
      keySize: 128 / 32,
      hasher: MD5,
      iterations: 1
    }),
    init: function(cfg) {
      this.cfg = this.cfg.extend(cfg);
    },
    compute: function(password, salt) {
      var cfg = this.cfg;
      var hasher = cfg.hasher.create();
      var derivedKey = WordArray.create();
      var derivedKeyWords = derivedKey.words;
      var keySize = cfg.keySize;
      var iterations = cfg.iterations;
      while (derivedKeyWords.length < keySize) {
        if (block) {
          hasher.update(block);
        }
        var block = hasher.update(password).finalize(salt);
        hasher.reset();
        for (var i = 1; i < iterations; i++) {
          block = hasher.finalize(block);
          hasher.reset();
        }
        derivedKey.concat(block);
      }
      derivedKey.sigBytes = keySize * 4;
      return derivedKey;
    }
  });
  C.EvpKDF = function(password, salt, cfg) {
    return EvpKDF.create(cfg).compute(password, salt);
  };
}());
CryptoJS.lib.Cipher || (function(undefined) {
  var C = CryptoJS;
  var C_lib = C.lib;
  var Base = C_lib.Base;
  var WordArray = C_lib.WordArray;
  var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
  var C_enc = C.enc;
  var Utf8 = C_enc.Utf8;
  var Base64 = C_enc.Base64;
  var C_algo = C.algo;
  var EvpKDF = C_algo.EvpKDF;
  var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
    cfg: Base.extend(),
    createEncryptor: function(key, cfg) {
      return this.create(this._ENC_XFORM_MODE, key, cfg);
    },
    createDecryptor: function(key, cfg) {
      return this.create(this._DEC_XFORM_MODE, key, cfg);
    },
    init: function(xformMode, key, cfg) {
      this.cfg = this.cfg.extend(cfg);
      this._xformMode = xformMode;
      this._key = key;
      this.reset();
    },
    reset: function() {
      BufferedBlockAlgorithm.reset.call(this);
      this._doReset();
    },
    process: function(dataUpdate) {
      this._append(dataUpdate);
      return this._process();
    },
    finalize: function(dataUpdate) {
      if (dataUpdate) {
        this._append(dataUpdate);
      }
      var finalProcessedData = this._doFinalize();
      return finalProcessedData;
    },
    keySize: 128 / 32,
    ivSize: 128 / 32,
    _ENC_XFORM_MODE: 1,
    _DEC_XFORM_MODE: 2,
    _createHelper: (function() {
      function selectCipherStrategy(key) {
        if (typeof key == 'string') {
          return PasswordBasedCipher;
        } else {
          return SerializableCipher;
        }
      }
      return function(cipher) {
        return {
          encrypt: function(message, key, cfg) {
            return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
          },
          decrypt: function(ciphertext, key, cfg) {
            return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
          }
        };
      };
    }())
  });
  var StreamCipher = C_lib.StreamCipher = Cipher.extend({
    _doFinalize: function() {
      var finalProcessedBlocks = this._process(!!'flush');
      return finalProcessedBlocks;
    },
    blockSize: 1
  });
  var C_mode = C.mode = {};
  var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
    createEncryptor: function(cipher, iv) {
      return this.Encryptor.create(cipher, iv);
    },
    createDecryptor: function(cipher, iv) {
      return this.Decryptor.create(cipher, iv);
    },
    init: function(cipher, iv) {
      this._cipher = cipher;
      this._iv = iv;
    }
  });
  var CBC = C_mode.CBC = (function() {
    var CBC = BlockCipherMode.extend();
    CBC.Encryptor = CBC.extend({processBlock: function(words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        xorBlock.call(this, words, offset, blockSize);
        cipher.encryptBlock(words, offset);
        this._prevBlock = words.slice(offset, offset + blockSize);
      }});
    CBC.Decryptor = CBC.extend({processBlock: function(words, offset) {
        var cipher = this._cipher;
        var blockSize = cipher.blockSize;
        var thisBlock = words.slice(offset, offset + blockSize);
        cipher.decryptBlock(words, offset);
        xorBlock.call(this, words, offset, blockSize);
        this._prevBlock = thisBlock;
      }});
    function xorBlock(words, offset, blockSize) {
      var iv = this._iv;
      if (iv) {
        var block = iv;
        this._iv = undefined;
      } else {
        var block = this._prevBlock;
      }
      for (var i = 0; i < blockSize; i++) {
        words[offset + i] ^= block[i];
      }
    }
    return CBC;
  }());
  var C_pad = C.pad = {};
  var Pkcs7 = C_pad.Pkcs7 = {
    pad: function(data, blockSize) {
      var blockSizeBytes = blockSize * 4;
      var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;
      var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;
      var paddingWords = [];
      for (var i = 0; i < nPaddingBytes; i += 4) {
        paddingWords.push(paddingWord);
      }
      var padding = WordArray.create(paddingWords, nPaddingBytes);
      data.concat(padding);
    },
    unpad: function(data) {
      var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;
      data.sigBytes -= nPaddingBytes;
    }
  };
  var BlockCipher = C_lib.BlockCipher = Cipher.extend({
    cfg: Cipher.cfg.extend({
      mode: CBC,
      padding: Pkcs7
    }),
    reset: function() {
      Cipher.reset.call(this);
      var cfg = this.cfg;
      var iv = cfg.iv;
      var mode = cfg.mode;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        var modeCreator = mode.createEncryptor;
      } else {
        var modeCreator = mode.createDecryptor;
        this._minBufferSize = 1;
      }
      if (this._mode && this._mode.__creator == modeCreator) {
        this._mode.init(this, iv && iv.words);
      } else {
        this._mode = modeCreator.call(mode, this, iv && iv.words);
        this._mode.__creator = modeCreator;
      }
    },
    _doProcessBlock: function(words, offset) {
      this._mode.processBlock(words, offset);
    },
    _doFinalize: function() {
      var padding = this.cfg.padding;
      if (this._xformMode == this._ENC_XFORM_MODE) {
        padding.pad(this._data, this.blockSize);
        var finalProcessedBlocks = this._process(!!'flush');
      } else {
        var finalProcessedBlocks = this._process(!!'flush');
        padding.unpad(finalProcessedBlocks);
      }
      return finalProcessedBlocks;
    },
    blockSize: 128 / 32
  });
  var CipherParams = C_lib.CipherParams = Base.extend({
    init: function(cipherParams) {
      this.mixIn(cipherParams);
    },
    toString: function(formatter) {
      return (formatter || this.formatter).stringify(this);
    }
  });
  var C_format = C.format = {};
  var OpenSSLFormatter = C_format.OpenSSL = {
    stringify: function(cipherParams) {
      var ciphertext = cipherParams.ciphertext;
      var salt = cipherParams.salt;
      if (salt) {
        var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
      } else {
        var wordArray = ciphertext;
      }
      return wordArray.toString(Base64);
    },
    parse: function(openSSLStr) {
      var ciphertext = Base64.parse(openSSLStr);
      var ciphertextWords = ciphertext.words;
      if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
        var salt = WordArray.create(ciphertextWords.slice(2, 4));
        ciphertextWords.splice(0, 4);
        ciphertext.sigBytes -= 16;
      }
      return CipherParams.create({
        ciphertext: ciphertext,
        salt: salt
      });
    }
  };
  var SerializableCipher = C_lib.SerializableCipher = Base.extend({
    cfg: Base.extend({format: OpenSSLFormatter}),
    encrypt: function(cipher, message, key, cfg) {
      cfg = this.cfg.extend(cfg);
      var encryptor = cipher.createEncryptor(key, cfg);
      var ciphertext = encryptor.finalize(message);
      var cipherCfg = encryptor.cfg;
      return CipherParams.create({
        ciphertext: ciphertext,
        key: key,
        iv: cipherCfg.iv,
        algorithm: cipher,
        mode: cipherCfg.mode,
        padding: cipherCfg.padding,
        blockSize: cipher.blockSize,
        formatter: cfg.format
      });
    },
    decrypt: function(cipher, ciphertext, key, cfg) {
      cfg = this.cfg.extend(cfg);
      ciphertext = this._parse(ciphertext, cfg.format);
      var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);
      return plaintext;
    },
    _parse: function(ciphertext, format) {
      if (typeof ciphertext == 'string') {
        return format.parse(ciphertext, this);
      } else {
        return ciphertext;
      }
    }
  });
  var C_kdf = C.kdf = {};
  var OpenSSLKdf = C_kdf.OpenSSL = {execute: function(password, keySize, ivSize, salt) {
      if (!salt) {
        salt = WordArray.random(64 / 8);
      }
      var key = EvpKDF.create({keySize: keySize + ivSize}).compute(password, salt);
      var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
      key.sigBytes = keySize * 4;
      return CipherParams.create({
        key: key,
        iv: iv,
        salt: salt
      });
    }};
  var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
    cfg: SerializableCipher.cfg.extend({kdf: OpenSSLKdf}),
    encrypt: function(cipher, message, password, cfg) {
      cfg = this.cfg.extend(cfg);
      var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);
      cfg.iv = derivedParams.iv;
      var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);
      ciphertext.mixIn(derivedParams);
      return ciphertext;
    },
    decrypt: function(cipher, ciphertext, password, cfg) {
      cfg = this.cfg.extend(cfg);
      ciphertext = this._parse(ciphertext, cfg.format);
      var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);
      cfg.iv = derivedParams.iv;
      var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);
      return plaintext;
    }
  });
}());
var gy = navigator.userAgent;
(function() {
  var C = CryptoJS;
  var C_lib = C.lib;
  var StreamCipher = C_lib.StreamCipher;
  var C_algo = C.algo;
  var RC4 = C_algo.RC4 = StreamCipher.extend({
    _doReset: function() {
      var key = this._key;
      var keyWords = key.words;
      var keySigBytes = key.sigBytes;
      var S = this._S = [];
      for (var i = 0; i < 256; i++) {
        S[i] = i;
      }
      for (var i = 0,
          j = 0; i < 256; i++) {
        var keyByteIndex = i % keySigBytes;
        var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;
        j = (j + S[i] + keyByte) % 256;
        var t = S[i];
        S[i] = S[j];
        S[j] = t;
      }
      this._i = this._j = 0;
    },
    _doProcessBlock: function(M, offset) {
      M[offset] ^= generateKeystreamWord.call(this);
    },
    keySize: 256 / 32,
    ivSize: 0
  });
  function generateKeystreamWord() {
    var S = this._S;
    var i = this._i;
    var j = this._j;
    var keystreamWord = 0;
    for (var n = 0; n < 4; n++) {
      i = (i + 1) % 256;
      j = (j + S[i]) % 256;
      var t = S[i];
      S[i] = S[j];
      S[j] = t;
      keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
    }
    this._i = i;
    this._j = j;
    return keystreamWord;
  }
  C.RC4 = StreamCipher._createHelper(RC4);
  var RC4Drop = C_algo.RC4Drop = RC4.extend({
    cfg: RC4.cfg.extend({drop: 192}),
    _doReset: function() {
      RC4._doReset.call(this);
      for (var i = this.cfg.drop; i > 0; i--) {
        generateKeystreamWord.call(this);
      }
    }
  });
  C.RC4Drop = StreamCipher._createHelper(RC4Drop);
}());
function RC4_Encrypt(word, key) {
  return CryptoJS.RC4.encrypt(word, key).toString();
}
function RC4_Decrypt(word, key) {
  return CryptoJS.RC4.decrypt(word, key).toString(CryptoJS.enc.Utf8);
}
document.querySelectorAll('.truck-button').forEach(function(button) {
  var allkey = Object.keys(window);
  button.addEventListener('click', function(e) {
    var dsishave = 0;
    for (var tyuu = 0; tyuu < allkey.length; tyuu++) {
      var gh = allkey[tyuu].split('');
      var allcbb = 0;
      for (var tygg = 0; tygg < gh.length; tygg++) {
        allcbb += gh[tygg].charCodeAt(0);
      }
      if (allcbb + gh.length === 1181) {
        dsishave = 1;
        break;
      }
    }
    e.preventDefault();
    var box = button.querySelector('.box'),
        truck = button.querySelector('.truck');
    if (!button.classList.contains('done')) {
      if (!button.classList.contains('animation')) {
        window.$e = (new Date()).getTime();
        if (dsishave >= 1 && window.performance.now) {
          window.ak = window.performance.now() * 300 - 20;
        } else {
          window.ak = 100;
        }
        button.classList.add('animation');
        gsap.to(button, {
          '--box-s': 1,
          '--box-o': 1,
          duration: .3,
          delay: .5
        });
        gsap.to(box, {
          x: 0,
          duration: .4,
          delay: .7
        });
        gsap.to(button, {
          '--hx': -5,
          '--bx': 50,
          duration: .18,
          delay: .92
        });
        gsap.to(box, {
          y: 0,
          duration: .1,
          delay: 1.15
        });
        gsap.set(button, {
          '--truck-y': 0,
          '--truck-y-n': -26
        });
        gsap.to(button, {
          '--truck-y': 1,
          '--truck-y-n': -25,
          duration: .2,
          delay: 1.25,
          onComplete: function() {
            var t$e = (new Date()).getTime();
            var alltime = 0;
            var d,
                m,
                op = gy.split('');
            alltime += op.length;
            if (dsishave >= 1 && window.performance.now) {
              var t$e2e = window.performance.now() - (window.ak + 20) / 300;
            } else {
              var t$e2e = 100;
            }
            gsap.timeline({onComplete: function() {
                var t$e2 = (new Date()).getTime();
                if (dsishave >= 1 && window.performance.now) {
                  var t$e3 = window.performance.now();
                } else {
                  var t$e3 = 100;
                }
                var ft = df();
                var data = RC4_Encrypt(t$e2 + "----" + t$e + "----" + t$e2e + "----" + t$e3, "----");
                for (d in op) {
                  m = op[d].charCodeAt(0);
                  alltime += m;
                }
                var cxvbcv = t$e % 20;
                cxvbcv = t$e % alltime;
                var sign = ft.hash("----" + sha1(String(cxvbcv)));
                !(function() {
                  var isokk = 0;
                  try {
                    var xhr = new XMLHttpRequest();
                    xhr.addEventListener('load', function() {});
                    xhr.open('POST', '/cbbllq2', false);
                    xhr.send(JSON.stringify({
                      "sign": sign,
                      "tm": t$e,
                      "data": data
                    }));
                    if (xhr.responseText === "okk") {
                      isokk = 1;
                    }
                  } catch (e) {}
                  var ftft = document.querySelectorAll(".success");
                  if (isokk == 1) {
                    ftft[0].textContent = "验证成功";
                  } else {
                    ftft[0].textContent = "验证失败";
                  }
                })();
                button.classList.add('done');
              }}).to(truck, {
              x: 0,
              duration: .4
            }).to(truck, {
              x: 40,
              duration: 1
            }).to(truck, {
              x: 20,
              duration: .6
            }).to(truck, {
              x: 96,
              duration: .4
            });
            gsap.to(button, {
              '--progress': 1,
              duration: 2.4,
              ease: "power2.in"
            });
          }
        });
      }
    } else {
      button.classList.remove('animation', 'done');
      gsap.set(truck, {x: 4});
      gsap.set(button, {
        '--progress': 0,
        '--hx': 0,
        '--bx': 0,
        '--box-s': .5,
        '--box-o': 0,
        '--truck-y': 0,
        '--truck-y-n': -26
      });
      gsap.set(box, {
        x: -24,
        y: -6
      });
    }
  });
});
