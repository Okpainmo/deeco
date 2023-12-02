function Card({ children, title, maxSize }) {
  return (
    <div className={`w-full ${maxSize}`}>
      <h4 className="text-xl font-bold text-[#1E1E1E] mb-4">{title}</h4>
      <div className="bg-white shadow-lg p-5 min-h-[9.4rem]">{children}</div>
    </div>
  );
}

export default Card;
