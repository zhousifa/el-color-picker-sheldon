@[toc](el-color-picker-sheldon使用说明（一款基于Vue和ElementUI的取色器）)

# Introduction 简介

![在这里插入图片描述](https://img-blog.csdnimg.cn/8dd72d74041e48adb919da474f900497.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBAU2hlbGRvbuS4gOiTkeeDn-mbqOS7u-W5s-eUnw==,size_8,color_FFFFFF,t_70,g_se,x_16)

This is a color picker component based on vue and element-ui. It is powerful and supports drag and drop, color picking and other functions.

这是一个基于 vue 和 element-ui 的取色器组件，功能强大，支持拖拽、取色等功能。

# Functions 功能点

1. Show a gradient palette with all colors and adjustable transparency 展示一个有所有颜色并且可以调节透明度的渐变调色板

2. Click on the palette to get the selected color, and display the corresponding hex value or rgba value in real time 点击调色板获取选中的颜色，并且实时显示对应 hex 值或者 rgba 值

3. Modify the hex value or rgba value, and display the corresponding color in real time 修改 hex 值或者 rgba 值，实时显示对应的颜色

4. You can set whether the color picker can be dragged 可以设置取色器是否可拖动

5. Send the current color to the parent component 发送当前的颜色给父组件

# Install 安装

npm install el-color-picker-sheldon

# Usage 用法

1. Introduce the required element-ui components in main.js or plugins/element.js 在 main.js 或者 plugins/element.js 中按需引入 element-ui 组件（也可以直接引入整个 element-ui）:

```
import Vue from 'vue';
import {Slider,Switch,Row,Col,Button,Input,Message,MessageBox} from 'element-ui'
Vue.use(Slider)
Vue.use(Switch)
Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Input)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
import 'element-ui/lib/theme-chalk/index.css';
```

2. Partial introduction of components 局部引入组件

```
<template>
	<div>
		<div>{{colorValue}}</div>
		<color-picker :draggable="false" @receiveColor="receiveColor"></color-picker>
	</div>
<template>
<script>
import ColorPicker from 'el-color-picker-sheldon'

export default {
	components:{
		ColorPicker
	},
	data () {
	 	return {
			colorValue:''
		}
	}
	methods:{
		// get color value 获取取色器的颜色
	    receiveColor(colorValue){
	      this.colorValue = colorValue
	    },
	}
}
```

如果遇到使用上的问题，或者有任何好的改进建议，欢迎在评论下留言。

# CSDN 地址

[el-color-picker-sheldon 使用说明（一款基于 Vue 和 ElementUI 的取色器）](https://blog.csdn.net/qq_39055970/article/details/121702992)
