import { HiUser } from 'react-icons/hi';
import { getUser } from '../services/authService';

function Header() {
	const { data } = getUser();

	return <div className="bg-secondary-0 py-4 px-8 flex justify-between items-center">
		<img src="../public/logo.png" alt="" className='w-28' />
		<div>
			<button className='text-md font-medium flex items-center justify-between gap-2 border border-slate-200 py-2 px-4 rounded-md'>
				<HiUser/> عملیات حساب
			</button>
		</div>
	</div>;
}

export default Header;
