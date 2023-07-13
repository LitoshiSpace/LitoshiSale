//  Dependencies
// ===========================================================

//  Component
// ===========================================================

export function ColCard({ style, className, onClick, text, value }) {
  return (
    <div
      style={style}
      onClick={onClick}
      className={`
        ${className}
        rounded-xl
        cursor-pointer
        flex flex-col-reverse justify-evenly items-start
      `}
    >
      <h3 className="text-[#fff] text-start font-semibold">{value}</h3>
      <h5 className="text-[#ccc] text-start font-semibold ">{text}</h5>
    </div>
  );
}
