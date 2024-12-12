import { useState } from 'react';
import CheckOTPForm from './CheckOTPForm';
import SendOTPForm from './SendOTPForm';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';

function AuthContainer() {
	const {
		isPending: isSendingOtp,
		mutateAsync,
		data: otpResponse,
	} = useMutation({
		mutationFn: getOtp,
	});
	const [step, setStep] = useState(1);
	const [phoneNumber, setphoneNumber] = useState('');

	const sendOtpHandler = async (e) => {
		e.preventDefault();
		try {
			const data = await mutateAsync({ phoneNumber });
			setStep(2);
			toast.success(data.message);
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
						onSubmit={sendOtpHandler}
						setStep={setStep}
						phoneNumber={phoneNumber}
						onChange={(e) => setphoneNumber(e.target.value)}
					/>
				);
			case 2:
				return (
					<CheckOTPForm
						otpResponse={otpResponse}
						phoneNumber={phoneNumber}
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
