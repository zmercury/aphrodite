import React from 'react';

// Icons
import { FiSearch } from "react-icons/fi";

//user components
import { Menu, SearchBar, SideContainer, Details } from './Sidebar.elements';

const Sidebar = () => {
    return (
        <SideContainer>
            <Menu>
                <FiSearch size={18}/>
            </Menu>
            <SearchBar>
                <input className='searchInput' placeholder='Another location'></input>
            </SearchBar>
            <Details>
            
            </Details>
        </SideContainer>
    )
}

export default Sidebar;