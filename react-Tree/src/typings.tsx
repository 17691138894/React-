export interface TreeData {
    name: string,
    key: string,
    type: string,
    collapsed: boolean,
    children?: TreeData[] // 表示可选属性
}