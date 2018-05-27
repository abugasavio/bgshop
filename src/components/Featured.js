import React from 'react';

const Featured = ({featured}) => {
    return (
        <span>
            {featured
                ? (
                    <a className="ui right yellow corner label">
                        <i className="star icon"></i>
                    </a>
                )
                : (
                    <a className="ui right corner label">
                        <i className="empty star icon"></i>
                    </a>
                )
}</span>
    );
};

export default Featured;