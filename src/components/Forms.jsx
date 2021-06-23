import React from 'react'
import TaskCounter from './TaskCounter';
import Input from './input';
import TextArea from './textarea';


const Forms = ({handleInput, handleTextarea, handleSubmit, count})=>{
    
        return (
                <div className="form-group">
                    <form id="form" onSubmit={handleSubmit}>
                        <label for="todo-name">Task title 😀</label><br></br>
                        <Input 
                            onChange={handleInput}
                            type="text"  
                            name="title" 
                            placeholder="todos" 
                        />
                        
                        <label for="todo-description">Task description</label><br></br>
                        
                        <TextArea 
                            onChange={handleTextarea} 
                            placeholder="short description"
                            name="description">
                        </TextArea>
                            
                        <button> <i className="fas fa-plus-circle fa-lg"></i> ADD TASK</button>
                    </form>

                    <TaskCounter count={count} />
                </div>
           
        )
    }

export default Forms


