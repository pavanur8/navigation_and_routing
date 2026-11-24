/* eslint-disable no-alert */
sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.pavan.app.navigationandrouting.controller.Home", {
        onInit() {
        },
        onNavigateToAboutPage() {
            var oComponent = this.getOwnerComponent();
            var oRouter = oComponent.getRouter();
            oRouter.navTo("RouteAbout",{
                name:"PAVAN PRABHAS U.R."
            });
        }
    });
});