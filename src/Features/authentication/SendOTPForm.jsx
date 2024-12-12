import { useState } from 'react';
import TextField from './../../ui/TextField';
import { useMutation } from '@tanstack/react-query';
import { getOtp } from '../../services/authService';
import toast from 'react-hot-toast';
import Loading from '../../ui/Loading';

function SendOTPForm({onSubmit, isSendingOtp, phoneNumber, onChange }) {


	// useQeery => get
	// useMutation => post, put, delete
	return (
		<div>
			<form action="" className="space-y-6" onSubmit={onSubmit}>
				<TextField label="شماره موبایل" name="phoneNumber" value={phoneNumber} onChange={onChange} />
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
