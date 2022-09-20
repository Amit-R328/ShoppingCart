import { ShoppingItem } from "./ShoppingItem";


export const ShoppingList = ({shoppingItems, setBoughtItems, boughtItems, setPrice}) => {
   
    return (
        <div className="container shoppingList">
            <div className="row">
            {shoppingItems.map(item => <ShoppingItem  key={item.title} item={item} setBoughtItems={setBoughtItems} boughtItems={boughtItems} setPrice={setPrice}/>)}
            </div>
        </div>
    ) 
};