export function Button({ style, className, onClick, children }) {
    return (
        <div 
            style={style}
            onClick={onClick}
            className={`
                ${className}
                rounded
                cursor-pointer
                text-white text-center 
                flex justify-center items-center
            `}
        >
            {children}             
        </div>
    );
}
