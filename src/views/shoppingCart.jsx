import { useEffect, useState } from "react";
import { shoppingItemService } from '../services/shoppingService'
import { ShoppingList } from '../cmps/shoppingList.jsx'

const ShoppingCart = () => {
    const [shoppingItems, setShoppingItems] = useState([])
    const [boughtItems, setBoughtItems] = useState([])
    const [price, setPrice] = useState(0)
    const [shippingPrice, setShippingPrice] = useState(15)

    useEffect(() => {
        getItems()

    }, [])

    useEffect(() => {
        getPrice()
        getShippingPrice()
    },[boughtItems])

    const getItems = async () => {
        let items = await shoppingItemService.query()
        setShoppingItems(items)
    }


    const getPrice = () => {
        let totalPrice = boughtItems.reduce((pre, item) => pre + item.total,0)
        setPrice(totalPrice)
    }

    const getShippingPrice = () => {
        let itemsQy = boughtItems.map(item => item.qy)
        let sumItem = itemsQy.reduce((pre, item) => pre + item, 0)
        if (sumItem > 4 ) setShippingPrice(20)
        else setShippingPrice(15)
    }
    return (
        <main>
            <section className="shoppingCart">
                {shoppingItems.length ? <ShoppingList shoppingItems={shoppingItems} setBoughtItems={setBoughtItems} boughtItems={boughtItems} setPrice={setPrice}/>: <h1>Please wait...</h1>}
            </section>
            <section className="summery">
                <h4>Price: {price}</h4>
                <h4>Shipping Price: {shippingPrice}</h4>
            </section>
        </main>
    )
}

export default ShoppingCart;