import React from 'react';
import Card1 from '../Component/Card1';
import Card2 from '../Component/Card2';
import Card3 from '../Component/Card3';
import Card4 from '../Component/Card4';

const useGetComponent = ({ componentCode, style, data }) => {
    const componentCodeMap = {
        "Card1": <Card1 style={style} data={data} />,
        "Card2": <Card2 style={style} data={data} />,
        "Card3": <Card3 style={style} data={data} />,
        "Card4": <Card4 style={style} data={data} />,
    };

    return componentCodeMap[componentCode] && componentCodeMap[componentCode];
};

export default useGetComponent;
