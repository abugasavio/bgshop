import React from "react";
import PropTypes from "prop-types";

const Message = ({header, content, type}) => (
    <div className="ui icon message">
        {type === "warning" && <i className="icon warning"/>}
        {type === "success" && <i className="icon success"/>}
        {type === "info" && <i className="icon info"/>}
        {type === undefined && <i className="icon info"/>}
        <div className="content">
            <div className="header">{header}</div>
            <p>{content}</p>
        </div>
    </div>
);

Message.propTypes = {
    header: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    type: PropTypes.string
};

export default Message;
