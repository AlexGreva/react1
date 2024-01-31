import className from "classnames";
export const Button = ({children, onClick, disabled, className})=>{
return (
    <button
        onClick={onClick}
        disabled={disabled}
        >
        {children}
        
    </button>
)}