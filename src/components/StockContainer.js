import React from 'react';
import Stock from './Stock';

function StockContainer({ stocks, handlePortfolio }) {
  if (!stocks) return <h3>No Stocks Currently Displayed...</h3>;
  function addStockToPortfolio(id) {
    handlePortfolio(id);
  }
  const stockElements = stocks.map((stock) => {
    return (
      <Stock
        key={stock.id}
        stock={stock}
        handleStockClick={addStockToPortfolio}
      />
    );
  });
  return (
    <div>
      <h2>Stocks</h2>
      {stockElements}
    </div>
  );
}

export default StockContainer;
