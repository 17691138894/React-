import React from 'react'
import './index.less'
import { TreeData } from '../typings'
import TreeNode from './tree-node'
interface Props {
    data: TreeData
}
interface State {
    data: TreeData
}
interface KeyNodeMap {
    [key: string]: TreeData
}
class Tree extends React.Component<Props, State> {
    keyNodeMap: KeyNodeMap
    constructor(props: Props) {
        super(props)
        this.state = { data: this.props.data } // 将属性传给状态
        this.buildKeyMap() // 创建一个key map
    }
    componentDidMount() {

    }
    buildKeyMap = (): void => {
        let data = this.state.data
        this.keyNodeMap = {}
        this.keyNodeMap[data.key] = data // data根节点
        if (data.children && data.children.length > 0) {
            this.walk(data.children, data)
        }

    }
    walk = (children: TreeData[], parent: TreeData): void => {
        children.forEach((item: TreeData) => {
            item.parent = parent
            this.keyNodeMap[item.key] = item
            if (item.children && item.children.length > 0) {
                this.walk(item.children, item)
            }
        })
    }
    onCollapse = (key: string) => {
        let data = this.keyNodeMap[key]
        if (data) {
            data.collapsed = !data.collapsed
            data.children = data.children || [] // 后面会改成懒加载
            this.setState({ data: this.state.data })
        }
        console.log('key', data)
    }
    render() {
        return (
            <div className="tree">
                <div className="tree-nodes">
                    <TreeNode onCollapse={this.onCollapse} data={this.props.data} />
                </div>
            </div>
        )
    }
}

export default Tree