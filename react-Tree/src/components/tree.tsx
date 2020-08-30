import React from 'react'
import './index.less'
import { TreeData } from '../typings'
interface Props {
    data: TreeData
}
class Tree extends React.Component<Props> {
    render() {
        return (<div className="tree">Tree</div>)
    }
}

export default Tree