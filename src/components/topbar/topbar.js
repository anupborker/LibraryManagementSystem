import "./topbar.css"
import { Search } from "@mui/icons-material"
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import GTranslateOutlinedIcon from '@mui/icons-material/GTranslateOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import { useState } from "react";

export default function Topbar({onSearch}){
    const [search,setSearch] = useState('');
    console.log(search + "in Topbar")

    const handleInputChange = (event) => {
        setSearch(event.target.value);
        onSearch(event.target.value);
      };

    return (
    <div className="topbarcontainer">
        <div className="topbarleft">
           <span className="logo">
           Taluka Libary Ponda</span>
        </div>
        <div className="topbarmiddle">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="Serach for books" type="text" className="searchInput"  value={search} onChange={handleInputChange}  />
            </div>
        </div>
        <div className="topbarright">
            <span className="topbarlinks"> <CategoryOutlinedIcon className="topbarIcons"/> Categories</span>
            <span className="topbarlinks"> <GTranslateOutlinedIcon className="topbarIcons"/>  Language</span>
            <span className="topbarlinks"><LoginOutlinedIcon className="topbarIcons"/>Login</span>
        </div>
    </div>
    );
}