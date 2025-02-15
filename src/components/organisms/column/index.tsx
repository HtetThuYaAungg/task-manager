"use client"
import { useDroppable } from '@dnd-kit/core';
import { ColumnType, Task, TaskStatus } from '../../../types/task';
import TaskCard from '../task_card';


type ColumnProps = {
  column: ColumnType;
  tasks: Task[];
};

export function Column({ column, tasks }: ColumnProps) {
  const { setNodeRef } = useDroppable({
    id: column.id,
  });

  const statusColor: Record<TaskStatus, string> = {
    TODO: 'bg-slate-300',
    IN_PROGRESS: 'bg-blue-200',
    DONE: 'bg-green-200'
  };

  const sortedTasks = [...tasks].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

  return (
    <div className="flex w-full  flex-col rounded-lg bg-popupBackgroundColor min-w-[230px]">
      <div className={`${statusColor[column.id]} p-3 rounded-t-lg`}>
        <h2 className="py-2 font-walone_bold text-xl text-center text-black">{column.title} [ {tasks.length} ]</h2>
      </div>
      <div ref={setNodeRef} className="flex flex-1 flex-col gap-4 p-2">
        {
          sortedTasks.length > 0 ? (
            <>
              {sortedTasks.map((task) => (
                <TaskCard key={task.id} task={task} />
              ))}
            </>
          ) : (
            <p className=' font-walone_regular text-md text-textGrayColor text-center py-5'>There are no tasks.</p>
          )
        }
      </div>
    </div>
  );
}