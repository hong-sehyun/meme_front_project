import {RouteSetup} from './routes/RouteSetup'
import {CookiesProvider} from 'react-cookie'
import {Provider as ReduxProvider} from 'react-redux'
import {useStore} from './store/useStore'
import GlobalStyle from './styled/GlobalStyle'
import {ThemeProvider} from 'styled-components'
import theme from './styled/theme'
import './App.css';
function App() {
  // 리덕스 스토어 생성 함수
  const store = useStore()

  return (
    <CookiesProvider>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouteSetup />
        </ThemeProvider>
      </ReduxProvider>
    </CookiesProvider>
  )
}

export default App
