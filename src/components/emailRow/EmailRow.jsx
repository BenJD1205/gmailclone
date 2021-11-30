import React from 'react'
import './emailRow.css'
import {Checkbox, IconButton} from '@material-ui/core';
import { StarBorderOutlined, LabelImportantOutlined } from '@material-ui/icons';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {selectMail} from '../../features/mailSlice';

const EmailRow = ({title,id, subject,description,time}) => {

    const history = useHistory();
    const dispatch = useDispatch();

    const openMail = () => {
        dispatch(selectMail({
            id,
            title,
            subject,
            description,
            time,
        }));
        history.push("/mail");
    }

    return (
        <div onClick={openMail} className="emailRow">
            <div className="emailRow__options">
                <Checkbox />
                <IconButton>
                    <StarBorderOutlined />
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined />
                </IconButton>
            </div>
            <h3 className="emailRow__title">
                {title}
            </h3>
            <div className="emailRow__message">
                <h4>
                    {subject}{" "}
                    <span className="emailRow__description">
                        {description}
                    </span>
                </h4>
            </div>
            <div className="emailRow__time">
                {time}
            </div>
        </div>
    )
}

export default EmailRow
