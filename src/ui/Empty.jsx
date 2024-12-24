function Empty({ resourceName }) {
	return (
		<div className="flex gap-x-1 p-4 rounded-xl bg-primary-100">
			<p className="font-medium">{resourceName}</p>
			<p>وجود ندارد!</p>
		</div>
	);
}

export default Empty;
