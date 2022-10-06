import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { useOrders } from "../../context/OrdersContext";

const Home = ({ navigation }) => {
  const { status, loading } = useOrders()

  return (
    <View style={styles.container}>
      <Header height={120} />
      <View style={styles.areaBtn}>
        <TouchableOpacity style={styles.btn} activeOpacity={0.8} onPress={() => navigation.navigate("Add")}>
          <Text style={{ fontWeight: "bold" }}>adicionar encomenda</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={styles.title}>Minhas encomendas</Text>
      </View>
      {loading && <ActivityIndicator style={{ marginTop: 60 }} animating={true} color={"#383838"} size={50} />}
      {!loading &&
        <>
          {
            status.length >= 1 ? (
              <FlatList
                data={status}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate("Track", { name: item.name, code: item.code })}>
                    <Card order={item} />
                  </TouchableOpacity>

                )}
                keyExtractor={order => order.code}
              />
            ) : <Text style={{ color: "#808080" }}>ops, parece que você ainda não adicionou nada</Text>
          }
        </>}

    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#151515",
    paddingHorizontal: 25,
  },
  areaBtn: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6
  },
  btn: {
    backgroundColor: "#C8FF00",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 8
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22
  }
})

export default Home
