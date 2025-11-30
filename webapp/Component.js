sap.ui.define([
  "sap/ui/core/UIComponent",
  "ui5fiori/objectpage/demo/model/models"
], function (UIComponent, models) {
  "use strict";

  return UIComponent.extend("ui5fiori.objectpage.demo.Component", {

    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);

      // Device model
      this.setModel(models.createDeviceModel(), "device");

      // Sales Order model (default model)
      this.setModel(models.createSalesOrderModel());
    }

  });
});
