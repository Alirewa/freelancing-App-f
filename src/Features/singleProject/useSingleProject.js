import { useQuery } from "@tanstack/react-query";
import { getSingleProjectApi } from "../../services/projectService";
import { useParams } from "react-router-dom";

export default function useSingleProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getSingleProjectApi(id),
    retry: false
  });

  const { project } = data || {};

  return { isLoading, project };
}
