package com.cai_cho_cross_platform;

import android.content.Context;
import android.content.ContextWrapper;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.content.res.AssetManager;
import android.util.Log;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;
import java.util.StringTokenizer;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

/**
 * Created by sts on 9/9/16.
 */
public class IPSNativeModules extends ReactContextBaseJavaModule {

    private static final String DURATION_SHORT_KEY = "SHORT";
    private static final String DURATION_LONG_KEY = "LONG";

    private static String DEMO_DB_NAME = "demo.sqlite";
    private final String APP_PATH;

    private final Context mContext;

    public IPSNativeModules(ReactApplicationContext reactContext) {
        super(reactContext);
//        reactContext.addActivityEventListener(this);
        mContext = reactContext;
        APP_PATH = new File("/data/data/", mContext.getPackageName()).getPath();
    }

    @Override
    public String getName() {
        return "IPSNativeModules";
    }

//    @Override
//    public void onActivityResult(final int requestCode, final int resultCode, final Intent intent) {
//        // Your logic here
//    }
//
//    @Override
//    public void onNewIntent(Intent intent) {
//    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURATION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURATION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void getDbPath(String location, Callback callBack) {
        File dir = new File(APP_PATH, location);
        String path = dir.getPath()+"/";
//        String result = new File(path, DEMO_DB_NAME).getPath();
        Log.e("DB Path", path);
        callBack.invoke(path);
    }


    @ReactMethod
    public void copyDemoDB(String name, String location, Callback complete) {

        File dir = new File(APP_PATH, location);
        String path = dir.getPath();
        try {
            if (dir.mkdir()) {
                System.out.println("Directory created");
            } else {
                System.out.println("Directory is not created");
            }
        } catch (Exception e) {
            e.printStackTrace();
            complete.invoke(e.getMessage());
        }

        InputStream inputStream = null;
        OutputStream outputStream = null;
        try {
            //Open your local db as the input stream
            InputStream myInput = mContext.getAssets().open(DEMO_DB_NAME);

            // Path to the just created empty db
            String outFileName = new File(path, DEMO_DB_NAME).getPath();

            File outputFile = new File(outFileName);
            if (outputFile.exists()) {
                myInput.close();
                return;
            }

            //Open the empty db as the output stream
            OutputStream myOutput = new FileOutputStream(outFileName);

            //transfer bytes from the inputfile to the outputfile
            byte[] buffer = new byte[1024];
            int length;
            while ((length = myInput.read(buffer)) > 0) {
                myOutput.write(buffer, 0, length);
            }

            //Close the streams
            myOutput.flush();
            myOutput.close();
            myInput.close();
        } catch (IOException e) {
            complete.invoke(e.getMessage());
        }

        complete.invoke(path);
    }

    private void copyFile(InputStream in, OutputStream out) throws IOException {

    }
}