/* eslint-disable no-console */
sap.ui.define([
    "sap/ui/core/UIComponent",
    "com/pavan/app/navigationandrouting/model/models",
    "sap/ui/model/json/JSONModel"

], (UIComponent, models,JSONModel ) => {
    "use strict";

    return UIComponent.extend("com.pavan.app.navigationandrouting.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();

            var oEmployee = new JSONModel("model/employees.json");

            oEmployee.attachRequestCompleted(()=>{
                console.log(oEmployee);
                console.log(oEmployee.getData());
            });
        }
    });
});