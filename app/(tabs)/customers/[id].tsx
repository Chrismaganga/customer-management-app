import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const CustomerPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Customer Page {id}</Text>
    </View>
  );
};

export default CustomerPage;