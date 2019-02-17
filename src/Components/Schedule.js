import React from "react"
import { List } from "antd"
import {inject, observer} from 'mobx-react';
import {observe} from 'mobx';

@inject('MainStore')
@observer
class Schedule extends React.Component{
    makeSchedule () {
        let { MainStore } = this.props;

        return (
            <List
            itemLayout="horizontal"
            dataSource={MainStore.events}
            renderItem={item => (
                <List.Item>
                    <List.Item.Meta 
                        title={item.name}
                        description={item.endDate.format("dddd, MMMM Do YYYY, h:mm:ss a")}
                    />
                </List.Item>
            )}
            />
        )
    }

    render() {
        let { MainStore } = this.props;

        observe(MainStore.events, change => {
            this.forceUpdate();
        });
        console.log(MainStore.events)
        return this.makeSchedule();
    }

}

export default Schedule