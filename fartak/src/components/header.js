import { useState } from 'react';
import '../styles/header.css';
import searchIcon from '../assets/search-icon.png'
import logo from '../assets/logo.jpg'
import nameCopany from '../assets/nameCopany.png'



function Header() {
    const [searchValue, setSearchValue] = useState('');
    const [option, setOption] = useState(1);

    return (
        <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}></div>
            <div>
                <img src={logo} alt='logo' style={{ flex: "1", marginTop: "10px" }} />
            </div>
            <div className='header-container'>
                <div className="search-box">

                    <input
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        placeholder="جستجو"
                    />
                    <img className='search-icon' alt='search-icon' src={searchIcon} style={{ width: "25px" }} onClick={() => alert(searchValue)} />
                </div>
                <div className='options-container'>
                    <div className={option === 1 ? 'selected-option' : 'none'} onClick={() => setOption(1)}>خانه</div>
                    <div className={option === 2 ? 'selected-option' : 'none'} onClick={() => setOption(2)}>خدمات ما</div>
                    <div className={option === 3 ? 'selected-option' : 'none'} onClick={() => setOption(3)}>درباره ما</div>
                    <div className={option === 4 ? 'selected-option' : 'none'} onClick={() => setOption(4)}>مقالات</div>
                    <div className={option === 5 ? 'selected-option' : 'none'} onClick={() => setOption(5)}>تماس با ما</div>
                </div>
                <div>
                    <img src={nameCopany} alt='company-name' style={{ width: "100px", flex: "1" }} />
                </div>
            </div>

        </div>
    );
}

export default Header;
