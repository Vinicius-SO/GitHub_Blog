import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyles } from './styles/global'
import { Header } from './components/Header'

// import Cover from './assets/Cover.svg'


export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Header/>
    </ThemeProvider>
  )
}