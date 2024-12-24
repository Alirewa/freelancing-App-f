import ProjectHeader from '../Features/singleProject/ProjectHeader';
import Proposals from '../Features/singleProject/Proposals';
import useSingleProject from '../Features/singleProject/useSingleProject';
import Loading from '../ui/Loading';

function SingleProject() {
	const { isLoading, project } = useSingleProject();
	if (isLoading) return <Loading />;
	return (
		<div>
			<ProjectHeader project={project} />
			<Proposals proposals={project.proposals} />
		</div>
	);
}

export default SingleProject;
