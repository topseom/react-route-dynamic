import React from 'react';

const PortfolioItemPage = (props) => (
    <div>
        <p>
            This is my portfolio item is {props.match.params.id}
        </p>
    </div>
);

export default PortfolioItemPage;