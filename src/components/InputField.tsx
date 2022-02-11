import React, { useRef, useEffect } from 'react'
import './styles.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (event: React.FormEvent) => void
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  // hook the components HTML
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <form
      className='input'
      onSubmit={(event) => {
        handleAdd(event)
        inputRef.current?.blur() // blur shifts the focus from the input-box
      }}
    >
      <input
        type='text'
        placeholder='Enter your do it'
        value={todo}
        ref={inputRef}
        onChange={(event) => setTodo(event.target.value)}
        className='input_box'
      />
      <button type='submit' className='input_submit'>
        DO
      </button>
    </form>
  )
}

export default InputField
