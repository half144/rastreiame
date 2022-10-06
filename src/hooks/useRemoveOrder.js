import AsyncStorage from "@react-native-async-storage/async-storage";
import { useOrders } from "../context/OrdersContext";

const useRemoveOrder = () => {
  const { setOrderItems } = useOrders();

  const removeOrder = async (code) => {
    try {
      let orders = await AsyncStorage.getItem("orders");
      orders = JSON.parse(orders);
      const removedItem = orders.find((order) => order.code == code);
      const updatedOrders = orders.filter((order) => order != removedItem);
      await AsyncStorage.setItem("orders", JSON.stringify(updatedOrders));
      setOrderItems(updatedOrders);
    } catch (error) {
      console.log(error);
    }
  };
  return { removeOrder };
};

export default useRemoveOrder;
