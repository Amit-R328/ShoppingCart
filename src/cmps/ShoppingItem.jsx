import { useState, useRef, useEffect } from "react"

export const ShoppingItem = ({ item, setBoughtItems, boughtItems, setPrice }) => {
    const [qy, setQy] = useState(0)
    const [itemPrice, setItemPrice] = useState(0)
    const inputRef = useRef()

    useEffect(() => {
        for(let i = 0; i < boughtItems.length; i++) {
            if(boughtItems[i].name === item.title){
                setQy(boughtItems[i].quantity)
                setItemPrice(boughtItems[i].total)
                inputRef.current.value = boughtItems[i].quantity
                break
            }
        }
    },[])

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
        let isItemExist = false
        let boughtItemsCopy = [...boughtItems]
        for (let i = 0; i < boughtItemsCopy.length; i++) {
            if (boughtItemsCopy[i].name === items.name) {
                isItemExist = true
                boughtItemsCopy[i].quantity = +items.quantity
                boughtItemsCopy[i].total = +(+items.quantity * +items.price)
                break
            }
        }
        if (!isItemExist) boughtItemsCopy.push(items)
        setBoughtItems(boughtItemsCopy)
        console.log(boughtItemsCopy)
        setItemPrice(items.total)
    }

    const addItem = (event) => {
        setQy(event.target.value)
    }

    const removeItem = () => {
        setBoughtItems(boughtItems.filter(boughtItem => boughtItem.name !== item.title))
        setQy(0)
        setItemPrice(0)
        inputRef.current.value = ''
    }

    return (
        <div className="col-md-4 card p-0 mb-3 shadow-sm border-0">
            <div className="row">
                <div className="col-md-4 product_img">
                    <img src={`${item.image}`} className="card-img" alt="..." />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <p className="product-price"><b>Price:</b> {item.price}$</p>
                        <h5 className="product-title">{item.title}</h5>
                        <p className="product-text"> {item.description}</p>
                        <form onSubmit={(event, item) => changeQy(event, item)}>
                            <label htmlFor="qy">Add to cart</label>
                            <input ref={inputRef} id="qy" name="qy" type="number" min={0} onChange={addItem} />
                            <button className="btn btn-primary" type="submit">Add</button>
                        </form>
                        <h4>Item quantity: {qy}</h4>
                        <h4>total Price: {itemPrice}$</h4>
                        <button className="btn btn-danger" onClick={removeItem}>Remove</button>

                    </div>
                </div>
            </div>
        </div>
    )
}