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
    id: '001',
    name: 'Rust',
    href: '',
    title: ''
  },
  {
    id: '002',
    name: 'Golang',
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
        title: 'React',
        childrens: [
          {
            id: '03-01-01',
            name: 'Fabric',
            href: 'https://yyong008.github.io/learn-ui-fabric/',
            title: 'UI Fabric'
          }
        ]
      },
      {
        id: '03-02',
        name: 'Vue',
        href: '',
        title: 'Vue'
      },
      {
        id: '03-03',
        name: 'Angular',
        href: '',
        title: 'Angular'
      },
      {
        id: '03-04',
        name: 'Svelte',
        href: '',
        title: 'Svelte'
      },
      {
        id: '03-05',
        name: 'Miniprogram',
        href: '',
        title: 'Miniprogram'
      }
    ]
  },
  {
    id: '04',
    name: 'Node.js',
    href: 'https://yyong008.github.io/Node-cookbook/',
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
    title: '',
    childrens: [
      {
        id: '0801',
        name: '脚手架 Yoi CLI',
        href: '',
        title: ''
      },
      {
        id: '0802',
        name: 'Lodash 工具类',
        href: '',
        title: ''
      },
      {
        id: '0803',
        name: '其他工具类',
        href: '',
        title: ''
      }
    ]
  },
  {
    id: '09',
    name: '图型',
    href: 'https://magnesium-graphics.netlify.com/',
    title: 'Graphics'
  },
  {
    id: '10',
    name: '测试',
    href: '',
    title: '测试',
    childrens: [
      {
        id: '1001',
        name: 'miniprogram-automator',
        href: '',
        title: ''
      },
      {
        id: '1002',
        name: 'Jest',
        href: '',
        title: ''
      },
      {
        id: '1003',
        name: 'cypress',
        href: '',
        title: ''
      },
      {
        id: '1004',
        name: 'Mocha',
        href: '',
        title: ''
      }
    ]
  }
]

export default BlogList
