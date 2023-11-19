import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";
import DoneIcon from "@mui/icons-material/Face";
import { IconButton } from "@mui/material";
import BasicSelect from "./Dropdown";
import Grid from "@mui/material/Grid";

export default function IconChips() {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <Stack direction="row" spacing={2} pl={2}>
          <Chip icon={<FaceIcon />} label="Photography -" />
          <Chip icon={<FaceIcon />} label="Tools -" variant="outlined" />
          <Chip icon={<FaceIcon />} label="Color -" />
          <Chip icon={<FaceIcon />} label="Camera -" variant="outlined" />
          <Chip icon={<FaceIcon />} label="With Icon -" />
          <Chip icon={<FaceIcon />} label="With Icon -" variant="outlined" />
          <Chip icon={<FaceIcon />} label="With Icon -" />
          <Chip icon={<FaceIcon />} label="With Icon -" variant="outlined" />
        </Stack>
        </Grid>
        <Grid item>
          <BasicSelect />
        </Grid>
      </Grid>
 
  );
}
