import React from "react";
import {inject, observer} from "mobx-react";
import { Empty } from 'antd';
import AddEventForm from '../Components/AddEventForm';
import Schedule from '../Components/Schedule';
@inject('MainStore')
@observer
class Home extends React.Component{
  render () {
    const { MainStore } = this.props;
    if (MainStore.eventCount === 0)
    return (
      <React.Fragment>
        <h1 style={{paddingTop: '15px'}}>Home</h1>
        <div style={{ paddingTop: '15%'}}>
          <Empty image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original" description={
            <span>
                Nothing? Really? You're Boring...
            </span>
          }>
          </Empty>
        </div>

        <div style={{ paddingTop: '40%' }}>
          <AddEventForm />
        </div>
      </React.Fragment>
    )
    else return (
      <React.Fragment>
        <AddEventForm />
        <div style={{margin: '20px'}}>
          <Schedule />
        </div>
      </React.Fragment>
    )
  }
    
}
export default Home