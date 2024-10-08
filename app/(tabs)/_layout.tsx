import { Tabs } from "expo-router";
import React from "react";
import { MaterialIcons } from '@expo/vector-icons'; 

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} /> 
          ),
        }}
      />
      <Tabs.Screen
        name="customers/[id]"
        options={{
          headerTitle: "Customer Page",
          title: "Customer",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="person" size={size} color={color} /> // Customer icon
          ),
        }}
      />
      <Tabs.Screen
        name="Accounts"
        options={{
          headerTitle: "Customer Accounts",
          title: "Accounts",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-balance" size={size} color={color} /> // Accounts icon
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
