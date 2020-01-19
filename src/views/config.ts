export interface BlogItem {
  id: string
  name: string
  href: string
  title: string,
  childrens?: BlogItem[]
}

export const BlogList: BlogItem[] = [
  {
    id: '01',
    name: 'Yong`Blog',
    href: '',
    title: ''
  },
  {
    id: '02',
    name: 'TypeScript',
    href: 'https://yyong008.github.io/ts-translate/',
    title: ''
  },
  {
    id: '03',
    name: 'JavaScript',
    href: '',
    title: '',
    childrens: [
      {
        id: '03-01',
        name: 'React',
        href: '',
        title: 'React 学习路径'
      },
      {
        id: '03-02',
        name: 'Vue',
        href: '',
        title: 'Vue 学习路径'
      },
      {
        id: '03-03',
        name: 'Angular',
        href: '',
        title: 'Angular 学习路径'
      },
      {
        id: '03-04',
        name: 'Svelte',
        href: '',
        title: 'Svelte 学习路径'
      },
      {
        id: '03-05',
        name: 'Miniprogram',
        href: '',
        title: 'Miniprogram 学习路径'
      }
    ]
  },
  {
    id: '04',
    name: 'Node.js',
    href: '',
    title: ''
  },
  {
    id: '05',
    name: 'UI',
    href: 'https://yyong008.github.io/ui-diff/',
    title: ''
  },
  {
    id: '06',
    name: '小程序',
    href: '',
    title: ''
  },
  {
    id: '07',
    name: '数据库',
    href: '',
    title: ''
  },
  {
    id: '08',
    name: '工具类',
    href: '',
    title: ''
  },
  {
    id: '09',
    name: '图型',
    href: 'https://magnesium-graphics.netlify.com/',
    title: 'Graphics'
  }
]

export default BlogList
