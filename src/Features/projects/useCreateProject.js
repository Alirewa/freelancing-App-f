import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProjectApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export default function useCreateProject() {
	const queryClient = useQueryClient();

	const { mutate: createProject, isPending: isCreating } = useMutation({
		mutationFn: createProjectApi,
		onSuccess: ({ message }) => {
			toast.success(message);
			queryClient.invalidateQueries({
				queryKey: ['owner-projects'],
			});
		},
		onError: (err) => toast.error(err?.response?.data?.message),
	});
	return { isCreating, createProject };
}
