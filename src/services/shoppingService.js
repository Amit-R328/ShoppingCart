export const shoppingItemService = {
    query,
}

async function query() {
    let items = await fetch('https://fakestoreapi.com/products').then(response => response.json())
    return items 
}