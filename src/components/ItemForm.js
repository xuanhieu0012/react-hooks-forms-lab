import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [category, setCategory] =useState("Produce")
  const [name, setName ] =useState("")

   function handleName(e){
     setName(e.target.value)
   }
   function handleSelect(e){
     setCategory(e.target.value)
   }


  function handleSubmitItems(e){
    e.preventDefault()
    const newItem ={
      id: uuid(),
      name: name,
      category: category
    }
    onItemFormSubmit(newItem)
    
    setName("")
    

  }
  return (
    <form className="NewItem" onSubmit={handleSubmitItems}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleName}  />
      </label>

      <label>
        Category:
        <select name={category} onChange={handleSelect}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;