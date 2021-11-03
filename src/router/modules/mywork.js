export default [{
  path: '/mywork/csst',
  name: 'mywork',
  title: 'css过渡',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/csst.vue')
}, {
  path: '/mywork/cssa',
  name: 'mywork',
  title: 'css动画',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/cssa.vue')
}, {
  path: '/mywork/cssself',
  name: 'mywork',
  title: '自定义过渡的类名',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/cssself.vue')
}, {
  path: '/mywork/hook',
  name: 'mywork',
  title: '动画钩子函数',
  icon: '',
  component: () => import(/* webpackChunkName: "mywork" */ '@/views/mywork/hook.vue')
}]

// self-jsonstringify self-new  create-js  closure  instanceof  promise-chunk  for-in-break  mywork-currying  self-setinterval
