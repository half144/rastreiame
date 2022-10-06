import { ActivityIndicator, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FlatList } from "react-native-gesture-handler";
import Header from "../../components/Header"
import OrderStatus from "../../components/OrderStatus";
import useGetOrderEvents from "../../hooks/useGetOrderEvents";
import Ionicons from '@expo/vector-icons/Ionicons';


const Track = ({ route, navigation }) => {

    const { code, name } = route.params;
    const { events, loading } = useGetOrderEvents(code)

    return (
        <View style={styles.container}>
            <Header height={70} />
            <View style={styles.trackHeader}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.code}>{code}</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Settings", { code: code, name: name })}>
                        <Ionicons name="settings-sharp" size={30} color="#FFF" />
                    </TouchableOpacity>
                </View>
            </View>
            {loading && <ActivityIndicator style={{ marginTop: 60 }} animating={loading} color={"#383838"} size={50} />}
            <FlatList
                data={events}
                style={{ marginTop: 10 }}
                renderItem={({ item }) => (<OrderStatus order={item} />)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
    },
    title: {
        color: "#FFF",
        fontSize: 22,
        fontWeight: "bold"
    },
    code: {
        color: "#747474"
    },
    trackHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default Track