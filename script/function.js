var FUNC = {
  // 设置cookies
  setCookie: function (name, value) {
    var Days = 30;
    var exp = new Date();
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + exp.toGMTString();
  },

  // 获取cookie
  getCookie: function (c_name) {
    if (document.cookie.length > 0) {
      var c_start = document.cookie.indexOf(c_name + '=');
      if (c_start != -1) {
        c_start = c_start + c_name.length + 1;
        var c_end = document.cookie.indexOf(';', c_start);
        if (c_end == -1) c_end = document.cookie.length;
        return unescape(document.cookie.substring(c_start, c_end));
      }
    }
    return '';
  },

  // 删除cookie
  delCookie: function (name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = FUNC.getCookie(name);
    if (cval != null) document.cookie = name + '=' + cval + ';expires=' + exp.toGMTString();
  }
}