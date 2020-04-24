package com.onurkenis.cordovaservicechecker;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class CordovaServiceChecker extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        switch (action) {
            case "isHmsAvailable":
                this.isHmsAvailable(callbackContext);
                return true;
            case "isGmsAvailable":
                this.isGmsAvailable(callbackContext);
                return true;
            default:
                return false;
        }
    }

    private void isHmsAvailable(CallbackContext callbackContext) {
        boolean isAvailable = false;
        Context context = this.cordova.getActivity().getApplicationContext();
        if (null != context) {
            int result = HuaweiApiAvailability.getInstance().isHuaweiMobileServicesAvailable(context);
            isAvailable = (com.huawei.hms.api.ConnectionResult.SUCCESS == result);
        }
        callbackContext.success(isAvailable);
    }

    private void isGmsAvailable(CallbackContext callbackContext) {
        boolean isAvailable = false;
        Context context = this.cordova.getActivity().getApplicationContext();
        if (null != context) {
            int result = GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(context); 
            isAvailable = (com.google.android.gms.common.ConnectionResult.SUCCESS == result);
        }
        callbackContext.success(isAvailable);
    }
}
