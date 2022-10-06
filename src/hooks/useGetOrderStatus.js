import { useEffect, useState } from "react";

const useGetStatus = (orders) => {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState({});
  const url = "https://rastreiame.herokuapp.com/track";

  useEffect(() => {
    const getStatus = async () => {
      setLoading(true);
      Promise.all(
        orders.map(async (order) => {
          const statusProduct = await fetch(`${url}/${order.code}`)
            .then((res) => res.json())
            .catch((err) => console.log(err));
          const statusOrder = await statusProduct[0].eventos[0].descricao;
          const finalObj = { name: order.name, code: order.code, statusOrder };
          return finalObj;
        })
      )
        .then((obj) => setStatus(obj))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    };
    getStatus();
  }, [orders]);

  return {
    status,
    loading,
  };
};

export default useGetStatus;
