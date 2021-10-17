import React from 'react'
import './TodoList.css'
import { BsTrashFill } from "react-icons/bs"





function TodoList(props) {

    const list = props.items;
    const listItems = list.map(item =>
        {
            return (
          
                <div className='list' key={item.key}>

                        <p>
                            <textarea
                                cols='40'  
                                type='text' 
                                id={item.key}
                                value={item.task}
                                onChange={(e)=>{props.setUpdate(e.target.value, item.key)}}/>
                        </p>
                    
                    < BsTrashFill 
                        className='bs-trash'
                        onClick={()=>props.deleteItems(item.key)}/>
                    

                   
       
                </div>
            )
        })

    return (
        
        <div className='list-box-container'>

              {listItems} 
 
        </div>
    )
}

export default TodoList
