// Generated by CoffeeScript 1.11.1
var GObject, Gtk, NotebookTab, Pango,
  slice = [].slice;

GObject = imports.gi.GObject;

Gtk = imports.gi.Gtk;

Pango = imports.gi.Pango;


/*
 *
 * Abstract Class ProjectViewer - 
 *
 * view autovala data
 *
 */

export default NotebookTab = (function() {

  /*
    * set the autovala project data 
    * @param prj:Project
   */
  function NotebookTab(prj, status) {
    this.prj = prj;
    this.status = status;
    this.id = this.status.get_context_id(this.constructor.name);
  }


  /*
    *
    *  buildUI  
    *
    *  sets up the base UI page for property display
    *  subclass must override & super this method
    *
   */

  NotebookTab.prototype.buildUI = function() {
    var bold, key, normal, readonly, value;
    this.listStore = new Gtk.ListStore();
    this.listStore.set_column_types([GObject.TYPE_STRING, GObject.TYPE_STRING, GObject.TYPE_STRING]);
    this.treeView = new Gtk.TreeView({
      expand: true,
      model: this.listStore
    });
    this.selection = this.treeView.get_selection();
    this.selection.connect('changed', (function(_this) {
      return function() {
        return _this.onSelectionChanged();
      };
    })(this));
    this.grid = new Gtk.Grid();
    key = new Gtk.TreeViewColumn({
      title: "Key"
    });
    value = new Gtk.TreeViewColumn({
      title: "Value"
    });
    readonly = new Gtk.TreeViewColumn({
      title: "Readonly"
    });
    bold = new Gtk.CellRendererText({
      weight: Pango.Weight.BOLD
    });
    normal = new Gtk.CellRendererText();
    key.pack_start(bold, true);
    value.pack_start(normal, true);
    readonly.pack_start(normal, true);
    key.add_attribute(bold, "text", 0);
    value.add_attribute(normal, "text", 1);
    readonly.add_attribute(normal, "text", 2);
    this.treeView.insert_column(key, 0);
    this.treeView.insert_column(value, 1);
    this.treeView.insert_column(readonly, 2);
    this.scrollView = new Gtk.ScrolledWindow({
      hscrollbar_policy: Gtk.PolicyType.NEVER,
      vscrollbar_policy: Gtk.PolicyType.AUTOMATIC
    });
    this.scrollView.add(this.treeView);
    return this.grid.attach(this.scrollView, 0, 0, 1, 1);
  };


  /*
    * Add data to the list store
    * call from subclass buildUI
   */

  NotebookTab.prototype.add = function() {
    var arg;
    arg = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    return this.listStore.set(this.listStore.append(), [0, 1, 2], [String(arg[0]), String(arg[1]), String(arg[2])]);
  };


  /*
    * show the current selected row
   */

  NotebookTab.prototype.onSelectionChanged = function() {
    var isSelected, iter, model, ref;
    ref = this.selection.get_selected(), isSelected = ref[0], model = ref[1], iter = ref[2];
    return this.status.push(this.id, this.listStore.get_value(iter, 0) + " " + this.listStore.get_value(iter, 1) + " " + this.listStore.get_value(iter, 2));
  };

  return NotebookTab;

})();
