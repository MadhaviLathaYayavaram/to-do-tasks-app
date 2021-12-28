
import './App.css';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {

  const [group, setGroup] =useState('All');
  const [check, setCheck] = useState("");
  const setArr = null;
   
  const tasks = [
    {finished: true,
      tname: "finish HTML"},

    { finished: false,
      tname: "finish React"},

    { finished: true,
      tname: "Learn NodeJS"},
  ]
  
  
 
  return (
    <div className="App">
      <div >
        <div>
      <p className='title'>To Do Tasks</p>
      </div>
      <div>
        
               <TextField fullWidth label="New Task..." id="fullWidth"  />
      </div>
      <div className='group-title'>
      <Button variant="text" onClick={() => setGroup("All")

    }>All</Button>
      <Button variant="text" onClick= { () => setGroup("Active")
      
               } >Active</Button>
      <Button variant="text" onClick={() => setGroup("Completed")

    
      }>Completed</Button>

      </div>

      { function setArr (){
      if (setGroup ==="All") {
     return  (
       <div className='tasks-list'> {

       tasks.filter((t)=>t.finished===true).map((arr)=> 
           
         <FormGroup>
         <FormControlLabel 
         control={<Checkbox 
         defaultValue={arr.finished} 
         onClick = {  () => setCheck(!check)}
         onchange = {() => {arr.finished=setCheck}}
         />
         
         } label={arr.tname} />
        
       </FormGroup>   ) 
   }
      
    </div>  
     )
     
   }
   if (setGroup ==="Completed") {
     
   }
   if (setGroup ==="Active" ){
     
   }
 
    }

  }
      </div>
    </div>
  );
}

export default App;
