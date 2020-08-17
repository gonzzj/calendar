import React from 'react';
import './scss/style.scss';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import Calendar from './calendar';

const store = createStore(
	reducer,
	composeWithDevTools()
);

const App = () => {
	return (
		<Provider store={store}>
			<div className={"container mt-4"}>
				<Calendar />
			</div>
		</Provider>
	);
}

export default App;
