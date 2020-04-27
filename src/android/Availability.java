package com.onurkenis.cordovaservicechecker;

import androidx.annotation.NonNull;

import com.google.gson.GsonBuilder;

class Availability {
    private boolean result;

    Availability(boolean result) {
        this.result = result;
    }

    @NonNull
    @Override
    public String toString() {
        return new GsonBuilder().create().toJson(this, Availability.class);
    }

    public boolean getResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }
}
