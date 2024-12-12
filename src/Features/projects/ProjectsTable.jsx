import Empty from '../../ui/Empty';
import Loading from '../../ui/Loading';
import useOwnerProjects from './useOwnerProjects';
import Table from '../../ui/Table';
import ProjectRow from './ProjectRow';

function ProjectsTable() {
	const { isLoading, projects } = useOwnerProjects();
	if (isLoading) return <Loading />;
	if (!projects.length) return <Empty resourceName="پروژه" />;
	return (
		<Table>
			<Table.Header>
				<thead>
					<tr className="title-row">
						<th>#</th>
						<th>عنوان پروژه</th>
						<th>دسته بندی</th>
						<th>بودجه</th>
						<th>ددلاین</th>
						<th>تگ‌ها</th>
						<th>فریلنسر</th>
						<th>وضعیت</th>
						<th>عملیات</th>
					</tr>
				</thead>
			</Table.Header>

			<Table.Body>
				<tbody>
					{projects.map((project, index) => (
						<ProjectRow key={project._id} project={project} index={index} />
					))}
				</tbody>
			</Table.Body>
		</Table>
	);
}

export default ProjectsTable;
