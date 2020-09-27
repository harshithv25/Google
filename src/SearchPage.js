import React from 'react';
import './SearchPage.css';
import { useStateValue } from './StateProvider';
import response from './response';
import { Link } from 'react-router-dom';
import Search from './Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import useGoogleSearch from './useGoogleSearch';

function SearchPage() {

    const [{ term }, dispatch] = useStateValue();
    const { data } = useGoogleSearch(term);
    console.log(data);
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to=''>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" className='searchPage__logo' alt="" />
                </Link>
                <div className="searchPage__headerBody">
                    <Search hidebuttons={true} name={term} />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to='/all'>All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to='/news'>News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to='/images'>Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to='/shopping'>Shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to='/maps'>Maps</Link>
                            </div>

                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to='/more'>More</Link>
                            </div>
                        </div>
                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to='/settings'>
                                    Settings
                                </Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to='/tools'>
                                    Tools
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (

                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results in {data?.searchInformation.formattedSearchTime} for <span>{term}</span>
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a href={item.link}>
                                {item.displayLink}♦
                            </a>
                            <a href={item.link} className="searchPage__resultTitle">
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default SearchPage
