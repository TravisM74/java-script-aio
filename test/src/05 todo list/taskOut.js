export const TaskOut = (props) => {
    const buttonNeeded = () => {
        if(!props.completed) return <button onClick={() => props.completeTask(props.id)}>Complete</button> 
    }
    return (
        <div 
        className='task'
        style={{backgroundColor: props.completed ? 'green' : 'grey'}}>
            {props.taskName} 
            {buttonNeeded()} 
                      
            <button onClick={() => props.deleteTask(props.id)}>remove</button>
        </div>
      )
}
