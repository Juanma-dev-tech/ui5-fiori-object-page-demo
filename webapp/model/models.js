sap.ui.define([
  "sap/ui/model/json/JSONModel",
  "sap/ui/Device"
], function (JSONModel, Device) {
  "use strict";

  return {

    createDeviceModel: function () {
      var oModel = new JSONModel(Device);
      oModel.setDefaultBindingMode("OneWay");
      return oModel;
    },

    createSalesOrderModel: function () {
      var oModel = new JSONModel();
      oModel.loadData("model/data.json");   // 👈 carga EL JSON
      return oModel;
    }

  };
});
