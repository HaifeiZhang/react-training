import React from 'react'
import { combineReducers, legacy_createStore as createStore } from 'redux'
import { reducer1 } from './reducers/reducer1'
import { reducer2 } from './reducers/reducer2'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
    key: 'root',
    storage,
  }
const reducer = combineReducers({
    reducer1,
    reducer2,
})


const persistedReducer = persistReducer(persistConfig, reducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)


export {store,persistor}
