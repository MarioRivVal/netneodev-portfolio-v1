/* eslint-disable react/prop-types */

const ToolItem = ({ tool }) => {
  const { name, img } = tool;

  return (
    <div className="tool">
      <img src={`img/logos/${img}.png`} alt={`${name} logo`} />
      <p>{name}</p>
    </div>
  );
};

export default ToolItem;
