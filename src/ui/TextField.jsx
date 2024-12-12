function TextField({ label, name, value, onChange }) {
	return (
		<div>
			<label className="mb-2 block" htmlFor={name}>
				{label}
			</label>
			<input
				autoComplete="off"
				value={value}
				onChange={onChange}
				id={name}
				name={name}
				className="textField__input"
				type="text"
			/>
		</div>
	);
}

export default TextField;
