import Table from '../../ui/Table';
import truncateText from '../../utils/truncateText';
import toLocalDateShort from '../../utils/toLocalDateShort';
import { toPersianNumbersWithComma } from '../../utils/toPersianNumbers';
import { HiOutlineTrash } from 'react-icons/hi';
import { TbPencilMinus } from 'react-icons/tb';
import Modal from '../../ui/Modal';
import { useState } from 'react';
import ConfirmDelete from '../../ui/ConfirmDelete';

function ProjectRow({ project, index }) {
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState(false);

	return (
		<Table.Row key={project._id}>
			<td>{index + 1}</td>
			<td>{truncateText(project.title, 30)}</td>
			<td>{project.category.title}</td>
			<td>{toPersianNumbersWithComma(project.budget)}</td>
			<td>{toLocalDateShort(project.deadline)}</td>
			<td>
				<div className="flex flex-wrap items-center gap-2 max-w-[200px]">
					{project.tags.map((tag) => (
						<span className="badge badge--secondary" key={tag}>
							{tag}
						</span>
					))}
				</div>
			</td>
			<td>{project.freelancer?.name || '-'}</td>
			<td>
				{project.status === 'OPEN' ? (
					<span className="badge badge--success">باز</span>
				) : (
					<span className="badge badge--danger">بسته</span>
				)}
			</td>
			<td>
				<div className="flex items-center gap-x-4">
					<>
						<button onClick={() => setIsEditOpen(true)}>
							<TbPencilMinus className="w-5 h-5 text-primary-900" />
						</button>
						<Modal onClose={() => setIsEditOpen(false)} title={`ویرایش ${project.title}`} open={isEditOpen}>
							this is modal
						</Modal>
					</>
					<>
						<button onClick={() => setIsDeleteOpen(true)}>
							<HiOutlineTrash className="w-5 h-5 text-error" />
						</button>
						<Modal onClose={() => setIsDeleteOpen(false)} title={`حذف ${project.title}`} open={isDeleteOpen}>
							<ConfirmDelete
								resourceName={project.title}
								onClose={() => setIsDeleteOpen(false)}
								onConfirm={() => {}}
								disabled={false}
							/>
						</Modal>
					</>
				</div>
			</td>
		</Table.Row>
	);
}

export default ProjectRow;