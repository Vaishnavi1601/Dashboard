import React from 'react';
import { TextField, MenuItem, IconButton, InputAdornment, Button, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import arrowUp from "../../icons8-up-50.png";
import arrowDown from "../../icons8-down-50.png"
import download from "../../icons8-download-24.png"
import filter from "../../icons8-filter-30.png"
import AddIncident from './AddIncident';
function SearchAdd() {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
        
    
        <div style={{
          width: "665px",
          height: "75px",
          backgroundColor: "white",
          marginTop: "70px",
          position:"relative",
          left:"40px",
          display: 'flex',
          alignItems: 'center',
          
        }}>
            
          <TextField
            variant="standard" // Use standard variant for underline
            placeholder="Search..."
            style={{ flex: 1, marginRight: '16px' }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              style: { 
                marginLeft:"21px",
                borderBottom: '1px solid #ccc', // Underline style
              },
            }}
          />
          <TextField
        select
        variant="standard"  
        
        style={{ marginRight: '16px', width: '120px' }}
        InputProps={{
          style: { fontWeight: 'bold', borderBottom: 'none' },
        }}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <MenuItem key={i} value={i + 1} style={{ fontWeight: 'bold' }}>
            {new Date(0, i).toLocaleString('default', { month: 'long' })}
          </MenuItem>
        ))}
      </TextField>
         <TextField
        select
        variant="standard"
        style={{ marginRight: '16px', width: '120px' }}
        InputProps={{
          style: { fontWeight: 'bold', borderBottom: 'none' },
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <MenuItem key={i} value={2020 + i} style={{ fontWeight: 'bold' }}>
            {2020 + i}
          </MenuItem>
        ))}
      </TextField>
      <img src={filter} alt="up Arrow"/>
      <img src={arrowUp} alt="up Arrow" style={{height:"30px"}}/>
      <img src={arrowDown} alt="down Arrow" style={{marginLeft:"-19px", marginTop:"7px",height:"30px"}}/>
      <img src={download} alt="up Arrow"/>
      
        </div>
        <div>
            <AddIncident style={{ marginLeft: '60px' }} />
        </div>
        </div>
      );
}

export default SearchAdd;
