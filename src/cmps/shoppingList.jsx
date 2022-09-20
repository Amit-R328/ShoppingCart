import { ShoppingItem } from "./ShoppingItem";


export const ShoppingList = ({shoppingItems, setBoughtItems, boughtItems, setPrice}) => {
   
    return (
        <div className="shoppingList">
            {shoppingItems.map(item => <ShoppingItem item={item} setBoughtItems={setBoughtItems} boughtItems={boughtItems} setPrice={setPrice}/>)}
        </div>
    ) 
};