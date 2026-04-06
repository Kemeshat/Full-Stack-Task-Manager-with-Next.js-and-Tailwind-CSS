'use client';

import TaskList from './TaskList';

export default function TaskBoard() {
  const tasks = [{ id: 't1', title: 'Buy milk', done: false }];

  function handleToggle(id) {
    console.log('Toggle task', id);  // wired to state in Section 4
  }

  return <TaskList tasks={tasks} onToggle={handleToggle} />;
}
