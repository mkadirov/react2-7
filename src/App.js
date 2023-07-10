import React from "react";
import { Grid, Button, Fab, ButtonGroup, IconButton, Divider, Badge, ListItemButton, ListItemText, Chip} from "@mui/material";
import { Add, AddIcon, Block, Delete, Mail, Send} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Yogurt', 159, 6.0, 24, 4.0),
    createData('Muzqaymoq', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Pirog', 305, 3.7, 67, 4.3),
    createData('Kurasant', 356, 16.0, 49, 3.9),
  ];
  
  return (
    <div className="App">
      <h1>Buttons</h1>
      
        
      <Grid container spacing={2}>
        <Grid item xs={12}>
        <div className="simple">
          <Button variant="contained" >contained</Button>
          <Button variant="text" >text</Button>
          <Button variant="outlined" >Outlined</Button>
        </div>
        </Grid>
        <Grid item xs={12}>
          <div className="disabled-elevation">
            <Button variant="contained" disableElevation>disableelevation</Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          
            <Button variant="contained" disabled>disabled</Button>
            <Button variant="contained" href="#">Link</Button>
        </Grid>

        <Grid item xs={12}>
          
            <Button variant="contained" color="success">success</Button>
            <Button variant="contained" color="error">error</Button>
            <Button variant="contained" color="warning">warning</Button>
            <Button variant="outlined" color="error">outlined-error</Button>
        </Grid>
        <Grid item xs={12}>
          
            <Button variant="contained" color="primary" size="small">small</Button>
            <Button variant="contained" color="primary" size="medium">medium</Button>
            <Button variant="contained" color="primary" size="large">large</Button>
            
        </Grid>
        <Grid item xs={4}>
          
            <Button variant="contained" color="warning" fullWidth>Full-width</Button>
            
            
        </Grid>
        <Grid item xs={12}>
          <Fab color="primary" aria-label="add">
           <Add/>
          </Fab>

          <ButtonGroup  variant="contained" aria-label="outlined primary button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Grid>

        <Grid item xs={12}>
            <Divider sx={{marginY: "20px"}}/>
            <h1>Data Display</h1>
            <Button variant="contained" startIcon={<Send/>}>
              Send
            </Button>
            <IconButton aria-label="delete">
              <Delete />
            </IconButton>
        </Grid>

        <Grid item xs={12} >
        <Stack direction="row" spacing={2}>
             <Avatar alt="Remy Sharp" src="https://tse1.mm.bing.net/th?id=OIP.nA9bNHskhuCy7pn_4IUtMQHaJ4&pid=Api&P=0&h=180" />
             <Avatar alt="Travis Howard" src="https://tse3.mm.bing.net/th?id=OIP.b5XQ_W2p39q81ef8OhtCQgHaFj&pid=Api&P=0&h=180" />
             <Avatar alt="Cindy Baker" src="https://tse3.mm.bing.net/th?id=OIP.dpYFtLkYN6ZuBUJA1EL1cwHaFj&pid=Api&P=0&h=180" />
        </Stack>   
        </Grid>

        <Grid item xs={12}>
          <Badge badgeContent={5} sx={{marginRight: "20px"}}  color="secondary">
           <Mail color="action" />
         </Badge>
         <Badge badgeContent={4} color="success">
            <Mail color="action" />
         </Badge>
        </Grid>
        
        <Grid item xs={12}>
          <Chip label="Chip Filled" />
          <Chip label="Chip Outlined" variant="outlined" />
        </Grid>

        <Grid item xs={8}>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Kaloriya</TableCell>
            <TableCell align="right">Oqsil&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Uglevodlar&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>
      </Grid>
        
    </div>
  );
}

export default App;
