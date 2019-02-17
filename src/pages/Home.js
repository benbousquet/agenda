import React from "react";
import Button from 'antd/lib/button';
import {inject, observer} from "mobx-react";
import Empty from 'antd/lib/empty';
import List from 'antd/lib/list';

@inject('MainStore')
@observer
class Home extends React.Component{
    render () {
        const { MainStore } = this.props;
        if (MainStore.eventCount == 0)
        return (
            <React.Fragment>
                <h1>Home</h1>
                <Empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" description={
                    <span>
                        Nothing? Really? You're Boring...
                    </span>
                }>
                    <Button type="primary">Add Event</Button>
                </Empty>
                </React.Fragment>
        )

        else return (
            <React.Fragment>
            </React.Fragment>
        )
    }
    
}
export default Home