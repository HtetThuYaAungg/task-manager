import { ChangeEvent, InputHTMLAttributes } from 'react';

interface Props {
    type: 'text' | 'number' | 'password' | 'email' | 'date';
    id?: string;
    name?: string;
    defaultValue?: string | number;
    value?: string | number;
    placeholder?: string;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    disable?: boolean;
    rest?: Omit<InputHTMLAttributes<HTMLInputElement>, keyof Props>;
    className?: string;
    min?: string;
}

export default Props;