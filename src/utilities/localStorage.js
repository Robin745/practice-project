
const addToLocal = (id) => {
    let myObj = {};
    const quantity = localStorage.getItem('shopping-cart');
    if (quantity) {
        myObj = JSON.parse(quantity);
    }

    if (myObj[id]) {
        myObj[id] = myObj[id] + 1;
    } else {
        myObj[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(myObj));
};

const getCart = () => {
    let myObj = {};
    const quantity = localStorage.getItem('shopping-cart');
    if (quantity) {
        myObj = JSON.parse(quantity);
    }
    return myObj;
};

export { addToLocal, getCart };