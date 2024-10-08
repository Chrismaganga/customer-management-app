import { View, Text, StyleSheet } from 'react-native';

const CustomerDetail = ({ route }) => {
  const { customer } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{customer.name}</Text>
      <Text style={styles.detail}>Email: {customer.email}</Text>
      <Text style={styles.detail}>Phone: {customer.phone}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default CustomerDetail;
