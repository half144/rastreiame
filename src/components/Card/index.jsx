import { Image, StyleSheet, Text, View } from "react-native"



const Card = ({ order }) => {


    return (
        <View style={styles.card}>
            <View>
                <Text style={styles.title}>{order.name}</Text>
                <Text style={styles.code}>{order.code}</Text>
                <Text style={styles.status}>{order.statusOrder}</Text>
            </View>
            <View>
                <Image source={require("../../../assets/Truck.png")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1E1E1E",
        flexDirection: "row",
        borderRadius: 8,
        paddingHorizontal: 16,
        height: 84,
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    title: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 13
    },
    code: {
        fontSize: 10,
        color: "#949494",
        marginBottom: 3
    },
    status: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 12
    }
})

export default Card