import React from 'react'
import { Modal , Button , Input } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('MainStore')
@observer
class AddTagForm extends React.Component {
  constructor () {
    super()
    this.state = { 
      visible: false,
      name: '',
      remindTime: ''
    }
  }
  
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  
  handleOk = (e) => {
    console.log(e);
    console.log(this.state.name, this.state.remindTime)
    const { MainStore } = this.props
    console.log(this.state.name.toUpperCase())
    MainStore.addTag(
      this.state.name.toUpperCase(),
      parseInt(this.state.remindTime)
    )
    this.setState({
      visible: false,
    });
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    })
  }
  
  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
  render () {
    return (
      <div>
        <Button size="large" type="primary" onClick={this.showModal}>
        Add Tag
        </Button>
        <Modal
        title="Add Tag"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        >
          <Input name="name" value={this.state.name} onChange={this.handleChange} size="large" placeholder="Name" />
          <Input name="remindTime" value={this.state.remindTime} onChange={this.handleChange} style={{marginTop: '10px'}} size="large" placeholder="Time before event to remind in minutes" />
        </Modal>
      </div>
    )
  }
}

export default AddTagForm;