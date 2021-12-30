
import './App.css';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {

  const tasks = [
    {
      finished: true,
      tname: "finish HTML"
    },

    {
      finished: false,
      tname: "finish React"
    },

    {
      finished: true,
      tname: "Learn NodeJS"
    },

    {
      finished: false,
      tname: "Learn ExpressJS"
    },

    {
      finished: true,
      tname: "Learn MongoDB"
    },
  ]

  const [check, setCheck] = useState("");
  const [initialTasks, setInitialTasks] = useState(tasks)

  const setArr = (status) => {
    if (status === "All") {
      setInitialTasks(tasks);
    } else if(status === 'Completed'){
      setInitialTasks(tasks.filter((t) => t.finished === true))
    } else if (status === "Active") {
      setInitialTasks(tasks.filter((t) => t.finished === false))
    }
  }

  return (
    <div className="App">
              <div>
          <p className='title'>To Do Tasks</p>
        </div>
        <div>

          <TextField fullWidth label="New Task..." id="fullWidth" />
        </div>
        <div className='group-title'>
          <Button variant="text" onClick={() => setArr("All")

          }>All</Button>
          <Button variant="text" onClick={() => setArr("Active")

          } >Active</Button>
          <Button variant="text" onClick={() => setArr("Completed")}>Completed</Button>

        </div>
        <div className='tasks-list'>
          {
           
          initialTasks.map((arr) => {
            return(
            <FormGroup>
                <FormControlLabel
            control={
              <Checkbox defaultValue={arr.finished} onClick={() => setCheck(!check)} name="task" />
            }
            label= {arr.tname} 
            style={{textDecoration :arr.finished===true?'line-through' :null}}     
                 />
          
            </FormGroup>
            
            ) 
          })
      
        } 
        </div>
      </div>

      );
     
}

export default App;
