"use client"
import { DndContext, DragEndEvent, PointerSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { moveTask } from '../../../features/taskSlice';
import { ColumnType, Task } from '../../../types/task';
import { useState } from 'react';
import { Column } from '../column';
import Input from '@/components/atoms/input';
import useTaskListener from '@/custom_hooks/useTaskListener';


const COLUMNS: ColumnType[] = [
  { id: 'TODO', title: 'To Do' },
  { id: 'IN_PROGRESS', title: 'In Progress' },
  { id: 'DONE', title: 'Done' },
];

const Board = () => {
  const newDate = new Date().toLocaleDateString('en-CA');
  const [filterDate, setFilterDate] = useState(newDate);
  const tasks = useAppSelector(state => state.tasks.tasks);
  const dispatch = useAppDispatch();

  //load data form db
  useTaskListener();

  // for mobile touch
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 8,
      },
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id as string;
    const newStatus = over.id as Task['status'];


    dispatch(moveTask({
      id: taskId,
      newStatus: newStatus,
    }));

  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
      <div>
        <div className="mb-4 justify-end flex">

          <Input
            type="date"
            id="title"
            placeholder="Date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className='mb-2 max-w-[200px]'
          />
        </div>
        <div className="flex flex-row gap-4 overflow-x-auto pb-2">
          {COLUMNS.map((column) => (
            <Column
              key={column.id}
              column={column}
              tasks={tasks.filter((task) => {
                const statusMatch = task.status === column.id;
                if (!filterDate) return statusMatch;

                const taskDate = new Date(task.createdAt).toLocaleDateString('en-CA');
                return statusMatch && taskDate === filterDate;
              })}
            />
          ))}
        </div>
      </div>
    </DndContext>
  );
};


export default Board