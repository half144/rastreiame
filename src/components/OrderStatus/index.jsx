import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useNavigation } from '@react-navigation/native';



const OrderStatus = ({ order }) => {

    const navigation = useNavigation();
    const date = order.dtHrCriado

    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Details", { order })}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.date}>{`${date.substring(8, 10)}/${date.substring(5, 7)}`}</Text>
                    <Text style={styles.date}>{date.substring(11, 16)}</Text>
                </View>
                <View style={{ width: "70%" }}>
                    <Text style={styles.status}>{order.descricao}</Text>
                    {order.unidadeDestino ? (
                        <>
                            <Text style={styles.desc}>{`para ${order.unidadeDestino.endereco.cidade} - ${order.unidadeDestino.endereco.uf}`}</Text>
                            <Text style={styles.type}>{order.unidadeDestino.tipo}</Text>
                        </>) : (
                        <>
                            {order.unidade.tipo == "País" ? (<Text style={styles.desc}>{`${order.unidade.nome}`}</Text>) : (<Text style={styles.desc}>{`${order.unidade.endereco.cidade} - ${order.unidade.endereco.uf}`}</Text>)}
                            <Text style={styles.type}>{order.unidade.tipo}</Text>
                        </>
                    )}
                </View>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1E1E1E",
        paddingHorizontal: 20,
        height: 90,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 6
    },
    desc: {
        color: "#808080",
        fontSize: 11
    },
    status: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 12
    },
    date: {
        color: "#FFF",
        fontSize: 13,
        fontWeight: "bold"
    },
    type: {
        color: "#505050",
        fontSize: 12
    }
})

export default OrderStatus