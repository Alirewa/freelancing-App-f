function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
	return (
		<div>
			<h2 className="font-bold text-base mb-8">آیا از حذف {resourceName} مطمعن هستید؟</h2>
			<div className="flex items-center justify-center gap-x-4">
				<button onClick={onClose} disabled={disabled} className="btn btn--outline flex-1 py-3">
					لغو
				</button>
				<button onClick={onConfirm} className="btn btn--danger flex-1 py-3">
					تایید
				</button>
			</div>
		</div>
	);
}

export default ConfirmDelete;
