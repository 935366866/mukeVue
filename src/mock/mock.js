// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Mock from 'mockjs'

Mock.mock(/getNewsList/,{
  'seller':[{
    url:'xxxx',
    title:'title1'
  }]
})

