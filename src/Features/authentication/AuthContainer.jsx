import { useState } from 'react';
import CheckOTPForm from './CheckOTPForm';
import SendOTPForm from './SendOTPForm';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';

function AuthContainer() {
	const {
		isPending: isSendingOtp,
		mutateAsync,
		data: otpResponse,
	} = useMutation({
		mutationFn: getOtp,
	});
	const [step, setStep] = useState(1);
	const { handleSubmit, register, getValues } = useForm();

	const sendOtpHandler = async (data) => {
		try {
			const { message } = await mutateAsync(data);
			setStep(2);
			toast.success(message);
		} catch (error) {
			toast.error(error?.response?.data?.message);
		}
	};

	const renderStep = () => {
		switch (step) {
			case 1:
				return (
					<SendOTPForm
						isSendingOtp={isSendingOtp}
						onSubmit={handleSubmit(sendOtpHandler)}
						setStep={setStep}
						register={register}
					/>
				);
			case 2:
				return (
					<CheckOTPForm
						otpResponse={otpResponse}
						phoneNumber={getValues('phoneNumber')}
						onBack={() => setStep(1)}
						onResendOtp={sendOtpHandler}
					/>
				);
			default:
				return null;
		}
	};
	return <div className="w-full sm:max-w-sm">{renderStep()}</div>;
}

export default AuthContainer;
