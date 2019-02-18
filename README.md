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

## diff算法-同层比对
加key以后,比对时根据key做关联,提高比对性能.所以要使用一个稳定的内容做key值,尽可能不要用index做key.

## ref
`ref={input => this.input = input}`
```js
const value = this.input.value;
//等价于
const value = e.target.value;
```

## 生命周期函数
> 在某个运行时刻,会被自动运行的函数.

### 初始化过程
1. componentWillMount 这个函数通常不写,涉及到他的操作基本都可以提到constructor中,作者认为这个函数只是为了和 `componentDidMount` 对称. 但是他可以在服务端和浏览器端共同使用.其实不对，因为如果你用react-redux把请求后台的数据写在constructor里面，会导致报一下错误.所以我个人认为这个方法应该哪来在页面加载前去请求后台数据用.
```
Warning: setState(...): Cannot update during an existing state transition (such as within render or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to
```
2. render
3. componentDidMount 当render彻底!全部!都加载好后,才会执行. 比如一个父组件有3个子组件,只有当3个子组件的render都执行完毕,才会开始执行第一个子组件的`componentDidMount`方法.只能在浏览器中使用,具体查看 12章 **同构**<br/>
在执行这个函数的时候,dom已经组装好.假设,项目不得不使用jq,就能在这个函数中使用,因为此时dom已经完成,可以进行操作.<br/>
但是如果要同时考虑jq的修改和react的更新,就需要使用 `componentDidUpdate`

### 更新过程
#### state改变
1. shouldComponentUpdate(nextProps, nextState) 默认返回true,可以通过设置 来使其返回false,阻止渲染. 因为有些时候是没必要渲染的.
2. componentWillUpdate
3. render
4. componentDidUpdate  ajax获取数据的位置
#### props改变
1. componentWillReceiveProps(nextProps) 如果这个组件第一次存在父组件中,不会执行.之后只要父级的render被调用,那么所有的子组件都会执行该函数. 子组件的this.setState方法不会处罚该方法, 因为更新state的方法就是 this.setState,如果this.setState会调用该方法,那么就会造成死循环
2. shouldComponentUpdate(nextProps, nextState) 默认返回true,可以通过设置 来使其返回false,阻止渲染. 因为有些时候是没必要渲染的.
3. componentWillUpdate
4. render
5. componentDidUpdate

### 卸载过程
componentWillUnmount 这个函数没有设置好的参数,也没有对应得did函数,一般用于清除`componentDidMount`中声明的一些非react的方法,比如定时器.否则可能会造成内存泄漏.

## redux
> redux = flux + reducer

action creater 借的话 -> store
store 图书馆的管理员 -> <- reducers
reducer 记录本
react component 自己  -> action