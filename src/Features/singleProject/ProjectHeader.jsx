import { HiArrowRight } from 'react-icons/hi';
import useMoveBack from './../../hooks/useMoveBack';

function ProjectHeader({ project }) {
	const moveBack = useMoveBack();
	return (
		<div className="flex items-center gap-x-4 mb-8">
			<button onClick={moveBack}>
				<HiArrowRight />
			</button>
			<div className="flex gap-x-1">
				<p>لیست درخواست‌های</p> <h1 className="font-bold text-secondary-900 underline underline-offset-8">{project.title}</h1>
			</div>
		</div>
	);
}

export default ProjectHeader;
