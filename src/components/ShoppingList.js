import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isSearch , setIsSearch] = useState("")
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSeachChange(e){
    setIsSearch(e.target.value)
  }

  const itemsToDisplay = items
  .filter((item) => selectedCategory === "All" ||  item.category === selectedCategory)
  .filter( item => item.name.toLowerCase().includes(isSearch.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSeachChange} search ={isSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;