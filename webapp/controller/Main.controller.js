sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/ui/core/Fragment'
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Fragment) {
        "use strict";

        return Controller.extend("com.hpe.hpeproject.controller.Main", {
            onInit: function () {

            },

            onButtonPress: function() {
                var oView = this.getView();
                var that = this;
                // create dialog lazily
                if (!this._sDialog) {
                    // load asynchronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "com.hpe.hpeproject.fragments.radioOptions",
                        controller: this
                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    this._sDialog.open();
                }                
            },

            onCancelPressed: function () {
                var oDialog1 = this.getView().byId("idRadioDialog");
                oDialog1.close();
                oDialog1.destroy();
            },

            onOKPressed: function() {
                var oView = this.getView();
                var that = this;
                var oRadioButtonGroup = this.getView().byId("GroupA");
                var oSelectedIndex = oRadioButtonGroup.getSelectedIndex();

                if (oSelectedIndex === 0) {
                    if (!this._s1Dialog) {
                        // load asynchronous XML fragment
                        Fragment.load({
                            id: oView.getId(),
                            name: "com.hpe.hpeproject.fragments.Option1",
                            controller: this
                        }).then(function (oDialog) {
                            oView.addDependent(oDialog);
                            oDialog.open();
                        });
                    } else {
                        this._s1Dialog.open();
                    }                        
                } else if (oSelectedIndex === 1)
                    if (!this._s2Dialog) {
                        // load asynchronous XML fragment
                        Fragment.load({
                            id: oView.getId(),
                            name: "com.hpe.hpeproject.fragments.Option2",
                            controller: this
                        }).then(function (oDialog) {
                            oView.addDependent(oDialog);
                            oDialog.open();
                        });
                    } else {
                        this._s2Dialog.open();
                    }
            },

            onCancelPressed1: function() {
                var oDialog1 = this.getView().byId("idRadioDialog1");
                oDialog1.close();
                oDialog1.destroy();                
            },

            onCancelPressed2: function() {
                var oDialog2 = this.getView().byId("idRadioDialog2");
                oDialog2.close();
                oDialog2.destroy(); 
            }


        });
    });
