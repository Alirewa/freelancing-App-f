import DatePicker from 'react-multi-date-picker';
import persian from 'react-date-object/calendars/persian';
import persian_fa from 'react-date-object/locales/persian_fa';

function DatePickerField({ label, date, setDate }) {
	return (
		<div>
			<span className="mb-2 mt-4 block text-secondary-700">{label}</span>
			<DatePicker
				value={date}
				onChange={(date) => setDate(date)}
				format="YYYY/MM/DD"
				calendarPosition="bottom-center"
				calendar={persian}
				locale={persian_fa}
				containerClassName="w-full"
				inputClass="textField__input"
			/>
		</div>
	);
}

export default DatePickerField;
