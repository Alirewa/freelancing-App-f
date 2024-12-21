import TextField from '../../ui/TextField';
import { useMutation } from '@tanstack/react-query';
import { completeProfile } from '../../services/authService';
import toast from 'react-hot-toast';
import Loading from '../../ui/Loading';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import RadioGroup from '../../ui/RadioGroup';

function CompletedProfileForm() {
	const {
		handleSubmit,
		register,
		watch,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();

	const { isPending, mutateAsync } = useMutation({
		mutationFn: completeProfile,
	});
	const onSubmit = async (data) => {
		try {
			const { message, user } = await mutateAsync(data);
			toast.success(message);

			if (user.status !== 2) {
				navigate('/');
				toast('پروفایل شما در انتظار تایید است!', { icon: '👏' });
				return;
			}
			if (user.role === 'OWNER') return navigate('/owner');
			if (user.role === 'FREELANCER') return navigate('/freelancer');
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};

	return (
		<div className="container xl:max-w-screen-xl">
			<h1 className="font-bold text-3xl text-center mt-10 text-secondary-700">تکمیل اطلاعات</h1>
			<div className="flex justify-center pt-10">
				<div className="w-full sm:max-w-sm">
					<form action="" className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
						<TextField
							label="نام و نام خانوادگی"
							name="name"
							register={register}
							validationSchema={{
								required: 'نام و نام خانوادگی  ضروری است',
							}}
							errors={errors}
						/>
						<TextField
							label="ایمیل"
							name="email"
							register={register}
							validationSchema={{
								required: 'ایمیل الزامیست',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'ایمیل نامعتبر است',
								},
							}}
							errors={errors}
						/>
						<RadioGroup
							errors={errors}
							register={register}
							watch={watch}
							configs={{
								name: 'role',
								validationSchema: { required: 'انتخاب نقش ضروری است' },
								options: [
									{ value: 'OWNER', label: 'کارفرما' },
									{ value: 'FREELANCER', label: 'فریلنسر' },
								],
							}}
						/>
						<div>
							{isPending ? (
								<Loading />
							) : (
								<button type="submit" className="btn btn--primary w-full">
									ثبت اطلاعات
								</button>
							)}
						</div>{' '}
					</form>
				</div>
			</div>
		</div>
	);
}

export default CompletedProfileForm;
