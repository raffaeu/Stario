/** React */
import React from 'react';

/** Antd */
import { Button } from 'antd';

/** Style and media */
import './StarioApp.less';

class StarioApp extends React.PureComponent {
    render() {
        return (
            <div className="stario-app">
                <Button type="primary">Button</Button>
            </div>
        );
    }
}

export default StarioApp;
