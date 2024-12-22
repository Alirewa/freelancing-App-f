/* eslint-disable no-undef */
import { TagsInput } from 'react-tag-input-component';
import RHFSelect from '../../ui/RHFSelect';
import TextField from './../../ui/TextField';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import DatePickerField from '../../ui/DatePickerField';
import useCategories from './../../hooks/useCategories';
import useCreateProject from './useCreateProject';
import Loading from './../../ui/Loading';
import useEditProject from './useEditProject';


function CreateProjectForm({ onClose, projectToEdit = {} }) {
	const { _id: editId } = projectToEdit;
	const isEditSession = Boolean(editId);

	const { title, description, budget, category, deadline, tags: prevTags } = projectToEdit;
	let editValues = {};
	if (isEditSession) {
		editValues = {
			title,
			description,
			budget,
			category: category._id,
		};
	}

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm({
		defaultValues: editValues,
	});

	const [tags, setTags] = useState(prevTags || []);
	const [date, setDate] = useState(new Date(deadline || ''));
	const { categories } = useCategories();
	const { isCreating, createProject } = useCreateProject();
	const { isEditing, editProject } = useEditProject();

	const onSubmit = (data) => {
		const newProject = { ...data, deadline: new Date(date).toISOString(), tags };

		if (isEditSession) {
			editProject(
				{ id: editId, newProject },
				{
					onSuccess: () => {
						onClose();
						reset();
					},
				}
			);
		} else {
			createProject(newProject, {
				onSuccess: () => {
					onClose();
					reset();
				},
			});
		}
	};
	return (
		<form className="" onSubmit={handleSubmit(onSubmit)}>
			<TextField
				required
				label="عنوان پروژه"
				name="title"
				register={register}
				validationSchema={{ required: 'عنوان الزامی است', minLength: { value: 10, message: 'عنوان کوتاه است' }, maxLength: 50 }}
				errors={errors}
			/>
			<TextField
				required
				label="توضیحات"
				name="description"
				type="text"
				register={register}
				validationSchema={{ required: 'توضیحات پروژه الزامی است', maxLength: { value: 100, message: 'توضیحات طولانی است' } }}
				errors={errors}
			/>
			<TextField
				required
				label="بودجه"
				name="budget"
				type="number"
				register={register}
				validationSchema={{ required: 'بودجه الزامی است' }}
				errors={errors}
			/>
			<RHFSelect required label="دسته بندی" name="category" register={register} options={categories} />
			<div>
				<label className="mb-2 mt-4 block text-secondary-700">تگ‌ها</label>
				<TagsInput value={tags} onChange={setTags} name="tags" />
			</div>
			<DatePickerField label="ددلاین" date={date} setDate={setDate} />
			<div className="!mt-8">
				{isCreating || isEditing ? (
					<Loading />
				) : (
					<button className="btn btn--primary w-full mt-4" type="submit">
						تایید
					</button>
				)}
			</div>
		</form>
	);
}

export default CreateProjectForm;
