import { HiCollection, HiHome } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';

function Sidebar() {
	const navLinkClass =
		'flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 p-2 rounded-lg transition-all duration-300';
	return (
		<div className="bg-secondary-0 row-start-1 row-span-2 border-l border-gray-200 p-4">
			<ul className="flex flex-col gap-y-2 ">
				<li>
					<CustomNavLink to="/owner/dashboard">
						<HiHome />
						<span>پیشخوان</span>
					</CustomNavLink>
				</li>
				<li>
					<CustomNavLink to="/owner/projects">
						<HiCollection />
						<span>پروژه‌ها</span>
					</CustomNavLink>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar;

function CustomNavLink({ children, to }) {
	const navLinkClass =
		'flex items-center gap-x-2 hover:bg-primary-100/50 hover:text-primary-900 p-2 rounded-lg transition-all duration-300';
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActive ? ` ${navLinkClass} bg-primary-100/50 text-primary-900` : `${navLinkClass} text-secondary-600`
			}>
			{children}
		</NavLink>
	);
}
