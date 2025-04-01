import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React from "react";
import "./Card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <Typography variant="h5" component="h3" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => alert(title)}
      >
        Дізнатися більше
      </Button>
    </div>
  );
};

export default Card;
