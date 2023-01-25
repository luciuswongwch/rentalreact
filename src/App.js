import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import PricingComponent from './components/PricingComponent';
import MoveTopComponent from './components/MoveTopComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ErrorComponent from './components/ErrorComponent';

function App() {

	let location = useLocation();

	return (
		<>	
			{location.pathname !== '/login' && location.pathname !== '/register' && <HeaderComponent />}
				<Routes>
					{/* <Route path='/' element={<AuthenticatedRoute><HomeComponent /></AuthenticatedRoute>}></Route> */}
					<Route path="/" element={<HomeComponent />}></Route>
					<Route path="/pricing" element={<PricingComponent />}></Route>
					<Route path="/login" element={<LoginComponent />}></Route>
					<Route path="/register" element={<RegisterComponent />}></Route>
					<Route path="/*" element={<ErrorComponent />}></Route>
				</Routes>
			{location.pathname !== '/login' && location.pathname !== '/register' && <FooterComponent />}
			<MoveTopComponent />
		</>
	);
}

export default App;
