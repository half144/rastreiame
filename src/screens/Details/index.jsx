import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"



const Details = ({ route }) => {
    const { order } = route.params
    const date = order.dtHrCriado

    return (
        <View style={styles.container}>
            <Text style={styles.date}>{`${date.substring(8, 10)}/${date.substring(5, 7)} ás ${date.substring(11, 16)}`}</Text>
            <View style={{ marginVertical: 10 }}>
                <Text style={styles.title}>{order.descricao}</Text>
            </View>
            {order.detalhe && <Text style={styles.details}>{order.detalhe}</Text>}
            {order.unidade.tipo == "País" ? (<Text style={styles.desc}>{`em ${order.unidade.nome}`}</Text>) : (<Text style={styles.desc}>{`em ${order.unidade.endereco.cidade} - ${order.unidade.endereco.uf}`}</Text>)}
            {order.unidade.endereco.bairro && (
                <View style={styles.address}>
                    <Text>{`Bairro: ${order.unidade.endereco.bairro}`}</Text>
                    <Text>{`Cep: ${order.unidade.endereco.cep}`}</Text>
                    <Text>{`Cidade: ${order.unidade.endereco.cidade}`}</Text>
                    <Text>{`Logradouro: ${order.unidade.endereco.logradouro}`}</Text>
                    <Text>{`Número: ${order.unidade.endereco.numero}`}</Text>
                    <Text>{`Estado: ${order.unidade.endereco.uf}`}</Text>
                </View>
            )}
            <Text style={styles.type}>{order.unidade.tipo}</Text>
            {order.unidadeDestino && (
                <>
                    <Text style={styles.desc}>{`para ${order.unidadeDestino.endereco.cidade} - ${order.unidadeDestino.endereco.uf}`}</Text>
                    <Text style={styles.type}>{order.unidadeDestino.tipo}</Text>
                </>)}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 13,
        alignItems: "center",
    },
    desc: {
        color: "#505050",
        fontSize: 12
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
        color: "#909090",
        fontSize: 12
    },
    details: {
        textAlign: "center",
        fontSize: 11,
        fontWeight: "bold"
    },
    address: {
        marginVertical: 10,
        backgroundColor: "#1e1e1e",
        padding: 12,
        width: "100%",
        borderRadius: 10
    },
    title: {
        fontWeight: "bold"
    }
})

export default Details