import { useState } from 'react';
import Table from '../../ui/Table';
import truncateText from '../../utils/truncateText';
import { toPersianNumbersWithComma } from './../../utils/toPersianNumbers';
import Modal from './../../ui/Modal';

const statusStyle = [
	{
		label: 'رد شده',
		className: 'badge--danger',
	},
	{
		label: 'در انتظار تایید',
		className: 'badge--secondary',
	},
	{
		label: 'تایید شده',
		className: 'badge--success',
	},
];
function ProposalRow({ proposal, index }) {
	const { status, user } = proposal;
	const { open, setOpen } = useState(false);
	return (
		<Table.Row>
			<td>{index + 1}</td>
			<td>{user.name}</td>
			<td>
				<p>{truncateText(proposal.description, 50)}</p>
			</td>
			<td>{proposal.duration} روز</td>
			<td>{toPersianNumbersWithComma(proposal.price)}</td>
			<td>
				<span className={`badge ${statusStyle[status].className}`}>{statusStyle[status].label}</span>
			</td>
			<td>
				<Modal title="تغییر وضعیت درخواست" open={open} onClose={() => setOpen(false)}>
					<p>s</p>
				</Modal>
				<button className="text-primary-900 font-bold" onClick={() => setOpen(true)}>
					تغییر وضعیت
				</button>
			</td>
		</Table.Row>
	);
}

export default ProposalRow;
