/* eslint-disable no-console */
/* eslint-disable linebreak-style */
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], (Controller, MessageToast) => {
    "use strict";

    return Controller.extend("com.pavan.app.navigationandrouting.controller.About", {
        onInit() {
            var oComponent =this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            oRouter.getRoute("RouteAbout").attachPatternMatched(this._onAttachPatternMatched, this);
        },
        onNavigateToHomePage() {
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            oRouter.navTo("RouteHome");
        },
        _onAttachPatternMatched(oEvent) {
            // console.log(oEvent);
            var sName = oEvent.getParameter("arguments").name;
            // MessageToast.show(`Hello ${sName}, Welcome to About Page`);
            MessageToast.show(sName);
        }
    });
});