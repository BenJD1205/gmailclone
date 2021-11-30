import React from 'react'
import './sidebar.css';
import SidebarOptions from '../sidebaroptions/SidebarOptions';
import {Button, IconButton} from '@material-ui/core';
import {Add, Inbox, Star, AccessAlarm, NearMe, 
        LabelImportant, Note, ExpandMore, Person,
        Phone, DuoOutlined
} 
from '@material-ui/icons';
import {useDispatch} from 'react-redux';
import {openSendMessage} from '../../features/mailSlice';

const Sidebar = () => {

    const dispatch = useDispatch()

    return (
        <div className="sidebar">
            <Button 
                startIcon={<Add fontSize="large" />}
                className="sidebar__compose"
                onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>
            <SidebarOptions Icon={Inbox} title="Inbox" number={54} selected={true} />
            <SidebarOptions Icon={Star} title="Stared" number={54} />
            <SidebarOptions Icon={AccessAlarm} title="Smoozed" number={54} />
            <SidebarOptions Icon={LabelImportant} title="Important" number={54} />
            <SidebarOptions Icon={NearMe} title="Send" number={54} />
            <SidebarOptions Icon={Note} title="Drafts" number={54} />
            <SidebarOptions Icon={ExpandMore} title="More" number={54} />
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person />
                    </IconButton>
                    <IconButton>
                        <DuoOutlined />
                    </IconButton>
                    <IconButton>
                        <Phone />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
