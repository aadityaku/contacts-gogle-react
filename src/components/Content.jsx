import { Grid } from "@mui/material"
import ContactList from "./ContactList";
//import { Container } from "@mui/system"
import Side from "./Side";

const Content = ({data}) =>{
    return(
        
            <Grid container spacing={1}>
                <Grid item  lg={2.3}>
                  <Side/>
                </Grid>
                <Grid item  lg={9.7}>
                    
                    <ContactList data={data}/>
                </Grid>
            </Grid>
        
    )
}
export default Content;