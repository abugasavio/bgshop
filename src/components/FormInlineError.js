import React from 'react';
import PropTypes from 'prop-types';

const FormInlineError = ({content, type}) => {
    return (
        <span
            style={{
            color: type === "error"
                ? "#9f3a38"
                : "#6597a7"
        }}>
            {content}
        </span>
    );
};

FormInlineError.propTypes = {
    content: PropTypes.string,
    type: PropTypes
        .oneOf(["error", "info"])
        .isRequired
}

FormInlineError.defaultProps = {
    content: ""
};

export default FormInlineError;