import { useState } from "react"

export const ShoppingItem = ({ item, setBoughtItems, boughtItems, setPrice }) => {
    const [qy, setQy] = useState(0)
    const [itemPrice, setItemPrice] = useState(0)

    const changeQy = (event) => {
        setItemPrice(0)
        console.log(event)
        event.preventDefault()
        let items = {
            name: item.title,
            price: +item.price,
            quantity: +qy,
        }
        items.total = +(items.price * items.quantity)
        console.log(items)
        if (boughtItems.includes(items.name)) {
            setBoughtItems(boughtItems.map(bought => {
                if (bought.name === items.title) {
                    return {
                        ...bought, quantity: items.quantity, total: +(items.price * items.quantity)
                    }
                }
                return bought
            }))
        } else setBoughtItems([...boughtItems, items])
        setItemPrice(items.total)
    }

    const addItem = (event) => {
        setQy(event.target.value)
    }

    const removeItem = () => {
        setBoughtItems(boughtItems.filter(boughtItem => boughtItem.name !== item.title))
        setQy(0)
        setItemPrice(0)
    }

    return (
        <div className=" col-12 card p-0 mb-3 shadow-sm border-0">
            <div class="row">
                <div class="col-4 product_img">
                    <img src={`${item.image}`} class="card-img" alt="..." />
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <p class="product-price"> {item.price}</p>
                        <h5 class="product-title">{item.title}</h5>
                        <p class="product-text"> {item.description.slice(0, 80)}</p>
                        <form onSubmit={(event, item) => changeQy(event, item)}>
                            <label htmlFor="qy">Add to cart</label>
                            <input id="qy" name="qy" type="number" min={0} onChange={addItem} />
                            <button type="submit">Add</button>
                        </form>
                        <h4>Item quantity: {qy}</h4>
                        <h4>total Price: {itemPrice}</h4>
                        <button onClick={removeItem}>Remove</button>

                    </div>
                </div>
            </div>
        </div>
    )
}