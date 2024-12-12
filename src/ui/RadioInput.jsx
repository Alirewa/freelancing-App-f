function RadioInput({ label, value, onChange, name, id, checked }) {
	return (
		<div className="flex items-center gap-x-2 text-secondary-600 font-bold">
			<input
				className="cursor-pointer w-4 h-4 accent-primary-900 form-radio"
				type="radio"
				name={name}
				id={id}
				value={value}
				onChange={onChange}
				checked={checked}
			/>
			<label htmlFor={value}>{label}</label>
		</div>
	);
}

export default RadioInput;
