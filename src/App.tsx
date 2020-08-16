import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import Calendar from './features/calendar';

const App = () => {
	return (
		<ThemeProvider>
			<CSSReset />
			<Calendar />
		</ThemeProvider>
	);
}

export default App;
