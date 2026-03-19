import { createContext, useState } from "react";

export const ThemeContext = createContext('RU') // создаем контекст, потом будем подключаться к нему в других компонентах

export const ThemeProvider = ({children}) => { 

    const [language , setLanguage] = useState('RU')

    const changeLanguage = () => {
        setLanguage(language === 'RU' ? 'EN' : 'RU')
    }

    const value = { // то что мы хотим передать
        language,
        changeLanguage,
    }

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}

// В main.jsx обернуть приложение:

// <ThemeProvider>
//   <App />
// </ThemeProvider>