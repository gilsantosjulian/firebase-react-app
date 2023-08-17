import React, { useEffect, useState } from "react";
import './MealsItem.css'

const MealsItem = ({ meal, getTotal, total }) => {
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    getTotal({ value: quantity * meal.price, itemId: meal.id })
  }, [quantity])

  const handleQuantityAdd = () => {
    setQuantity(quantity + 1)
  }

  const handleQuantitySubs = () => {
    if(quantity < 0) {
      setQuantity(0)
    } else {
      setQuantity(quantity - 1)
    }

    setQuantity(quantity - 1)
  }

  return (
    <div className='item-container'>
      <div className='item-content'>
        <h3>{meal.name}</h3>
        <div>
          <p>{meal.description}</p>
            <div className="item-body">
              <div>
                <label className='item-price'>${meal.price}</label>
                <label className='quantity'>x {quantity}</label>
              </div>

              <div className='buttons-container'>
                <button
                  type="submit"
                  id="removeQuantity"
                  onClick={handleQuantitySubs}
                >
                  -
                </button>
                <button
                  type="submit"
                  id="addQuantity"
                  onClick={handleQuantityAdd}
                >
                  +
                </button>
              </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default MealsItem;