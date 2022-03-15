const Dummy500Child = () => {
  return (
    <>
      {Array(500)
        .fill(null)
        .map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={i}>children</div>
        ))}
    </>
  );
};

export default Dummy500Child;
