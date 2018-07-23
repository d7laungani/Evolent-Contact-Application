import React, { Component } from 'react'
import { Provider } from 'react-redux'
import  Expo from 'expo';
import { AsyncStorage, AppState } from 'react-native'
import { persistStore} from 'redux-persist'


// all routes
import Routes from './src/routes'

// store redux
import store from './src/store'

// history
import { history } from './src/store'

export default class App extends Component {
	
    constructor(props) {
        super(props);
        this.state = {
            appIsReady: false,
            rehydrated: false,
        }
    }
    componentWillMount() {
        this._loadAssetsAsync();
        persistStore(store, {storage: AsyncStorage}, () => {
            this.setState({ rehydrated: true })
        })
    }
    async _loadAssetsAsync() {
        await Expo.Font.loadAsync({
            'tahoma': require('./assets/fonts/Tahoma.ttf'),
            'tahoma-bold': require('./assets/fonts/Tahoma-bd.ttf'),
            'open-sans': require('./assets/fonts/OpenSans.ttf'),
            'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
            'open-sans-italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        });
        this.setState({appIsReady: true});
    }
  render() {
      if (!this.state.appIsReady || !this.state.rehydrated) {
          return <Expo.AppLoading />;
      }
    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
  }
}