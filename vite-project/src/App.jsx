import { useContext } from 'react'
import './App.css'
import { ThemeContext } from './CONTEXT/context.jsx'

function App() {
  
  const { language, changeLanguage } = useContext(ThemeContext)

  return (
    <main>
      <div className="first-block">
         { language === 'RU' ? 'Привет! Как твои дела ? -' : 'Hi! how are you doing? -' } {language}
      </div>

      <button onClick={changeLanguage}>CHANGE LANG</button>
    </main>
  )
}

export default App
