import { useEffect, useMemo, useState } from "react";

const useGetOrderEvents = (code) => {
  const [events, setEvents] = useState({});
  const [loading, setLoading] = useState(true);
  const url = "https://rastreiame.herokuapp.com/track";

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (code.length == 0) return;
        const res = await fetch(`${url}/${code}`);
        const data = await res.json();
        const events = data[0].eventos;
        setEvents(events);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getOrders();
  }, [code]);

  return {
    events,
    loading,
  };
};

export default useGetOrderEvents;
