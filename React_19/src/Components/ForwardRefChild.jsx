const ForwardRefChild = ({ Sahil }) => {
  return (
    <>
      <h2>Forward Ref Child...</h2>
      <input type="text" placeholder="Enter text" ref={Sahil} />
    </>
  );
};
export default ForwardRefChild;
