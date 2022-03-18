import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items)

  function handleSelect(e){
    
      handleFilter(e.target.value)  
      console.log(e.target.value)
  }

  function handleFilter(category) {
    if (category === 'All') {
      setSelectedCategory(items)
    }else{
      const newItemsArray = items.filter((item) => item.category === category);
      setSelectedCategory(newItemsArray);
      console.log(newItemsArray);
      console.log(selectedCategory);
    }
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelect}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className={"Items"}>
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
