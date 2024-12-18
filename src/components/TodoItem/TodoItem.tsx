import React from 'react';
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
type Props = {
  todo: Todo | null;
  onDelete: (id: number) => void;
  isDeleting: boolean;
};
export const TodoItem: React.FC<Props> = ({ todo, onDelete, isDeleting }) => {
  return (
    <>
      {todo && (
        <div
          key={todo.id}
          data-cy="Todo"
          className={classNames('todo', { completed: todo.completed })}
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="todo__status-label">
            <input
              data-cy="TodoStatus"
              type="checkbox"
              className="todo__status"
              checked={todo.completed}
            />
          </label>
          <span data-cy="TodoTitle" className="todo__title">
            {todo.title}
          </span>

          {/* Remove button appears only on hover */}
          <button
            type="button"
            className="todo__remove"
            data-cy="TodoDelete"
            disabled={todo.id === 0}
            onClick={() => {
              onDelete(todo.id);
            }}
          >
            ×
          </button>

          {/* overlay will cover the todo while it is being deleted or updated */}
          <div
            data-cy="TodoLoader"
            className={classNames('modal overlay', {
              'is-active': todo.id === 0 || isDeleting,
            })}
          >
            <div className="modal-background has-background-white-ter" />
            <div className="loader" />
          </div>
        </div>
      )}
    </>
  );
};
