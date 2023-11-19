import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 180 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Sort"
          onChange={handleChange}
          sx={{height:"40px"}}
        >
          <MenuItem value={10}>Recommended</MenuItem>
          <MenuItem value={20}>Curated</MenuItem>
          <MenuItem value={30}>Most Appreciated</MenuItem>
          <MenuItem value={40}>Most Viewed</MenuItem>
          <MenuItem value={50}>Most Discussed</MenuItem>
          <MenuItem value={60}>Most Recent</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
