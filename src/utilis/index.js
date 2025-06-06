import toast from "react-hot-toast"

export const getFavourites = () => {
    const favourites = localStorage.getItem('favourites')
    if (favourites) return JSON.parse(favourites)
    return []
}
export const addFavourite = phone => {
    const favourites = getFavourites()
    const isExist = favourites.find(p => p.id === phone.id)
    if (isExist) return toast.error(`Appointment with ${phone.name} Already Booked `);
    favourites.push(phone)
    toast.success(`Appointment with ${phone.name} Booked successfully!!!`)
    // console.log(favourites);
    localStorage.setItem('favourites', JSON.stringify(favourites))
}

export const removeFavourites = id => {
    const favourites = getFavourites()
    const remainingFavourites = favourites.filter(phone => phone.id !== id)
    localStorage.setItem('favourites', JSON.stringify(remainingFavourites))
    toast.error(`Appointment  canceled !!!`)
}




export const getCart = () => {
    const cart = localStorage.getItem('cart')
    if (cart) return JSON.parse(cart)
    return []
}
export const addToCart = phone => {
    const cart = getCart()
    const isExist = cart.find(p => p.id === phone.id)
    if (isExist) return toast.error('Phone already added to cart');
    cart.push(phone)
    toast.success('Phone added to Cart successfully!!!')

    // console.log(carts);
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeCart = id => {
    const cart = getCart()
    const remainingCart = cart.filter(phone => phone.id !== id)
    localStorage.setItem('cart', JSON.stringify(remainingCart))
}