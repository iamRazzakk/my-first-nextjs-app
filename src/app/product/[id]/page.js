import React from 'react';

const DynamicId = ({params}) => {
    console.log(params);
    return (
        <div>
            <h1>This is dynamic id: {params.id}</h1>
        </div>
    );
};

export default DynamicId;