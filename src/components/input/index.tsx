
import React, { InputHTMLAttributes } from 'react';
import { Input } from '@material-tailwind/react';

// define the props for the component
interface Props {
    label?: string;
    error?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    type?: string;
    id?: string;
}

// define the component
const CustomInput: React.FC<Props> = ({ label, error, placeholder, onChange, value, type, id, ...rest }) => {
    return (
        <div className="mb-4">
            {label && <label id={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
            <Input
                id={id}
                type={type}
                crossOrigin={undefined} {...rest}
                value={value}
                onChange={onChange}
                placeholder={placeholder} />
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
};

export default CustomInput;
