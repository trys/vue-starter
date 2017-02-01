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
    path: '*',
    title: 'Not Found',
    template: '404',
    altPath: '/not-found'
  }
]
