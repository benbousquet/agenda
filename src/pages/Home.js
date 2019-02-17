import React from "react";

@inject('MainStore')
@observer
export default class Home extends React.Component{
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