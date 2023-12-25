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
import { useQuery, QueryClient, QueryClientProvider } from "react-query";
import { useNavigate } from "react-router-dom";
import fetchUsers from "../utils/fetcher";
export default function BasicCard() {
  const navigate = useNavigate();
  const { data, status,failureCount,isSuccess,isIdle,isPreviousData } = useQuery("users", fetchUsers);
  console.log("response is: ", data);
  console.log("status is: ", status);
  console.log("failureCount is: ", failureCount);
  console.log("isSuccess is: ", isSuccess);
  console.log("isIdle is: ", isIdle);
  console.log("isPreviousData is: ", isPreviousData);
  function getPrice(item) {
    console.log("item's price is: ", item.price);
    navigate("/payment");
  }

  return (
    <Grid container spacing={2}>
      {data ? (
        data.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ minWidth: 275, height: "100%" }}>
              <CardContent>
                <img
                  src={item.image}
                  width="150px"
                  height="150px"
                  alt={item.title}
                />

                <Typography
                  sx={{ fontSize: 14 }}
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

              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                p={1}
              >
                <Grid item>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ height: "23px", width: "23px" }}
                  />
                </Grid>
                {/* <Grid item>
        <Typography>Hello</Typography>
      </Grid> */}
                <Grid item>
                  <Button
                    sx={{
                      width: "100px",
                      backgroundColor: "#0033cc",
                      color: "white",
                    }}
                    onClick={() => getPrice(item)}
                  >
                    Pay
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </Grid>
  );
}
