import React from 'react';
import Stock from './Stock';

function PortfolioContainer({ portfolio, handlePortfolio }) {
  if (!portfolio) return <h3>No Stocks Currently in Portfolio...</h3>;
  function removeStockFromPortfolio(id) {
    handlePortfolio(id);
  }
  const stockElements = portfolio.map((stock) => {
    return (
      <Stock
        key={stock.id}
        stock={stock}
        handleStockClick={removeStockFromPortfolio}
      />
    );
  });
  return (
    <div>
      <h2>My Portfolio</h2>
      {stockElements}
    </div>
  );
}

export default PortfolioContainer;
