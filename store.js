import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducer = () => {};
export default function configureStore() {
	const loggerMiddleware = createLogger();
	return {
		...createStore(reducer, storeEnhancers(applyMiddleware(loggerMiddleware))),
	};
}
