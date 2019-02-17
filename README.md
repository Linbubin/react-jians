Fragment 占位符 解决多一个div标签的问题
dangerouslySetInnerHTML={{__html: item}}

label 的for 改成htmlFor

this.setState((prevState) => {
    return {inputValue: e.target.value}
})

## react特点
* 声名式开发
* 可以与其他框架并存
* 组件式开发
* 单向数据流
* 视图层框架
* 函数式编程

## propTypes defaultProps
```js
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleRemove: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}
```

## state,props,render的关系
> 当组件的state或props刷新时，组件会被重新render<br/>
> 父组件render,其所有包含的子组件都会重新render一次

## 虚拟dom比对过程
1. state数据
2. jsx模板, react.createElement
3. 根据1+2生成虚拟dom,等待比较 `h('div', {id: 'a'}, [h('span',{},'hello world')])`
4. 根据3的虚拟dom生成真实dom,并展示 `<div id='a'><span>hello world</span></div>`
5. state改变
6. 5+2 生成新的虚拟dom `h('div', {id: 'a'}, [h('span',{},'good')])`
7. 比较 6 和 4 生成的虚拟dom,找出差异
8. 根据7中的差异,直接修改span的内容