import React from 'react'
import styled from 'styled-components'


const IconWrapper = styled.div`
    padding:5px;
    margin:5px;
    cursor:pointer;
    transition: all 300ms;
    color:${props => props.danger ?"#FF8888":""};
    color:${props => props.check ?"#88FFB8":""};
    color:${props => props.edit ?"#88EAFF":""};

    
    &:hover{
        transform:scale(1.2);
    }
`


function TaskList({tasks, handleCompleted, handleDelete, handleEdit}){
    return (
        <div className="list-wrapper">
            {tasks.map((task, index) => {
                let taskClass = "task-wrapper"
                taskClass += task.completed === true ? ("-completed") : "-not-completed"

                return (
                    <div className={taskClass} key={index}>
                        <div className="task-name">
                            <h2>{task.title}</h2>
                            <small>{task.description}</small>
                        </div>

                        <div className="buttons">
                            <IconWrapper edit onClick={() => handleEdit(task)}>
                                <i className="fas fa-pen-square fa-lg"></i>
                            </IconWrapper>

                            <IconWrapper check
                                onClick={() => handleCompleted(task)}
                            >
                                <i className="fas fa-check-circle fa-lg"></i>
                            </IconWrapper>
                            <IconWrapper danger
                                onClick={() => handleDelete(task)}
                            >
                                <i className="fas fa-trash fa-lg"></i>
                            </IconWrapper>
                        </div>
                    </div>)
            })}
        </div>
    )
}


export default  TaskList