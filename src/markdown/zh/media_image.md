# Image 图片

---

## 如何使用

:::demo

```jsx
import Nerv, { Component } from 'nervjs' // Nerv框架
// import Taro, { Component } from '@tarojs/taro' // 或者使用 Taro框架

import { Image,View } from '@nerv/nerv-weui'

export default class PageView extends Component {
  
  constructor () {
    super(...arguments)
  }

  render () {
    return (
      <View className='container'>
        <View className='page-body'>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>Local Image</Text>
            </View>
            <View className='page-section-spacing'>
              <Image
                style='width: 300px;height: 300px;background: #fff;'
                src={nervLogo}></Image>
            </View>
          </View>
          <View className='page-section'>
            <View className='page-section-title'>
              <Text>Internet Image</Text>
            </View>
              <View className='page-section-spacing'>
                <Image
                  style='width: 300px;height: 300px;background: #fff;'
                  src='https://camo.githubusercontent.com/3e1b76e514b895760055987f164ce6c95935a3aa/687474703a2f2f73746f726167652e333630627579696d672e636f6d2f6d74642f686f6d652f6c6f676f2d3278313531333833373932363730372e706e67'
                ></Image>
              </View>
          </View>
        </View>
      </View>
    )
  }
}

```

:::

## Image 参数

|       H5       | 属性     | 类型        | 默认值      | 说明                                                   |
| ------------ | -------- | ----------- | ----------- | ------------------------------------------------------ |
| √            | src      | String      |             | 图片资源地址                                           |
| √            | mode     | String      | scaleToFill | 图片裁剪、缩放的模式                                   |
| √（onError） | onError  | HandleEvent |             | 当错误发生时，发布到 AppService 的事件名               |
| √ (onLoad)   | onLoad   | HandleEvent |             | 当图片载入完毕时，发布到 AppService 的事件名           |
|              | lazyLoad | Boolean     | false       | 图片懒加载。只针对 page 与 scroll-view 下的 image 有效 |
