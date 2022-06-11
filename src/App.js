import Content from "./components/Content";
import Header from "./components/Header";
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import {  useState } from "react";
import ContactData from "./data/ContactData";
function App() {
  const [open,setOpen] = useState(false);
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [contact,setContact] = useState("");
  const [job,setJob] = useState("");
  const [data,setData] = useState(ContactData);
  const [icon,setIcon] = useState(true);
  
  const [searchData,setSearchData] = useState('');
   const HandleSubmit = () =>{
   
    setData((item)=>([...item,{id:data.length+1,name:name,email:email,job:job,contact:contact}]));
   
    
    setName('');
    setEmail('');
    setContact('');
    setJob('');
    handleClose();
    
    
  }
  
  
   const handleDelete = (id)=>{

      let newArray = data.filter((item) => item.id !== id);
      
      setData(newArray);
   }

  const handleOpen = () =>{
    setOpen(true);
  }
  const handleIcon = () =>{
    if(icon === false){
      setIcon(true)
      console.log(icon);
    }
    else{
      setIcon(false)
      console.log(icon);
    }
   
    
  }
  
  const handleClose = () =>{
    setOpen(false);
  }

  const handleSearch = (search) =>{    
    setSearchData(search);
   
  }
  return (
    <>
     <Header handleIcon={()=>handleIcon()} search={(search) => handleSearch(search)}/>
       <Fab onClick={handleOpen} color="primary" aria-label="add" sx={{position:"absolute",right:40,bottom:20}}>
          <AddIcon />
       </Fab>
       <Dialog open={open} onClose={handleClose}>
         <DialogTitle>Insert Here Contact</DialogTitle>
         <DialogContent>
           <TextField fullWidth variant="outlined" value={name} onChange={(e) => setName(e.target.value)} label="Name" sx={{marginTop:2}}></TextField>
           <TextField fullWidth variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} label="Email" sx={{marginTop:2}}></TextField>
           <TextField fullWidth variant="outlined" value={contact} onChange={(e) => setContact(e.target.value)} label="Contact" sx={{marginTop:2}}></TextField>
           <TextField fullWidth variant="outlined" value={job} onChange={(e) => setJob(e.target.value)} label="Job & Comapny" sx={{marginTop:2}}></TextField>
         </DialogContent>
         <DialogActions sx={{marginRight:2}}>
           <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
           <Button onClick={HandleSubmit} variant="contained" >Save</Button>
           
         </DialogActions>
       </Dialog>
    <Content data={data} search={searchData} handleDelete={(id) => handleDelete(id)} handleSide={icon} handleModel={() => handleOpen()}/>
  
    </>
   
  );
}

export default App;
