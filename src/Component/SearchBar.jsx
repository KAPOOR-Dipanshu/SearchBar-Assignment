// SearchBar.js
import React, { useState, useEffect } from 'react';
import './SearchBar.css'; // Create this CSS file for styling

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const [chips, setChips] = useState([]);
  const [filteredItems, setFilteredItems] = useState([
    'Dipanshu',
    'Shivkant',
    'Akshat',
    'Akash',
    'Ayush',
    'Gaurav',
    // Add your list of items here
  ]);

  const [isInputFocused, setIsInputFocused] = useState(false);

  const allItems = [
    '🥹 Dipanshu',
    '😎 Shivkant',
    '🤓 Akshat',
    '😛 Akash',
    '😂 Ayush',
    '😅 Gaurav',
  ];

  useEffect(() => {
    if (inputValue !== '') {
      const filtered = filteredItems.filter((item) =>
        item.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredItems(filtered);
    } else {
      // If input is empty, show all items except the chips
      const result = allItems.filter((item) => !chips.includes(item));
      setFilteredItems(result);
    }
  }, [inputValue, chips]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleItemClick = (item) => {
    // Add the clicked item to the chips
    setChips([...chips, item]);

    // Remove the clicked item from the filtered list
    const updatedFilteredItems = filteredItems.filter((i) => i !== item);
    setFilteredItems(updatedFilteredItems);

    // Clear the input field
    setInputValue('');
  };

  const handleChipRemove = (chip) => {
    // Remove the chip from the chips array
    const updatedChips = chips.filter((item) => item !== chip);
    setChips(updatedChips);

    // Add the removed item back to the filtered list
    setFilteredItems([...filteredItems, chip]);
  };

  return (
    <div className="search-bar-container">
      <div className="chips-container">
        {chips.map((chip, index) => (
          <div key={index} className="chip">
            {chip}
            <span
              className="remove-icon"
              onClick={() => handleChipRemove(chip)}
            >
              x
            </span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        // onBlur={handleInputBlur}
        placeholder="Type to search..."
      />
      {isInputFocused && (
        <ul className="items-list">
          {filteredItems.map((item, index) => (
            <li key={index} onClick={() => handleItemClick(item)}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
