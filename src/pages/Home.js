import React from "react";
import {inject, observer} from 'mobx-react'
import Button from 'antd/lib/button';
@inject('MainStore')
@observer
class Home extends React.Component {
    render () {
        const { MainStore } = this.props;
        return (
            <React.Fragment>
                <h1>Home</h1>
                <Button type="primary">Add Event</Button>
                <h2>Events: [{MainStore.eventCount}]</h2>
            </React.Fragment>
        )
    }
    
}
export default Home