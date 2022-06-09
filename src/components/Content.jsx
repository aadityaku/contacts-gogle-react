import { Grid } from "@mui/material"
import ContactList from "./ContactList";
//import { Container } from "@mui/system"
import Side from "./Side";

const Content = (props) =>{
    const handleDelete = (id) =>{
         props.handleDelete(id);
         
    }
    // const handleSide = () =>{
    //     props.handleSide();
    // }
    return(
        
            <Grid container spacing={1}>
                 
                    {
                       
                        props.handleSide && 
                        <>
                        <Grid item  lg={2.3}> 
                            <Side/>
                         </Grid>
                        <Grid item  lg={9.7}>
                    
                          <ContactList data={props.data} handleDelete={(id) => handleDelete(id)}/>
                        </Grid>
                        </>
                        
                        
                    }
                 
               
                 {
                    !props.handleSide &&
                    <Grid item  lg={12}>
                    
                        <ContactList data={props.data} handleDelete={(id) => handleDelete(id)}/>
                    </Grid>
                 }
            </Grid>
        
    )
}
export default Content;