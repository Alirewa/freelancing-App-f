import { HiArrowRight } from "react-icons/hi";

function ProjectHeader({ project }) {
  return (
    <div className="flex items-center gap-x-4 mb-8">
      <button>
        <HiArrowRight />
      </button>
      <h1>لیست درخواست‌های {project.title}</h1>
    </div>
  );
}

export default ProjectHeader;
