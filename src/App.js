// Generated by CoffeeScript 1.11.1
var App, GLib, Gio, Granite, Gtk, Lang, readFile;

Lang = imports.lang;

GLib = imports.gi.GLib;

Gio = imports.gi.Gio;

Gtk = imports.gi.Gtk;

Granite = imports.gi.Granite;

readFile = function(filename) {
  var data, file, length, ref, success;
  file = Gio.file_new_for_path(filename);
  ref = file.load_contents(null), success = ref[0], data = ref[1], length = ref[2];
  return data;
};

App = Lang.Class({
  Name: 'App',
  Extends: Granite.Application,
  _init: function() {
    this.parent({});
  },
  activate: function() {
    this.window = new Gtk.Window();
    this.window.title = "Simple App";
    this.window.set_default_size(400, 400);
    this.window.connect("destroy", function() {
      return Gtk.main_quit();
    });
    return this.window.show_all();
  }
});

export default App;
