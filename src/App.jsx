import { Navigate, Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import CompleteProfile from './pages/CompleteProfile.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AppLayout from './ui/AppLayout.jsx';
import OwnerDashboard from './pages/OwnerDashboard.jsx';
import Projects from './pages/Projects.jsx';
import SingleProject from './pages/SingleProject';

function App() {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			<Toaster />
			<Routes>
				<Route path="/auth" element={<Auth />} />
				<Route path="/complete-profile" element={<CompleteProfile />} />
				<Route path="/owner" element={<AppLayout />}>
					<Route index element={<Navigate to="dashboard" replace />} />
					<Route path="dashboard" element={<OwnerDashboard />} />
					<Route path="projects" element={<Projects />} />
					<Route path="projects/:id" element={<SingleProject />} />
				</Route>
				<Route path="/" element={<Home />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</QueryClientProvider>
	);
}

export default App;
