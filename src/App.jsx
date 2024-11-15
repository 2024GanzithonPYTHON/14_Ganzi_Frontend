import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

function App() {
	return (
		<>
			<BrowserRouter
				future={{
					v7_startTransition: true,
					v7_relativeSplatPath: true,
				}}
			>
				<GlobalStyles />
				<ThemeProvider theme={theme}>
					<AppRouter />
				</ThemeProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
