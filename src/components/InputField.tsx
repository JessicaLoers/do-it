import React, { useRef, useEffect } from 'react'
import { RiAddCircleFill } from 'react-icons/ri'
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
      className=''
      onSubmit={(event) => {
        handleAdd(event)
        inputRef.current?.blur() // blur shifts the focus from the input-box
      }}
    >
      <div className='shadow sm:rounded-md sm:overflow-hidden'>
        <div className='px-4 py-5 bg-white space-y-6 sm:p-6'>
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-3 sm:col-span-2'>
              <label
                htmlFor='new-todo'
                className='block text-sm font-medium text-gray-700'
              ></label>
              <div className='mt-1 flex rounded-md shadow-sm'>
                <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm'>
                  ToDo:
                </span>

                <input
                  name='company-website'
                  id='company-website'
                  type='text'
                  placeholder='Enter your do it'
                  value={todo}
                  ref={inputRef}
                  onChange={(event) => setTodo(event.target.value)}
                  className='focus:ring-indigo-500 focus:border-purple-500 flex-1 block w-full rounded-none sm:text-sm border-gray-300'
                />
                <button
                  type='submit'
                  className='inline-flex items-center px-3 rounded-r-md border border-purple-700 bg-purple-700 hover:bg-purple-800'
                >
                  <RiAddCircleFill color='white' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default InputField
