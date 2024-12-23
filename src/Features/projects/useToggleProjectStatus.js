import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleProjectStatusApi } from '../../services/projectService';
import toast from 'react-hot-toast';

export default function useToggleProjectStatus() {
	const queryClient = useQueryClient();

	const { mutate: toggleProject, isPending: isUpdating } = useMutation({
		mutationFn: toggleProjectStatusApi,
		onSuccess: ({ message }) => {
			toast.success(message);
			queryClient.invalidateQueries({
				queryKey: ['owner-projects'],
			});
		},
		onError: (err) => toast.error(err?.response?.data?.message),
	});
	return { isUpdating, toggleProject };
}
