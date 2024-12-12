import { getUser } from '../services/authService';

function Header() {
	const { data } = getUser();

	return <div className="bg-secondary-0 py-4 px-8">Header</div>;
}

export default Header;
