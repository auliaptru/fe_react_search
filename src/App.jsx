import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiTimeFive } from 'react-icons/bi';

import './app.scss';

const data = [
    'How to design',
    'How to work hard',
    'How to choose font',
    'How to choose color palette',
];

const App = () => {
    const [search, setSearch] = useState('');

    const filterData = (query, data) => {
        if (!query) {
            return data;
        } else {
            return data.filter((d) => d.toLowerCase().includes(query));
        }
    };

    const dataFiltered = filterData(search, data);

    return (
        <div className='app__search'>
            <nav>
                <h1 className='nav__logo'>Seker</h1>
                <ul className='nav__menu'>
                    <li>
                        <a>Images</a>
                    </li>
                    <li>
                        <a>Videos</a>
                    </li>
                    <li>
                        <a>Maps</a>
                    </li>
                    <li>
                        <a>News</a>
                    </li>
                    <li>
                        <a>Product</a>
                    </li>
                </ul>
                <div className='nav__sign'>
                    <select name='sign' id='sign'>
                        <option value='sign in'>Sign in</option>
                        <option value='sign in'>Sign up</option>
                    </select>
                </div>
            </nav>
            <div className='search'>
                <form>
                    <FiSearch className='searchIcon' />
                    <input
                        placeholder='Search...'
                        type='search'
                        name='search'
                        id='search'
                        onInput={(e) => setSearch(e.target.value)}
                    />
                    <button type='submit'>Search</button>
                </form>
                {search && (
                    <div className='search__filter'>
                        {dataFiltered.map((data, i) => (
                            <div key={i} className='result'>
                                <BiTimeFive />
                                <span>{data}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
