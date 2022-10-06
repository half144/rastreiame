import { useEffect, useState } from "react";

const useGetOrders = (code) => {
  const [orders, setOrders] = useState({});
  const url = "https://rastreiame.herokuapp.com/track";

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (code.length == 0) return;
        const res = await fetch(`${url}/${code}`);
        const data = await res.json();
        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [code]);

  return {
    orders,
  };
};

export default useGetOrders;
