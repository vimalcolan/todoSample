import React from 'react'
import { AiFillEdit } from 'react-icons/ai';
import { GrCheckbox } from 'react-icons/gr';
import { GrCheckboxSelected } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

const Todolist = ({data,handleRead,handleDelete,handleEdit}) => {
  return (
    <div>
        {
            <div className='todo-text d-flex justify-content-between align-items-center'>
                <p className={`todo-name ${data.completed?"strike":""}`}>{data.name}</p>
                <div className='icons d-flex'>
                  <div onClick={()=>{handleEdit(data)}}><AiFillEdit/></div>
                    <div className='mx-2' onClick={()=>{handleRead(data)}}>{data.completed?<GrCheckboxSelected/>:<GrCheckbox/>}</div>
                    <div onClick={()=>{handleDelete(data)}}><AiFillDelete/></div>
                </div>
            </div>
        }
    </div>
  )
}

export default Todolist