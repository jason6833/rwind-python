const path = require('path')

module.exports = {
  base: '/rwind-python/',
  dest: path.resolve(__dirname, '../docs'),
  title: 'RWIND-Python',
  description: 'Python document',
  head: [
    ['link', { rel: 'icon', href: `/favicon.ico` }]
  ],
  themeConfig: {
    nav: [
      { text: '基础', link: '/basic/' },
      { text: 'Github', link: 'https://github.com/jason6833/rwind-python/' }
    ],
    displayAllHeaders: true,
    sidebarDepth: 2,
    sidebar: {
    	"/basic/":[
			{
	      title: "Python",
	        children: [
              "./python/1.概述",
              "./python/2.基本语法",
              "./python/3.模块化",
              "./python/4.面向对象"
	        ]
        },
    	]
    }
  }
}
