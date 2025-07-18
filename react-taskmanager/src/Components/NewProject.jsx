import React from 'react'
import Input from './Input'
import { useRef } from 'react'
import Modal from './Modal'

const NewProject = ({onAdd, onCancel}) => {
  const modal = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave(){
    const enteredTitle = title.current.value 
    const enterDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    if(enteredTitle.trim() === '' || enterDescription.trim() === '' || enteredDueDate.trim() === ''){
        //show the error modal  
        modal.current.open()
        return
    }
    onAdd({
        title: enteredTitle,
        description: enterDescription,
        dueDate: enteredDueDate
    })
  }

  return (
    <>
    <Modal ref={modal} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-stone-700 mt-4 my-4'>Invalid Input</h2>
        <p className='text-stone-700 mb-4'>Opps ... Looks like you forgot to enter a value.</p>
        <p className='text-stone-700 mb-4'>Please make sure you provide a valid value for every input field.</p>
    </Modal>
    <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
            <li><button className='text-stone-800 hover:text-stone-950' onClick={onCancel}>Cancel</button></li>
            <li><button className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
            onClick={handleSave}>Save</button></li>
        </menu>
        <div>
           <Input type='text' label='Title' ref={title}/>
           <Input label='Description' ref={description} textarea/>
           <Input type='date' label='Due Date' ref={dueDate}/>
        </div>
    </div>
    </>
  )
}

export default NewProject