import AsyncStorage from "@react-native-async-storage/async-storage";
import useGetStatus from "../hooks/useGetOrderStatus";

const { createContext, useContext, useState, useEffect } = require("react");


const OrdersContext = createContext()

export const useOrders = () => {
    return useContext(OrdersContext)
}

export const OrdersProvider = ({ children }) => {
    const [ordersItems, setOrderItems] = useState([])
    const { status, loading } = useGetStatus(ordersItems)

    useEffect(() => {
        const getOrdersFromStorage = async () => {
            // await AsyncStorage.removeItem("orders")
            const orders = await AsyncStorage.getItem("orders");
            if (orders) {
                setOrderItems(JSON.parse(orders));
            }
        };
        getOrdersFromStorage();
    }, []);

    return (
        <OrdersContext.Provider value={{ status, loading, setOrderItems }}>
            {children}
        </OrdersContext.Provider>
    )
}