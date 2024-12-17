import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from '../TodoItem/TodoItem';
import classNames from 'classnames';

type Props = {
  filteredTodos: Todo[];
  tempTodo: Todo | null;
};

export const TodoList: React.FC<Props> = ({ filteredTodos, tempTodo }) => {
  return (
    <>
      {filteredTodos.map(toDo => (
        <TodoItem todo={toDo} key={toDo.id} />
      ))}

      {tempTodo && (
        <div
          key={tempTodo.id}
          data-cy="Todo"
          className={classNames('todo', { completed: tempTodo.completed })}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="todo__status-label">
            <input
              data-cy="TodoStatus"
              type="checkbox"
              className="todo__status"
              checked={tempTodo.completed}
            />
          </label>
          <span data-cy="TodoTitle" className="todo__title">
            {tempTodo.title}
          </span>

          {/* Remove button appears only on hover */}
          <button type="button" className="todo__remove" data-cy="TodoDelete">
            ×
          </button>

          {/* overlay will cover the todo while it is being deleted or updated */}
          <div data-cy="TodoLoader" className="modal overlay is-active">
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      )}
    </>
  );
};
