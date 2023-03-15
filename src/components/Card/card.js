import React, { useState } from 'react';
import {Card ,Typography,CardActionArea ,CardContent,CardMedia} from '@mui/material';
import Modal from './bookmodel';





function BookCard({ title, author, coverImage ,discription , item}) {

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(item + " i am in cards");

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  

  return (
    
      <>
      
    <Card sx={{ maxWidth: 275}} >
    <CardActionArea onClick={handleCardClick} >
      <CardMedia
        component="img"
        height="400"
        image={coverImage}
        alt="Cover page"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {author}
        </Typography>
        <Typography>
          
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
   <Modal show={isModalOpen} item={item} onClose={handleCloseModal} />
  </>
    
  );
}

export default BookCard;