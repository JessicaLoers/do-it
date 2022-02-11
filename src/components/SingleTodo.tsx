import React, { useRef, useState, useEffect } from 'react'
import { Todo } from '../models/model'
import { MdModeEdit, MdDelete, MdDone } from 'react-icons/md'
import './styles.css'
import { Draggable } from 'react-beautiful-dnd'

type Props = {
  index: number
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({ todo, todos, setTodos, index }: Props) => {
  const [edit, setEdit] = useState<boolean>(false)
  const [editTodo, setEditTodo] = useState<string>(todo.todo)

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    )
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault()

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    )
    setEdit(false)
  }

  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [edit])

  return (
    <Draggable draggableId={todos.indexOf.toString()} index={index}>
      {(provided) => (
        <form
          className='todos__single'
          onSubmit={(event) => handleEdit(event, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              className='todos__single--text'
              value={editTodo}
              onChange={(event) => setEditTodo(event?.target.value)}
            />
          ) : todo.isDone ? (
            <s className='todos__single--text'>{todo.todo}</s>
          ) : (
            <span className='todos__single--text'>{todo.todo}</span>
          )}

          <div>
            <span
              className='icon'
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit)
                }
              }}
            >
              <MdModeEdit />
            </span>
            <span className='icon' onClick={() => handleDelete(todo.id)}>
              <MdDelete />
            </span>
            <span className='icon' onClick={() => handleDone(todo.id)}>
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  )
}

export default SingleTodo
