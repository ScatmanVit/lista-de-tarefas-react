
import "./input.css"

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &  {
    backColor?: string,
    focused?: boolean,
    error?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ backColor, focused, error, onChange }: InputProps) {
    return (
        <div className="container-input">
            <input 
                type="text"
                style={{ backgroundColor: 
                    !focused ? "#ffff" : backColor,
                         borderColor: 
                    !error ? "#a5a4a4ff" : "#e16969ff"  
                }}
                onChange={onChange}
            />
        </div>
    )
}