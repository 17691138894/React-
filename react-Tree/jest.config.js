module.exports = {
    verbose: true, // 显示详细信息
    clearMocks: true, // 清楚mocks
    collectCoverage: true,
    reporters: ["default", "jest-unit"],
    modulFileExtensions: ["js", "jsx", "ts", "tsx"],
    moduleDirectories: ['node_modules'],
    transform: { // 如果模块是以tsx结尾的话，需要用ts-jest进行转义
        "^.+\\.tsx?$": "ts-ts-jest"
    },
    // 表示要进行单元测试的正则匹配
    testRegex: '(/__test__/.*|(test|spec)\\.(jsx|tsx))$'
}