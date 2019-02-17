import React from "react";
import AddTagForm from '../Components/AddTagForm';
import {inject, observer} from "mobx-react"
import {Tag} from 'antd'

@inject('MainStore')
@observer
class Settings extends React.Component{
    render () {
        const { MainStore } = this.props
        let tags = MainStore.tags.map(tag => {
            return <Tag key={tag.name}>{tag.name}</Tag>
        })
        return (
            <div>
                <h1>Settings</h1>
                <h2 style={{paddingTop: '15px'}}>Tags</h2>
                <div style={{margin:'35px'}}>
                    {tags}
                </div>
                <AddTagForm/>
            </div>
    
        )
    }

}
export default Settings