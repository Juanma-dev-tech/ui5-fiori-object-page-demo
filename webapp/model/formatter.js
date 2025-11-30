sap.ui.define([], function () {
  "use strict";

  return {
    amountWithCurrency: function (fAmount, sCurrency) {
      if (fAmount == null) {
        return "";
      }

      try {
        return new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: sCurrency || "ARS",
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(fAmount);
      } catch (e) {
        // Fallback simple
        return fAmount + " " + (sCurrency || "");
      }
    },

    dateFromISO: function (sDate) {
      if (!sDate) {
        return "";
      }

      // Si viene YYYY-MM-DD, agregar hora para que JS lo interprete bien
      if (/^\d{4}-\d{2}-\d{2}$/.test(sDate)) {
        sDate += "T00:00:00";
      }

      var oDate = new Date(sDate);
      if (isNaN(oDate.getTime())) {
        return sDate;
      }

      return oDate.toLocaleDateString("es-AR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },

    quantityWithUnit: function (fQty, sUnit) {
      if (fQty == null) return "";
      return fQty + " " + (sUnit || "");
    },

    statusState: function (sStatus) {
      if (!sStatus) return "None";

      switch (sStatus) {
        case "In Process":
          return "Warning";
        case "Completed":
          return "Success";
        case "Blocked":
          return "Error";
        default:
          return "None";
      }
    },
  };
});
