import React from 'react'
import { Modal , Button , Input, Tag } from 'antd';
import { inject, observer } from 'mobx-react';
import DatePicker from "react-datepicker";
import {observe} from "mobx"
import moment from 'moment'

import "react-datepicker/dist/react-datepicker.css";


@inject('MainStore')
@observer
class AddEventForm extends React.Component {
  constructor () {
    super()
    this.state = { 
      visible: false,
      name: '',
      tag: '',
      startDate: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleTextChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  
  handleOk = (e) => {
    const { MainStore } = this.props;
    console.log(this.state.tag)
    let currentTag = MainStore.tags.find(tag => {
        return tag.name === this.state.tag.toUpperCase()
    })
    console.log(currentTag)
    console.log(this.state.startDate)
    console.log(moment(this.state.startDate)[1])

    MainStore.addEvent(
    {
      name: this.state.name
    },
    {
      remindDates: moment(this.state.startDate),
      remindTime: currentTag.remindTime
    }
    )
    this.setState({
      visible: false,
    });
  }
  
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render () {
    let { MainStore } = this.props;

    observe(MainStore.events, change => {
        this.forceUpdate();
    });
    let tags = MainStore.tags.map(tag => {
      return <Tag>{tag.name}</Tag>
    })
    return (
      <div>
        <Button size="large" type="primary" onClick={this.showModal}>
        Add Event
        </Button>
        <Modal
        title="Add Event"
        visible={this.state.visible}  
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        >
          <Input name="name" value={this.state.name} onChange={this.handleTextChange} size="large" placeholder="Name" />
          <Input name="tag" value={this.state.tag} onChange={this.handleTextChange} style={{marginTop: '10px', marginBottom: '10px'}} size="large" placeholder="Tag" />
          <div style={{margin: '20px'}}>
            <p>Available Tags</p>
            {tags}
          </div>         
          <div>
            <DatePicker
              style={{paddingTop: '10px'}}
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
        </Modal>
      </div>
    )
  }
}

export default AddEventForm;