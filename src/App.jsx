import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// import First from './First'
// import Second from './Second'
import MyRoutes from './MyRoutes'
import { MyContextProvider } from '../hooks/MyContext'

export const MyThemeContext = createContext()

function App () {
  let [theme, setTheme] = useState('light')

  return (
    <>
    {/* <First />
    <Second /> */}
    <MyThemeContext.Provider value= {{theme, setTheme}}>
       <MyContextProvider> 
        <MyRoutes/>
       </MyContextProvider> 
    </MyThemeContext.Provider>

    </>
  )
}

export default App