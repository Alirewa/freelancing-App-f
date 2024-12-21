import RadioInput from './RadioInput';

function RadioGroup({ register, watch, errors, configs }) {
	const { name, validationSchema = {}, options } = configs;
	return (
		<div>
			<div className="flex flex-wrap items-center justify-start gap-x-4">
				{options.map(({ label, value }) => (
					<RadioInput
						key={value}
						label={label}
						value={value}
						register={register}
						id={value}
						name={name}
						watch={watch}
						validationSchema={validationSchema}
						errors={errors}
					/>
				))}
			</div>
			{errors && errors[name] && <span className="text-error block text-sm mt-2 flex-1">{errors[name]?.message}</span>}
		</div>
	);
}

export default RadioGroup;
