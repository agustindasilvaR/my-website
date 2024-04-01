import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover } from '@blueprintjs/core';
import { Menu, MenuItem } from '@blueprintjs/core';
import '@blueprintjs/core/lib/css/blueprint.css';

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)


    return(

        <nav className="nav-bar">
        <NavLink to="/">
          <strong><a id="name">agustín da silva</a></strong>
        </NavLink>
        <NavLink className="nav-link" to="/experience">experience</NavLink>
        <NavLink className="nav-link" to="/ideas">ideas</NavLink>
        <a className="nav-link" href="assets/files/cv.pdf" target="_blank">resume</a>
        <NavLink className="nav-link" to="/lomography">lomography</NavLink>

        <Popover modifiers={{ arrow: { enabled: false }}}content={
            <Menu className="dropdown-menu dark-theme">
                <MenuItem text="experience" href='/experience'></MenuItem>
                <MenuItem text="ideas" href='/ideas'></MenuItem>
                <MenuItem text="resume" href='assets/files/cv.pdf' target='_blank'></MenuItem>
                <MenuItem text="lomography" href='/lomography'></MenuItem>
            </Menu>
        } placement="bottom">
            <FontAwesomeIcon id="dropdown" icon={faBars} />
        </Popover>
      </nav>

    )

}