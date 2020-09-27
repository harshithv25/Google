import React, { useState } from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { IconButton, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Search({ hidebuttons = false, name }) {

    const [{ }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const history = useHistory();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input,
        })

        history.push('/search');
    }
    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder={name} />
                <MicIcon className="search__inputIcon2" />
            </div>
            {!hidebuttons ? (
                <div className="search__buttons">
                    <Button variant="outlined" type="submit" onClick={search}>Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                    <div className="search__buttons">
                        <Button variant="outlined" className="search__buttonsHidden" type="submit" onClick={search}>Google Search</Button>
                        <Button variant="outlined" className="search__buttonsHidden" >I'm Feeling Lucky</Button>
                    </div>
                )}
        </form>
    )
}

export default Search
