import React from 'react';
import useGetComponent from '../hooks/useGetComponent';
import useGetOrderComponent from '../hooks/useGetOrderComponent';

const ComponentWrapper = ({ order, data }) => {
    const res = useGetOrderComponent({ order });
    return (
        <div>
            {useGetComponent({ componentCode: res?.component_code, style: res?.currentStyle, data: data })}
        </div>
    );
};

export default ComponentWrapper;
