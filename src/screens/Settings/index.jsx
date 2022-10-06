import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper";
import useRemoveOrder from "../../hooks/useRemoveOrder";





const Settings = ({ route, navigation }) => {

    const { code, name } = route.params;
    const { removeOrder } = useRemoveOrder()

    const handleRemove = async () => {
        await removeOrder(code)
        navigation.navigate("Home")
    }

    return (
        <View style={styles.container}>
            <View style={styles.trackHeader}>
                <Text style={styles.title}>{`Configurações ${name}`}</Text>
                <Text style={styles.code}>{code}</Text>
            </View>
            <Button onPress={handleRemove} mode="contained">Remover</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 18,
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: "center"
    },
    title: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold"
    },
    code: {
        color: "#747474"
    },
    trackHeader: {
        marginBottom: 20
    }
})

export default Settings