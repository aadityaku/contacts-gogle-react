import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"


const TableData = (props) =>{
    return(
        <TableRow>
            <TableCell>{props.name}</TableCell>
            
            <TableCell>{props.email}</TableCell>
            <TableCell>{props.contact}</TableCell>
            <TableCell>{props.job}</TableCell>
        </TableRow>
    )
}

const ContactList = (props) =>{
    // const [data,setData] = useState(props.data);
    return(
        <TableContainer sx={{ maxHeight: 675 }}>
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Job title & company</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                 {
                     props.data.map((value,index)=>(
                         <TableData key={index} name={value.name} contact={value.contact} email={value.email} job={value.job}/>
                     ))
                 }
            </TableBody>
            
        </Table>
        </TableContainer>
    )
}
export default ContactList;