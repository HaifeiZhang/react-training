import React from 'react'
import SideMenu from './views/SideMenu'
import TopHeader from './views/TopHeader'
import { Provider } from 'react-redux'
import {store,persistor} from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  
  return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <SideMenu></SideMenu>
        <TopHeader/>
        </PersistGate>
      </Provider>
  )
}


