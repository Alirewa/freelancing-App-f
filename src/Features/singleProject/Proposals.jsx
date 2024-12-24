import Table from '../../ui/Table';
import Empty from './../../ui/Empty';
import ProposalRow from './ProposalRow';
function Proposals({ proposals }) {
	if (!proposals.length) return <Empty resourceName="برای این پروژه درخواستی" />;
	return (
		<Table>
			<Table.Header>
				<th>#</th>
				<th>فریلنسر</th>
				<th>توضیحات</th>
				<th>زمان تحویل</th>
				<th>هزینه</th>
				<th>وضعیت</th>
				<th>عملیات</th>
			</Table.Header>

			<Table.Body>
				{proposals.map((proposal, index) => (
					<ProposalRow key={proposal._id} proposal={proposal} index={index} />
				))}
			</Table.Body>
		</Table>
	);
}

export default Proposals;
