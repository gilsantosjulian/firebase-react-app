import React, { useEffect, useState } from "react";
import MealsItem from "../MealsItem/MealsItem";
import Checkout7596 from "../../Checkout7596/Checkout7596";
import { getAll, del } from "../../../services/service";
import './MealsList.css'

const MealsList = () => {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalObj, setTotalObj] = useState({});

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    setTotal(Object.values(totalObj).reduce((a, b) => a + b, 0))
  }, [totalObj]);

  const getTotal = ({ value, itemId }) => {
    setTotalObj({ ...totalObj, [itemId]: value })
  }

  const getItems = async () => {
    const data = await getAll();
    console.log(data.docs);
    setItems(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  console.log({ totalObj });

  return (
    <div className="content">
      <div className="content-body">
        {items.map((meal, index) => {
          return (
            <MealsItem
              meal={meal}
              getTotal={getTotal}
              total={total}
            />
          );
        })}
        <div className="total-amount-container">
          <h3 className="total-amount">Total Amount</h3>
          <h3 className="total-amount">${total}</h3>
        </div>
      </div>
      <Checkout7596 />
    </div>
  );
}

export default MealsList;