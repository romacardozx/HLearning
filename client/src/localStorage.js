export const loadState = () => {
    try {

        return Object.values(localStorage).map(JSON.parse);

    } catch (error) {

        return [];
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