type Props = {
  title: string;
  color: string;
  getColor(): void;
};

const Button = ({ title, color, getColor }: Props) => {
  return (
    <button
      className="outline-none px-4 py-1 rounded-full text-white"
      style={{ backgroundColor: color }}
      onClick={getColor}
    >
      {title}
    </button>
  );
};

export default Button;
