import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';

type Props = {
  filteredTodos: Todo[];
  tempTodo: Todo | null;
  onDelete: (id: number) => void;
  deletingTodoId: number | null;
};

export const TodoList: React.FC<Props> = ({
  filteredTodos,
  tempTodo,
  onDelete,
  deletingTodoId,
}) => {
  return (
    <>
      {filteredTodos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onDelete={onDelete}
          isDeleting={deletingTodoId === todo.id}
        />
      ))}

      <TodoItem
        todo={tempTodo}
        onDelete={onDelete}
        isDeleting={deletingTodoId === tempTodo?.id}
      />
    </>
  );
};
