export default """
<?xml version="1.0" encoding="UTF-8"?>
<!-- Generated with glade 3.18.3 -->
<interface>
  <requires lib="gtk+" version="3.12"/>
  <template class="Gjs_AppWindow" parent="GtkApplicationWindow">
    <property name="can_focus">False</property>
    <property name="title" translatable="yes">Player</property>
    <property name="window_position">center</property>
    <property name="default_width">940</property>
    <property name="default_height">640</property>
    <property name="icon">data/bosco.png</property>
    <child>
      <object class="GtkBox" id="base">
        <property name="visible">True</property>
        <property name="can_focus">False</property>
        <property name="orientation">vertical</property>
        <child>
          <object class="GtkBox" id="background">
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="orientation">vertical</property>
            <child>
              <placeholder/>
            </child>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">True</property>
            <property name="position">1</property>
          </packing>
        </child>
        <child>
          <object class="GtkStatusbar" id="status">
            <property name="visible">True</property>
            <property name="can_focus">False</property>
            <property name="margin_left">10</property>
            <property name="margin_right">10</property>
            <property name="margin_start">10</property>
            <property name="margin_end">10</property>
            <property name="margin_top">6</property>
            <property name="margin_bottom">6</property>
            <property name="orientation">vertical</property>
            <property name="spacing">2</property>
          </object>
          <packing>
            <property name="expand">False</property>
            <property name="fill">True</property>
            <property name="position">2</property>
          </packing>
        </child>
      </object>
    </child>
  </template>
</interface>
"""