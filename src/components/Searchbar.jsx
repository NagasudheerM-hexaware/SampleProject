import React, { useState } from "react";
import { AppBar, Toolbar, TextField, Chip, Stack } from "@mui/material";

const SearchAppBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [chips, setChips] = useState([]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchKeyDown = (event) => {
    if (event.key === "Enter" && searchQuery.trim() !== "") {
      setChips([...chips, searchQuery.trim()]);
      setSearchQuery("");
    }
  };

  const handleChipDelete = (chipToDelete) => () => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };

  return (
    <AppBar position="static"  elevation={0} sx={{ backgroundColor: "white", color: "black" }}>
      <Toolbar>
        {/* Search bar extending to the right */}
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          style={{ width: "80%" }}
        >
          <TextField
            label="Search"
            variant="outlined"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Stack>
     
        <Stack direction="row" spacing={1} pl={2}>
          <Chip label="Projects" variant="outlined" />
          <Chip label="Images" sx={{backgroundColor:"black",color:"white"}}  />
          <Chip label="Prototypes" />
          <Chip label="Projects" variant="outlined" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default SearchAppBar;
