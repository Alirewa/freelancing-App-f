function TextField({ label, name, register, validationSchema, errors, type = 'text', required }) {
	return (
		<div>
			<label className="mb-2 mt-2 block text-secondary-700" htmlFor={name}>
				{label} {required && <span className="text-error">*</span>}
			</label>
			<input {...register(name, validationSchema)} autoComplete="off" id={name} className="textField__input" type={type} />
			{errors && errors[name] && <span className="text-error block text-sm mt-2">{errors[name]?.message}</span>}
		</div>
	);
}

export default TextField;
