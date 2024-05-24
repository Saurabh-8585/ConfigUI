import { useMemo,useCallback,use } from 'react';
import useScreenSize from './useScreenSize';
import data from '../utils/Data';

const useGetOrderComponent = ({ order }) => {
    const screenSize = useScreenSize();

    const component = useMemo(() => {
        let screenSizeKey = '';
        if (screenSize.sm) {
            screenSizeKey = 'sm';
        } else if (screenSize.md) {
            screenSizeKey = 'md';
        } else if (screenSize.lg) {
            screenSizeKey = 'lg';
        } else if (screenSize.xl) {
            // this is done because already styles are  present for xl same as lg
            screenSizeKey = 'lg';
        }

        const foundComponent = data.find(item => item?.orders[screenSizeKey] === order && !item?.isDisable[screenSizeKey]);
        return foundComponent && { ...foundComponent, currentStyle: foundComponent?.styles[screenSizeKey] };
    }, [screenSize, order]);

    return component;
};

export default useGetOrderComponent;
