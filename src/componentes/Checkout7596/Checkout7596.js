import React, { useEffect, useState } from "react";
import './Checkout7596.css'

const Checkout7596 = ({ meal, getTotal, total }) => {
  const [error, setError] = useState('')

  const validateLength = (event) => {
    const { target } = event
    const { value } = target

    if (value.length <= 5 || value.length >= 12 ) {
      setError(`should be between 5 or 12 characteres`)
    } else {
      setError('')
    }
  }

  return (
    <form className='form-container'>
      <div className='form-content'>
        <div className="inputs-container">
          <div className="input-content">
            <div>
              <label className="input-label">Customer Name</label>
            </div>
            <input
              required
              onChange={validateLength}
            />
            <div className="error">{error}</div>
          </div>
          
          <div className="input-content"> 
            <div>
              <label className="input-label">City</label>
            </div>
            <input
              onChange={validateLength}
            />
            <div className="error">{error}</div>
          </div>
        </div>

      </div>
        <div className='buttons-container'>
          <button
          className="form-button"
            type="submit"
            id="removeQuantity"
            onClick={() => {}}
          >
            Cancel
          </button>
          <button
          className="form-button-confirm"
            type="submit"
            id="addQuantity"
            onClick={() => {}}
          >
            Confirm
          </button>
        </div>
    </form>
  );
}

export default Checkout7596;