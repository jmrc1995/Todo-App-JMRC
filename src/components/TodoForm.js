import React from 'react'

import './TodoForm.css'



function TodoForm(props){



    return (
    <div 

        className ='form-main-container'>

            <form onSubmit={props.addItem}>
                <input 
                    onChange ={props.currentInput}
                    type='text' 
                    value={props.currentText.currentItem.task}
                    placeholder ='Enter a Task'
                    className='form-input-field' />
                    
        
                    <button type='submit'>
                            Submit
                    </button>
            </form>
    </div>
    )
}

export default TodoForm