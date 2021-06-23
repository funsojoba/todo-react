import React, { Component } from 'react'

class TaskCounter extends Component {
    render(props) {
        

        if(this.props.count === 0){
            return (
                <div className="counter">
                    <small>Add your first task</small>
                </div>
            )   
            }else if(this.props.count === 1){
                return (
                    <div className="counter">
                        <small>Your task today</small>
                    </div>
                )
            }else{
                return (
                    <div className="counter">
                        <small>Your tasks today</small>
                    </div>
                )
            }

        
    }
}

export default TaskCounter