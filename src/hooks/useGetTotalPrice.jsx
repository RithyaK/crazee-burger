import { useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(0);

  function incremente() {
    setCount(count + 1);
  }

  const doubleCount = count * 2;
  //   const { totalPrice, setTotalPrice, basketList } = useInfoContext();
  //   console.log(basketList);
  //   const getTotalPrice = () => {
  //     let totalPriceUpdated = 0;
  //     for (const productAdded of basketList) {
  //       console.log("boucle");
  //       const total = productAdded.quantity * productAdded.price;
  //       totalPriceUpdated = totalPriceUpdated + total;
  //     }
  //     setTotalPrice(totalPriceUpdated);
  //   };
  return { count, incremente, doubleCount };
};
