import { HiArrowRight } from 'react-icons/hi';
import useMoveBack from './../hooks/useMoveBack';
function NotFound() {
	const moveBack = useMoveBack();
	return (
		<div className="container xl:max-w-screen-xl">
			<div className="sm:max-w-sm flex justify-center">
				<div className="p-8">
					<h1 className="text-2xl font-bold text-red-500 mb-4">404 پیدا نشد!</h1>
					<h2 className="text-xl font-medium text-secondary-700 mb-8">صفحه‌ای که در آن هستید، پیدا نشد</h2>
					<button onClick={moveBack} className="flex items-center gap-x-4">
						<HiArrowRight />
						بازگشت
					</button>
				</div>
			</div>
		</div>
	);
}

export default NotFound;
