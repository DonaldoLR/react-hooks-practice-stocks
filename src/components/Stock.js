import React from 'react';

function Stock({ stock: { id, ticker, name, type, price }, handleStockClick }) {
  function clickHandler() {
    handleStockClick(id);
  }
  return (
    <div>
      <div className='card'>
        <div className='card-body' onClick={clickHandler}>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>
            {ticker}: {price}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
