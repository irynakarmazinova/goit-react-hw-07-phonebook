import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
// import logger from 'redux-logger';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import { items, loading } from "./contacts/contacts-reducer";
import { filter } from "./filter/filter-reducer";

// import { contacts } from "./contacts/contacts-reducer";

// console.log(process.env.NODE_ENV);

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage,
//   blacklist: ['filter'],
// };

const middleware = [
  ...getDefaultMiddleware(),
  // {
  // serializableCheck: {
  //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  // },
  // }
  // logger,
];

const rootReducer = combineReducers({
  items,
  filter,
  loading,
});

export const store = configureStore({
  reducer: {
    contacts: rootReducer,
    // contacts: persistReducer(contactsPersistConfig, rootReducer),
  },
  // reducer: combineReducers({
  //   contacts,
  // }),
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

// export const persistor = persistStore(store); //обертка над сторам котор будет реализ обновл и запись локалстораджа
// ------------------------------------------
// thunk - для раб с асинк запросами, доп прослойка, дефолтный способ раб с http запросами в редаксе
