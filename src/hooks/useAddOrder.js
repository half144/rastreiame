import AsyncStorage from "@react-native-async-storage/async-storage";

const useAddOrder = () => {
  const addOrder = async (name, code) => {
    try {
      let hasSome = true;
      const order = {
        name,
        code,
      };
      let orders = await AsyncStorage.getItem("orders");
      if (!orders) {
        orders = [];
        hasSome = false;
      }
      if (hasSome) orders = JSON.parse(orders);
      orders.push(order);
      await AsyncStorage.setItem("orders", JSON.stringify(orders));
    } catch (error) {
      console.log(error);
    }
  };
  return { addOrder };
};

export default useAddOrder;
