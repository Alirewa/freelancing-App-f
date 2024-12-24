function Empty({ resourceName }) {
  return (
    <div className="flex gap-x-2">
      <p className="font-bold">{resourceName}</p>
      <p>وجود ندارد!</p>
    </div>
  );
}

export default Empty;
