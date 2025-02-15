"use client"
import Button from '@/components/atoms/button';
import Input from '@/components/atoms/input';
import TextArea from '@/components/atoms/text_area';
import Popup from '@/components/organisms/popup'
import { addTask, updateTask } from '@/features/taskSlice';
import { useAppDispatch } from '@/store/hooks';
import { Task } from '@/types/task';
import React, { useState } from 'react'

interface Props {
    showPopup: boolean, 
    setShowPopup: (showPopup: boolean) => void; 
    task?: Task
}

const AddTask = ({ showPopup, setShowPopup, task }: Props) => {

    const [title, setTitle] = useState(task?.title || '');
    const [description, setDescription] = useState(task?.description || '');
    const [error, setError] = useState('');

    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title.trim()) {
            setError('Title is required');
            return;
        }
        setError('');

        if (task) {
            dispatch(updateTask({ ...task, title, description }));
        } else {
            dispatch(addTask({
                title,
                description,
                status: "TODO",
                createdAt: new Date().toISOString()
            }));
        }
        setTitle('');
        setDescription('');
        handleClose();
    };

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
        if (error) setError('');
    };

    const handleClose = () => {
        setShowPopup(!showPopup)
    }

    return (
        <Popup
            title={task ? "Edit" : "Add"}
            isVisible={showPopup}
            setIsVisible={setShowPopup}

        >
            <form onSubmit={handleSubmit} className="mb-4">
                <Input
                    type="text"
                    id="title"
                    placeholder="Enter Title"
                    value={title}
                    onChange={handleTitleChange}
                    className='mb-2'
                />
                {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
                <TextArea
                    id="description"
                    cols={50}
                    rows={5}
                    value={description}
                    placeholder="Enter description"
                    onChange={(e) => setDescription(e.target.value)}
                />
                <div className=" float-end flex  gap-2">
                    <Button label="Cancel" variant='link' type="button" size="medium" onClick={handleClose} />
                    <Button label={task ? "Update" : "Add New"} size="medium" type="submit" />
                </div>
            </form>
        </Popup>
    )
}

export default AddTask

