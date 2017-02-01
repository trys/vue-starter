module.exports = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/dynamic',
    title: 'Dynamic',
  },
  {
    path: '/about/:id',
    title: 'Dynamic',
    template: 'AboutSub'
  },
  {
    path: '*',
    title: 'Not Found',
    template: '404',
    altPath: '/not-found'
  }
]
