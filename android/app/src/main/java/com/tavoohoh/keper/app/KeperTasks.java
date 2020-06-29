package com.tavoohoh.keper.app;

import android.appwidget.AppWidgetManager;
import android.appwidget.AppWidgetProvider;
import android.content.Context;
import android.widget.RemoteViews;

//import org.json.JSONException;
//import org.json.JSONObject;
//
//import java.io.*;
//import java.net.URL;
//import java.net.URLConnection;

/**
 * Implementation of App Widget functionality.
 */
public class KeperTasks extends AppWidgetProvider {

    @Override
    public void onUpdate(Context context, AppWidgetManager appWidgetManager, int[] appWidgetIds) {
        // There may be multiple widgets active, so update all of them
        for (int appWidgetId : appWidgetIds) {
            updateAppWidget(context, appWidgetManager, appWidgetId);
        }
    }


    @Override
    public void onEnabled(Context context) {
        // Enter relevant functionality for when the first widget is created
    }

    @Override
    public void onDisabled(Context context) {
        // Enter relevant functionality for when the last widget is disabled
    }

    static void updateAppWidget(Context context, AppWidgetManager appWidgetManager, int appWidgetId) {
//        String strUrl="https://us-central1-hateno-94ef8.cloudfunctions.net/";
//        URLConnection urlConn;
//        BufferedReader bufferedReader;
//        String todayCookingTaskUser;
//        String todayDishesTaskUser;
//
//        try {
//            URL url = new URL(strUrl);
//            urlConn = url.openConnection();
//            bufferedReader = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));
//
//            StringBuilder stringBuilder = new StringBuilder();
//            String line;
//
//            while ((line = bufferedReader.readLine()) != null) {
//                stringBuilder.append(line);
//            }
//
//            JSONObject response = new JSONObject(stringBuilder.toString());
//        } catch (IOException | JSONException e) {
//            e.printStackTrace();
//        }

        CharSequence widgetTitle = context.getString(R.string.appwidget_title);
        CharSequence widgetTaskCooking = context.getString(R.string.appwidget_cooking_title);
        CharSequence widgetTaskDishes = context.getString(R.string.appwidget_dishes_title);
        CharSequence widgetTaskCookingUser = context.getString(R.string.appwidget_cooking_user);
        CharSequence widgetTaskDishesUser = context.getString(R.string.appwidget_dishes_user);

        // Construct the RemoteViews object
        RemoteViews views = new RemoteViews(context.getPackageName(), R.layout.keper_tasks);

        views.setTextViewText(R.id.appwidget_title, widgetTitle);
        views.setTextViewText(R.id.appwidget_cooking_title, widgetTaskCooking);
        views.setTextViewText(R.id.appwidget_dishes_title, widgetTaskDishes);
        views.setTextViewText(R.id.appwidget_cooking_user, widgetTaskCookingUser);
        views.setTextViewText(R.id.appwidget_dishes_user, widgetTaskDishesUser);

        // Instruct the widget manager to update the widget
        appWidgetManager.updateAppWidget(appWidgetId, views);
    }
}

