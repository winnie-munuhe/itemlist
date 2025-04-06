import { useState } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Add_item from './components/Add_item.jsx';
import Item_list from './components/Item_list.jsx';

const App = () => {
  const [items, setItems] = useState([]);

  const handleAdd_item = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div className="app-container">
      <Header />
      <Add_item onAdd_item={handleAdd_item} />
      <Item_list items={items} />
    </div>
  );
};

export default App;
