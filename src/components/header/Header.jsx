import React from 'react'
import './header.css';
import {Menu, Search, ArrowDropDown, Apps, Notifications} from '@material-ui/icons';
import {IconButton, Avatar} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import {selectUser, logout} from '../../features/userSlice';
import { auth } from '../../firebase';

const Header = () => {

    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(logout())
            })
    }

    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <Menu />
                </IconButton>
                <img 
                    src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png"
                    alt=""
                />
            </div>
            <div className="header__middle">
                <Search />
                <input placeholder="Search mail" type="text" />
                <ArrowDropDown className="header__inputCaret" />
            </div>
            <div className="header__right">
                <IconButton>
                    <Apps />
                </IconButton>
                <IconButton>
                    <Notifications />
                </IconButton>
                <Avatar onClick={signOut} src={user?.photoUrl} />
            </div>
        </div>
    )
}

export default Header
