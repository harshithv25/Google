import React from 'react';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import './Home.css';
import { Avatar, IconButton } from '@material-ui/core';
import Search from './Search';

function Home() {
    //? These are the components for the thing....Like the thing that is displayed in router.......look to ur left and tell which file to open......//
    //!in discord tell da.......fast..and btw did u notice how i change the comment color
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <IconButton>
                        <AppsIcon />
                    </IconButton>
                    <IconButton>
                        <Avatar />
                    </IconButton>
                </div>
            </div>
            <div className="home__body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt="" />
                <div className="home__inputContainer">
                    <Search hidebuttons />
                </div>
            </div>
        </div>
    )
}

export default Home
