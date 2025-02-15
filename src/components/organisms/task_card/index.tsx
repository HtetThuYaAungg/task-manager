"use client"

import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Task } from '@/types/task';
import Icon, { IconState } from '@/components/atoms/icon';
import AddTask from '../add_task';
import Button from '@/components/atoms/button';
import { useAppDispatch } from '@/store/hooks';
import { deleteTask } from '@/features/taskSlice';
import ConfirmModal from '../confirm_modal';
import deleteAnimation from "../../../../public/delete.json";

const TaskCard = ({ task }: { task: Task }) => {

  const dispatch = useAppDispatch();
  const [showConfirm, setShowConfirm] = useState<boolean>(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });

  const style = transform
    ? {
      transform: `translate(${transform.x}px, ${transform.y}px)`,
    }
    : undefined;

  const [isEditing, setIsEditing] = useState(false);

  const handleDelet = () => {
    dispatch(deleteTask(task.id));
  }


  if (isEditing) return <AddTask task={task} showPopup={isEditing} setShowPopup={setIsEditing} />;


  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        className="relative flex flex-col justify-between bg-backgroundColor p-5 min-w-[200px]  rounded-lg shadow-lg 
      transition-all duration-75 ease-in-out transform will-change-transform 
      hover:-translate-y-2 hover:shadow-2xl" >
        <div
          className='flex flex-col  cursor-grab active:cursor-grabbing touch-none group'
          {...listeners}>
          <div className='flex justify-between items-center  w-full '>
            <p className="text-xs text-textColor">
              Created: {new Date(task.createdAt).toLocaleDateString()}
            </p>
            <div

              className="p-2 -m-2 cursor-grab active:cursor-grabbing touch-none text-textGrayColor group-hover:text-activeColor"
            >
              <Icon name={IconState.Grip} size={26} />
            </div>
          </div>
          <div className='pt-5'>
            <h3 className=" font-walone_bold text-lg text-textColor">{task.title}</h3>
            {task.description && <p className="text-sm text-textGrayColor mb-2">{task.description}</p>}
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button label="Edit" type="button" size="medium" disabled={task.status === "DONE"} className='px-7' onClick={() => {
            setIsEditing(true);
          }} />
          <Button label="Delete" variant='danger' size="medium" type="button" onClick={() => setShowConfirm(true)} />

        </div>

      </div>
      {
        showConfirm && <ConfirmModal title='Delete Confirmation' description='Are you sure to delete this!' showPopup={showConfirm} setShowPopup={setShowConfirm} onConfirm={handleDelet} icon={deleteAnimation} />
      }
    </>
  );
}

export default TaskCard;