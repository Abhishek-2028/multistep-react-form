import rootreducer from './reducer/index'

import { legacy_createStore as createStore } from "redux";

const store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;