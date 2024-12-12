import { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useMutation } from '@tanstack/react-query';
import { checkOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import Loading from '../../ui/Loading';

const RESEN_TIME = 90;

function CheckOTPForm({ phoneNumber, onBack, onResendOtp, otpResponse }) {
	const navigate = useNavigate();
	const [otp, setOtp] = useState();
	const [time, setTime] = useState(RESEN_TIME);
	const { isPending, mutateAsync } = useMutation({
		mutationFn: checkOtp,
	});

	useEffect(() => {
		const timer = time > 0 && setInterval(() => setTime((t) => t - 1), 1000);
		return () => {
			if (timer) clearInterval(timer);
		};
	}, [time]);
	const checkOtpHandler = async (e) => {
		e.preventDefault();
		try {
			const { message, user } = await mutateAsync({ phoneNumber, otp });
			toast.success(message);
			if (!user.isActive) return navigate('/complete-profile');
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
		<div>
			<button className="mb-4 py-4 text-primary-900" style={{ display: 'flex', gap: '0.4rem' }} onClick={onBack}>
				<HiArrowRight className="w-6 h-6" />
				ویرایش شماره موبایل
			</button>
			{otpResponse && <p className="mb-4 font-medium">{otpResponse?.message}</p>}
			<form className="space-y-5" onSubmit={checkOtpHandler}>
				<p className="font-bold text-secondary-800">کد تایید را وارد کنید</p>
				<OTPInput
					containerStyle="flex flex-row-reverse gap-x-2 justify-center"
					inputStyle={{
						width: '2.5rem',
						padding: '0.5rem 0.2rem',
						border: '1px solid rgb(var(--color-primary-300))',
						borderRadius: '0.5rem',
					}}
					value={otp}
					onChange={setOtp}
					numInputs={6}
					renderSeparator={<span>-</span>}
					renderInput={(props) => <input type="number" {...props} />}
				/>
				<div className="text-center">
					{time > 0 ? <p>ارسال مجدد کد تایید: {time} ثانیه</p> : <button onClick={onResendOtp}>ارسال مجدد</button>}
				</div>
				<div>
					{isPending ? (
						<Loading />
					) : (
						<button type="submit" className="btn btn--primary w-full">
							تایید
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default CheckOTPForm;
