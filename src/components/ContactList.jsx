import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline"
const TableData = (props) =>{
    const handleRemove = (id) =>{
        props.handleRemove(id);
        
    }
    return(
        <TableRow hover>
            <TableCell>{props.name}</TableCell>
            
            <TableCell>{props.email}</TableCell>
            <TableCell>{props.contact}</TableCell>
            <TableCell>{props.job}</TableCell>
    
            <TableCell><Button onClick={() => handleRemove(props.id)} variant="contained" color="error" ><DeleteOutlineIcon/></Button></TableCell>
        </TableRow>
    )
}

const ContactList = (props) =>{
    // const [data,setData] = useState(props.data);
    const handleRemove = (id) =>{
         props.handleDelete(id);
        
    }
    return(
        <TableContainer sx={{ maxHeight: 675 }}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Job title & company</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 {
                     props.data.map((value,index)=>(
                         <TableData key={index} handleRemove={(id) => handleRemove(id)} id={value.id} name={value.name} contact={value.contact} email={value.email} job={value.job}/>
                     ))
                 }
            </TableBody>
            
        </Table>
        </TableContainer>
    )
}
export default ContactList;