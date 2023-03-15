import React, { useState } from 'react';
import Topbar from '../../components/topbar/topbar';
import BookList from '../../components/Card/Booklist';



export default function Home(){

  const [search, setSearch] = useState('');

  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  console.log(search + "in App")

  return (
    <>
      <Topbar onSearch={handleSearch} /> 
      <BookList search={search} />
      
    </>
  );
}