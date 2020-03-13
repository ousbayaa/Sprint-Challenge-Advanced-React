import {useEffect} from 'react';
import UseLocalStorage from './UseLocalStorage.js';


const DarkMode = (initialValue) => {
    const [darkMode, setDarkMode] = UseLocalStorage('DarkMode', initialValue)
    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('DarkMode')
        } else {
            document.body.classList.remove('DarkMode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
}

export default DarkMode