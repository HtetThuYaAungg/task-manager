import { ChangeEvent, InputHTMLAttributes } from 'react';

export default interface Props  {
    id: string,
    placeholder?: string,
    rows: number,
    cols: number,
    disabled?: boolean,
    value ?: string | number,
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    rest?: Omit<InputHTMLAttributes<HTMLTextAreaElement>, keyof Props>;
}