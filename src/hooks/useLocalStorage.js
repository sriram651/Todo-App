export const useLocalStorage = (key) => {
    const setItem = (value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log(e.message);
        }
    }

    const getItem = () => {
        try {
            const item = JSON.parse(localStorage.getItem(key));
            return item;
        } catch (e) {
            console.log(e.message);
            return undefined;
        }
    }

    const removeItem = () => {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.log(e.message);
        }
    }

    return { getItem, setItem, removeItem };
}