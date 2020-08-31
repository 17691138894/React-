import React from 'react'
import { TreeData } from '../typings'
import file from '../assets/file.png'
import closedFolder from '../assets/closed-folder.png'
import openedFolder from '../assets/opened-folder.png'

interface Props {
    data: TreeData
    onCollapse: any
}

class TreeNode extends React.Component<Props> {
    constructor(props: Props) {
        super(props)
    }
    render() {
        console.log('123', this.props)
        let { data: { name, children, key, collapsed } } = this.props
        let caret = null // 箭头
        let icon = null // 图标
        if (children) { // 有children属性
            if (children.length > 0) {
                caret = (
                    <span className={`collapse ${collapsed ? `caret-right` : `caret-down`} `}
                        onClick={() => this.props.onCollapse(key)}>
                    </span>
                )
                icon = collapsed ? closedFolder : openedFolder
            } else {
                caret = null
                icon = file
            }
        } else {  //  没有children属性
            caret = (
                <span className={'collapse caret-right'}
                    onClick={() => this.props.onCollapse(key)}>
                </span>
            )
            icon = closedFolder
        }
        return (
            <div className="tree-node">
                <div className="inner">
                    {caret}
                    <span className="content">
                        <img style={{ width: 20 }} src={icon} alt="" />
                        {name}</span>
                </div>
                {
                    (children && children.length > 0 && !collapsed) && (
                        <div className="children">
                            {
                                children.map((item: TreeData) => (
                                    <TreeNode onCollapse={this.props.onCollapse} data={item} key={item.key} />
                                ))
                            }
                        </div>
                    )
                }

            </div>
        )
    }
}

export default TreeNode