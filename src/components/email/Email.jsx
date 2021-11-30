import React from 'react'
import './email.css';
import {IconButton} from '@material-ui/core';
import {ArrowBack, MoveToInbox, Error, 
        Delete, EmailOutlined, WatchLater,
        CheckCircle,LabelImportant, MoreVert,
        UnfoldMore,Print,ExitToApp
} 
from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {selectOpenMail} from '../../features/mailSlice';

const Email = () => {
    
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail);
    console.log(selectedMail?.title);

    return (
        <div className="mail">
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    <IconButton onClick={() => history.push("/")}>
                        <ArrowBack />
                    </IconButton>
                    <IconButton>
                        <MoveToInbox />
                    </IconButton>
                    <IconButton>
                        <Error />
                    </IconButton>
                    <IconButton>
                        <Delete />
                    </IconButton>
                    <IconButton>
                        <EmailOutlined />
                    </IconButton>
                    <IconButton>
                        <WatchLater />
                    </IconButton>
                    <IconButton>
                        <CheckCircle />
                    </IconButton>
                    <IconButton>
                        <LabelImportant />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="mail__toolsRight">
                    <IconButton>
                        <UnfoldMore />
                    </IconButton>
                    <IconButton>
                        <Print />
                    </IconButton>
                    <IconButton>
                        <ExitToApp />
                    </IconButton>
                </div>
            </div>  
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className="mail__important" />
                    <p>{selectedMail?.title}</p>
                    <p className="mail__time">{selectedMail?.apply?.time}</p>
                </div>
                <div className="mail__message">
                    {selectedMail?.message}
                </div>
            </div>
        </div>
    )
}

export default Email
