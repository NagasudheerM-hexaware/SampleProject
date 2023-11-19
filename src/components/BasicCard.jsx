import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import InfoIcon from "@mui/icons-material/Info";

import axios from "axios";

export default function BasicCard() {
  const [data, setData] = useState([]); // Initial empty array of data

  useEffect(() => {
    const fetchData = async () => {
      console.log("BasicCard component loaded");

      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setData(response.data); // Set the data in the local state
        console.log(response.data);
      } catch (e) {
        console.log("Error: ", e);
      }
    };

    fetchData(); // Call the async function
  }, []);

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ minWidth: 275,height:'100%' }}>
            <CardContent>
              <img
                src={item.image}
                width="150px"
                height="150px"
                alt={item.title}
              />

              <Typography
                sx={{ fontSize: 14}}
                color="text.secondary"
                gutterBottom
                width={200}
                noWrap={true}
              >
                {item.title}
              </Typography>
              <Typography variant="h5" component="div">
                {item.price}
              </Typography>

              {/* <Typography variant="body2">{item.description}</Typography> */}
            </CardContent>
        
            <Grid container direction="row" justifyContent="space-between" alignItems="center" p={1}>
      <Grid item>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ height: '23px', width: '23px' }}
        />
      </Grid>
      {/* <Grid item>
        <Typography>Hello</Typography>
      </Grid> */}
      <Grid item>
        <Typography>
          <InfoIcon />
        </Typography>
      </Grid>
    </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  // return data.map((item) => (

  //     <Card sx={{ minWidth: 275 }}>
  //       <CardContent>
  //         <img src={item.image} width="150px" height="120px" alt={item.title} />

  //         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  //           {item.title}
  //         </Typography>
  //         <Typography variant="h5" component="div">
  //           {item.price}
  //         </Typography>

  //         <Typography variant="body2">{item.description}</Typography>
  //       </CardContent>
  //       <CardActions>
  //         <Button size="small">Learn More</Button>
  //       </CardActions>
  //     </Card>

  // ));
}
