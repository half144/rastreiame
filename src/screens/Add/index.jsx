import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput, Button } from "react-native-paper"
import Header from "../../components/Header";
import { useOrders } from "../../context/OrdersContext";
import useAddOrder from "../../hooks/useAddOrder";

const Add = ({ navigation }) => {
    const { setOrderItems } = useOrders()
    const [name, setName] = useState()
    const [code, setCode] = useState()
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const { addOrder } = useAddOrder()

    const handleSubmit = async () => {
        if (!name || !code) {
            setError("Preencha todos os campos")
            setTimeout(() => {
                setError()
            }, 2000);
            return
        }
        if (code.length < 13) {
            setError("Código inválido")
            setTimeout(() => {
                setError()
            }, 2000);
            return
        }
        setLoading(true)
        await addOrder(name, code)
        setLoading(false)
        setOrderItems(prev => [{ name, code }, ...prev])
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <Header />
            <Text style={styles.text}>Adicionar produto</Text>
            <View style={styles.form}>
                <TextInput placeholder="Meu produto" mode="outlined" label="Nome da sua encomenda" onChangeText={setName} />
                <TextInput placeholder="NB8437262432BR" maxLength={13} mode="outlined" label="Código de rastreio" onChangeText={setCode} />
                <TouchableOpacity activeOpacity={0.8} onPress={handleSubmit}>
                    <Button loading={loading} style={{ marginTop: 10, padding: 6 }} mode="contained">Adicionar</Button>
                </TouchableOpacity>
                <Text style={{ textAlign: "center", marginTop: 20, color: "#FFF", fontWeight: "bold" }}>{error}</Text>
            </View>

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#151515",
        paddingHorizontal: 25
    },
    text: {
        color: "#FFF",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 30
    },
    form: {
        flex: 1,
    }
})

export default Add
