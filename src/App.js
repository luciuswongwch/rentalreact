import './App.css';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import HomeComponent from './components/HomeComponent';
import PricingComponent from './components/PricingComponent';
import MoveTopComponent from './components/MoveTopComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import ErrorComponent from './components/ErrorComponent';
import ContactComponent from './components/ContactComponenet';
import PropertyListingComponent from './components/PropertyListingComponent';
import PropertyDetailComponent from './components/PropertyDetailComponent';
import { useAuth } from './security/AuthContext';

function App() {

	let location = useLocation();

	function AuthenticatedRoute({ children }) {
		const authContext = useAuth();
		if (authContext.authenticated) {
			return children;
		} else {
			return <Navigate to="/login" />;
		}
	}

	return (
		<>	
			{location.pathname !== '/login' && location.pathname !== '/register' && <HeaderComponent />}
				<Routes>
					{/* <Route path='/' element={<AuthenticatedRoute><HomeComponent /></AuthenticatedRoute>}></Route> */}
					<Route path="/" element={<HomeComponent />}></Route>
					<Route path="/pricing" element={<AuthenticatedRoute><PricingComponent /></AuthenticatedRoute>}></Route>
					<Route path="/login" element={<LoginComponent />}></Route>
					<Route path="/register" element={<RegisterComponent />}></Route>
					<Route path="/contact" element={<ContactComponent />}></Route>
					<Route path="/properties" element={<PropertyListingComponent />}></Route>
					<Route path="/properties/:id" element={<PropertyDetailComponent />}></Route>
					<Route path="/*" element={<ErrorComponent />}></Route>
				</Routes>
			{location.pathname !== '/login' && location.pathname !== '/register' && <FooterComponent />}
			<MoveTopComponent />
		</>
	);
}

export default App;
