import React from 'react';
import PropTypes from 'prop-types';

const Featured = ({featured, toggleFeatured}) => {
    return (
        <span>
            {featured
                ? (
                    <a className="ui right yellow corner label" onClick={toggleFeatured}>
                        <i className="star icon"></i>
                    </a>
                )
                : (
                    <a className="ui right corner label" onClick={toggleFeatured}>
                        <i className="star icon"></i>
                    </a>
                )
}</span>
    );
};

Featured.propTypes = {
    featured: PropTypes.string.isRequired,
    toggleFeatured: PropTypes.func.isRequired
};

export default Featured;