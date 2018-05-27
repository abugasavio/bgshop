import React from 'react';
import PropTypes from 'prop-types';

const Message = ({header, content, type}) => {
    let icon = ''
    if (type === 'warning') {
        icon = <i className="icon warning"/>;
    } else if (type === 'success') {
        icon = <i className="icon success"/>;
    } else {
        icon = <i className="icon info"/>;
    }

    return (
        <div className="ui icon message">
            <icon/>
            <div className="content">
                <div className="header">{header}</div>
                <p>{content}</p>
            </div>
        </div>
    );
};

Message.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default Message;