import { useEffect, useState } from "react";
import {shoppingItemService} from '../services/shoppingService'
import {ShoppingList} from '../cmps/shoppingList.jsx'

const ShoppingCart = () => {
    const [shoppingItems, setShoppingItems] = useState([])

    useEffect(() => {
        getItems()
        
    }, [])

    const getItems = async () => {
        let items = await shoppingItemService.query()
        setShoppingItems(items) 
    }




    return (
        <section className="row mx-auto mt-5">
            {shoppingItems.length ? <ShoppingList shoppingItems={shoppingItems}/> : <h1>Please wait...</h1>}
        </section>
    )
}

export default ShoppingCart;