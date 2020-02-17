import React from 'react';
import {useLocation, Link} from 'react-router-dom';
import {Breadcrumb as AntBreadcrumb} from 'antd';

import {PATH_MAP} from '../constants';
import {identity} from '../utils';

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname
        .split('/')
        .filter(identity)
        .reduce((acc, val) => [
            ...acc,
            `${acc.length ? acc[acc.length - 1] : ''}/${val}`,
        ], [] as string[]);

    return (
        <AntBreadcrumb style={{margin: 16}}>
            {paths.filter(identity).map(path =>
                <AntBreadcrumb.Item key={path}>
                    <Link to={path}>{PATH_MAP[path] || '?'}</Link>
                </AntBreadcrumb.Item>
            )}
        </AntBreadcrumb>
    );
}

export default Breadcrumb;
