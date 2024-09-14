import React, { useState } from "react";
import {
  CardMedia,
  Paper,
  CardHeader,
  Avatar,
  IconButton,
  Typography,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";

const CardContainer = ({ data }) => {
  const [count, setCount] = useState(0);
  const [example, setExample] = useState(data[0]);

  return (
    <Card className="max-w-[300px] h-fit my-auto">
      <CardMedia
        component="img"
        image={example.image}
      />
      <CardHeader
        title={`${example.firstName} ${example.lastName}`}
        subheader={`${example.email}`}
      />
      <CardContent>
        <Typography
          variant="p"
          color="initial"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
          incidunt, quam autem eos voluptates, quos tempora sunt eius
          consequatur excepturi laboriosam tempore. Autem velit reprehenderit
          quaerat, nisi mollitia numquam totam?
        </Typography>
      </CardContent>
      <CardActions className="mx-auto">
        <IconButton
          onClick={() => {
            setCount(count - 1);
            setExample(data[count]);
          }}
          disabled={count === 0 ? true : false}
        >
          <i className="fa-solid fa-less-than"></i>
        </IconButton>
        <IconButton
          onClick={() => {
            setCount((prev) => prev + 1);
            setExample(data[count]);
          }}
        >
          <i className="fa-solid fa-greater-than"></i>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default CardContainer;
