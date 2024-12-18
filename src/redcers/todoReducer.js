
import {v4 as uuidv4} from 'uuid';
const todo=[
    {
        id:uuidv4,
        complete:false,
        title:"task"

    }


]
const todoReducer=(state=todo,{action})=>{
    switch (action.payload) { 
        case ADD: return [...state,{title:action.pauload, id:uuidv4,}]
        case DELETE: return state.filter(el=>el.id!==action.payload)
        case COMPLETE: return state.map(el=>el.id===action.payload ? {...el,complete:!el.complete}:el)
        case UPDATE: return state.map(el=>el.id===action.payload.id ? {...el,title:action.payload.editTask}:el)
            
            break;
    
        default:
            break;
    }
return state
}
export default todoReducer