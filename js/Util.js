// Generated by CoffeeScript 1.11.1
var Gio, Util;

Gio = imports.gi.Gio;

export default Util = (function() {
  function Util() {}

  Util.readFile = function(filename) {
    var data, file, length, ref, success;
    file = Gio.file_new_for_path(filename);
    if (file.query_exists(null)) {
      ref = file.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
      return data;
    } else {
      return null;
    }
  };

  Util.toBytes = function(str) {
    var buf, bufView, i, j, ref, strLen;
    buf = new ArrayBuffer(str.length * 2);
    bufView = new Uint16Array(buf);
    for (i = j = 0, ref = strLen = str.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  };

  return Util;

})();