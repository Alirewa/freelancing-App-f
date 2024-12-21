import TextField from './../../ui/TextField';
import Loading from '../../ui/Loading';

function SendOTPForm({ onSubmit, isSendingOtp, register }) {
	// useQeery => get
	// useMutation => post, put, delete
	return (
		<div>
			<form action="" className="space-y-6" onSubmit={onSubmit}>
				<TextField label="شماره موبایل" name="phoneNumber" register={register} />
				<div>
					{isSendingOtp ? (
						<Loading />
					) : (
						<button type="submit" className="btn btn--primary w-full">
							ارسال کد تایید
						</button>
					)}
				</div>
			</form>
		</div>
	);
}

export default SendOTPForm;
