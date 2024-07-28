import MainNavigation from './navigation/Navigation'

//Redux Toolkit
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
    return (
        <Provider store={store}>
            <MainNavigation />
        </Provider>
    )
}

export default App
