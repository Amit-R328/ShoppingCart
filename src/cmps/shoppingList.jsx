import { ShoppingItem } from "./ShoppingItem";


export const ShoppingList = ({shoppingItems}) => {
   
    return (
        <div className="col-4">
            {shoppingItems.map(item => <ShoppingItem item={item}/>)}
        </div>
    ) 
};