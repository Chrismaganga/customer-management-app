import { Link, useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
// import Login from "../(auth)/Login";
// import CustomerPage from "./customers/[id]";

const HomePage = () => {
  const router = useRouter();

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24 }}>Home Page</Text>
      <Link href="/customers/1" style={{ marginVertical: 8 }}>
        Go to customer 1
      </Link>
      <Pressable
        onPress={() =>
          router.push({
            pathname: "/customers/[id]",
            params: { id: 2 },
          })
        }
        style={{ backgroundColor: '#007BFF', padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: '#FFFFFF' }}>Go to customer 2</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
