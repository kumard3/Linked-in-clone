import React from 'react'
import Headeroption from './Headeroption'
import linkedin from './linkedin.png'
import SearchIcon from '@material-ui/icons/Search'
import Home from '@material-ui/icons/Home'
import SAI from '@material-ui/icons/SupervisorAccount'
import BCI from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import Notification from '@material-ui/icons/Notifications'
import './Header.css'
function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <img src={linkedin} alt="avatart"/>
                <div className="header_search">  
                {/* <SearchIcon/>
                <input type="text"/> */}
                </div>
              
            </div>
            <div className="header_right">
                <Headeroption Icon={Home} title="Home"/>
                <Headeroption Icon={SAI} title="My Network"/>
                <Headeroption Icon={BCI} title="Job"/>
                <Headeroption Icon={ChatIcon} title="Messanging"/>
                <Headeroption Icon={ChatIcon} title="Notifications"/>


            </div>
            
        </div>
    )
}

export default Header
