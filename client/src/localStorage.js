export const loadState = () => {
    try {

        var cart = [],
        keys = Object.keys(localStorage),
        i = keys.length;
        
        while (i > 0) {
            
            cart.push(localStorage.getItem(keys[i]));
            i--;
        }
        
        return cart;
    } catch (error) {
        
        console.log(undefined)
    }
}

export const saveState = (course) => {
    try {
        const serialState = JSON.stringify(course);
        localStorage.setItem(((course._id).toString()), serialState)
    } catch (error) {
        console.log(error)
    }
}

export const removeState = (course) => {
    try {
        const serialState = JSON.stringify(course);
        localStorage.removeItem(((course._id).toString()), serialState)
    } catch (error) {
        console.log(error)
    }
}