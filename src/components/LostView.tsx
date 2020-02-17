import React from 'react';
import {Link} from 'react-router-dom';
import {Result, Button} from 'antd';

const LostView = () => (
    <Result
        style={{padding: 32}}
        status="404"
        title="迷路了"
        subTitle="抱歉, 你可能进入了错误的地址"
        extra={(
            <Link to="/summary">
                <Button type="primary">返回首页</Button>
            </Link>
        )}
    />
);

export default LostView;
