# Textarea 多行输入框

----

## 如何使用

:::demo
```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { View, Text, Textarea } from '@nerv/nerv-weui'

export default class PageTextarea extends Component {
    constructor() {
        super(...arguments)
    }

    state = {

    }

    render() {
        return (
            <View className="container">
                <View className="page-body">
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>输入区域高度自适应，不会出现滚动条</Text>
                        </View>
                        <View>
                            <Textarea style="background:#fff;width:100%;min-height:80px;padding:0 30px;" autoHeight ></Textarea>
                        </View>
                    </View>
                    <View className="page-section">
                        <View className="page-section-title">
                            <Text>这是一个可以自动聚焦的textarea</Text>
                        </View>
                        <View>
                            <Textarea style="background:#fff;width:100%;height:80px;padding:0 30px;" autoFocus></Textarea>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
```
:::

## Textarea 参数

|   H5  | 属性              | 类型        | 默认值               | 说明                                                                                                               |
| --- | ----------------- | ----------- | -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| √   | value             | String      |                      | 输入框的内容                                                                                                       |
| √   | placeholder       | String      |                      | 输入框为空时占位符                                                                                                 |
|     | placeholderStyle | String      |                      | 指定 placeholder 的样式                                                                                            |
|     | placeholderClass | String      | textarea-placeholder | 指定 placeholder 的样式类                                                                                          |
| √   | disabled          | Boolean     | false                | 是否禁用                                                                                                           |
| √   | maxlength         | Number      | 140                  | 最大输入长度，设置为 -1 的时候不限制最大长度                                                                       |
| √   | autoFocus        | Boolean     | false                | 自动聚焦，拉起键盘。                                                                                               |
|     | focus             | Boolean     | false                | 获取焦点                                                                                                           |
|     | fixed             | Boolean     | false                | 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true                                       |
|     | cursorSpacing    | Number      | 0                    | 指定光标与键盘的距离，单位 px 。取 textarea 距离底部的距离和 cursor-spacing 指定的距离的最小值作为光标与键盘的距离 |
|     | showConfirmBar  | Boolean     | true                 | 是否显示键盘上方带有”完成“按钮那一栏                                                                               |
|     | selectionStart   | Number      | -1                   | 光标起始位置，自动聚集时有效，需与 selection-end 搭配使用                                                          |
|     | selectionEnd     | Number      | -1                   | 光标结束位置，自动聚集时有效，需与 selectionStart 搭配使用                                                        |
| √   | onFocus         | EventHandle |                      | 输入框聚焦时触发，height 参数在基础库 1.9.90 起支持                                                                |
| √   | onBlur          | EventHandle |                      | 输入框失去焦点时触发，                                                                                             |
|     | onLinechange    | EventHandle |                      | 输入框行数变化时调用，                                                                                             |
| √   | onInput         | EventHandle |                      | 当键盘输入时，触发 input 事件， bindinput 处理函数的返回值并不会反映到 textarea 上                                 |
|     | onConfirm       | EventHandle |                      | 点击完成时， 触发 confirm 事件，                                                                                   |
