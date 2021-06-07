import React, { useState, useEffect } from 'react';
import StockContainer from './StockContainer';
import PortfolioContainer from './PortfolioContainer';
import SearchBar from './SearchBar';
import Stock from './Stock';

function MainContainer() {
  const [stockList, setStockList] = useState([]);
  const [myPortfolio, setMyPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState('Alphabetically');
  const [filterBy, setFilterBy] = useState('Tech');
  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then((res) => res.json())
      .then(setStockList);
  }, []);
  function handleAddingPortfolio(id) {
    const isStockInPortfolio = myPortfolio.find((stock) => {
      return stock.id === id;
    });
    const selectedStock = stockList.find((stock) => {
      return stock.id === id;
    });
    if (isStockInPortfolio === undefined) {
      setMyPortfolio([...myPortfolio, selectedStock]);
    }
    return;
  }
  function handleRemovingPortfolio(id) {
    const updatedPortfolio = myPortfolio.filter((stock) => {
      return stock.id !== id;
    });
    setMyPortfolio(updatedPortfolio);
  }

  const sortedStocks = [...stockList].sort((a, b) => {
    if (sortBy === 'Alphabetically') {
      const firstObj = a.name.toLowerCase();
      const secondObj = b.name.toLowerCase();
      return firstObj < secondObj ? -1 : firstObj > secondObj ? 1 : 0;
    } else {
      return a.price - b.price;
    }
  });
  const filteredStocks = sortedStocks.filter((stock) => {
    return stock.type === filterBy;
  });
  return (
    <div>
      <SearchBar setSortBy={setSortBy} setFilterBy={setFilterBy} />
      <div className='row'>
        <div className='col-8'>
          <StockContainer
            stocks={filteredStocks}
            handlePortfolio={handleAddingPortfolio}
          />
        </div>
        <div className='col-4'>
          <PortfolioContainer
            portfolio={myPortfolio}
            handlePortfolio={handleRemovingPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
