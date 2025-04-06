import { useState } from 'react';

const Add_item = ({ onAdd_item }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd_item = () => {
    if (inputValue.trim() !== '') {
      onAdd_item(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd_item();
    }
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter an item"
      />
      <button onClick={handleAdd_item}>Add Item</button>
    </div>
  );
};

export default Add_item;