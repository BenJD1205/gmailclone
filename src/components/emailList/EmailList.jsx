import React, {useState, useEffect} from 'react'
import {Checkbox, IconButton} from '@material-ui/core';
import {ArrowDropDown, Redo, MoreVert, 
        ChevronLeft, ChevronRight, 
        Keyboard,Settings, Inbox, People, LocalOffer
} from '@material-ui/icons';
import EmailRow from '../emailRow/EmailRow';
import './emailList.css'
import Section from '../section/Section';
import {db} from '../../firebase';

const EmailList = () => {

    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('timestamp','desc').onSnapshot(
            snapshot => setEmails(snapshot.docs.map(doc => ({
                id:doc.id,
                data:doc.data()
            }))) )
    },[])   

    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox />
                    <IconButton>
                        <ArrowDropDown />
                    </IconButton>
                    <IconButton>
                        <Redo />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft />
                    </IconButton>
                    <IconButton>
                        <ChevronRight />
                    </IconButton>
                    <IconButton>
                        <Keyboard />
                    </IconButton>
                    <IconButton>
                        <Settings />
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                <Section Icon={Inbox} title="primary" color="red" selected />
                <Section Icon={People} title="Social" color="#1A73E8" />
                <Section Icon={LocalOffer} title="Promotions" color="green" />
            </div>
            <div className="emailList__list">
                {emails.map(({id,data:{to,subject, message, timestamp}}) => (
                    <EmailRow 
                        id={id}
                        key={id}
                        title={to}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds * 1000).toUTCString()}
                    />
                ))}
                <EmailRow 
                    title="Hello Ben"
                    subject="Hey fellow streamer!!!"
                    description="This is a test"
                    time="10pm"
                />
            </div>
        </div>
    )
}

export default EmailList
