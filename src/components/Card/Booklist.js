import { Grid } from '@mui/material';
import { data } from '../../books';
import BookCard from './card';
import './card.css'



function BookList({ search }) {
  console.log(search + "in Booklist")
    return ( <>
    
    <section >
    <Grid container spacing={2} mt={8} style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}> 
      {data.filter((item)=>{
        return search.toLowerCase() === ' ' ? item : item.title.toLowerCase().includes(search);
      }).map((item, index) => (
        <Grid item xs={12} sm={6} md={4}  key={index}>
          <BookCard
            item={item}
            title={item.title}
            coverImage={item.thumbnailUrl}
            author={item.authors}
            description={item.longDescription}
          />
        </Grid>
      ))}
    </Grid></section></>
  );
}



export default BookList;