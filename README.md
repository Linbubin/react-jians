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