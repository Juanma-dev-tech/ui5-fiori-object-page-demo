sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "ui5fiori/objectpage/demo/model/formatter"
], function (Controller, formatter) {
  "use strict";

  return Controller.extend("ui5fiori.objectpage.demo.controller.ObjectPage", {

    formatter: formatter,

    onInit: function () {
      this.getView().bindElement("/SalesOrder");
    }

  });
});
