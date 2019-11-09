import { mapState, mapActions, mapMutations } from 'vuex'
import menuMixin from '../mixin/menu'
import { elMenuItem, elSubmenu } from '../libs/util.menu'
import BScroll from 'better-scroll'

export default {
  name: 'd2-layout-header-aside-menu-side',
  mixins: [
    menuMixin
  ],
  render (createElement) {
    return createElement('div', { attrs: { class: 'd2-layout-header-aside-menu-side' } }, [
      createElement('el-menu', {
        props: { collapse: this.asideCollapse, uniqueOpened: true, defaultActive: this.active },
        ref: 'menu',
        // on: { select: this.handleMenuSelect },
        on: { select: this.saveCurrentHisOrCollec }
      }, this.aside.map(menu => (menu.children === undefined ? elMenuItem : elSubmenu).call(this, createElement, menu))),
      ...this.aside.length === 0 && !this.asideCollapse ? [
        createElement('div', { attrs: { class: 'd2-layout-header-aside-menu-empty', flex: 'dir:top main:center cross:center' } }, [
          createElement('d2-icon', { props: { name: 'inbox' } }),
          createElement('span', {}, 'no aside menu')
        ])
      ] : []
    ])
  },
  data () {
    return {
      active: '',
      asideHeight: 300,
      BS: null
    }
  },
  computed: {
    ...mapState('d2admin/menu', [
      'aside',
      'asideCollapse'
    ])
  },
  watch: {
    // 折叠和展开菜单的时候销毁 better scroll
    asideCollapse (val) {
      this.scrollDestroy()
      setTimeout(() => {
        this.scrollInit()
      }, 500)
    },
    // 监听路由 控制侧边栏激活状态
    // '$route.fullPath': {
    //   handler (value) {
    //     this.active = value
    //   },
    //   immediate: true
    // }
  },
  mounted () {
    this.scrollInit()
    this.GetAllHistory()
    this.GetAllCollections()
  },
  beforeDestroy () {
    this.scrollDestroy()
  },
  methods: {
    ...mapActions('d2admin/menu', ['GetAllHistory', 'GetAllCollections']),
    saveCurrentHisOrCollec(index, indexPath, all) {
      let paraArr = all.$el.innerText.split(' ')
      let paraObj = {}
      paraObj.request = paraArr[0]
      paraObj.method = paraArr[1]
      paraObj.id = paraArr[2]
      this.$store.dispatch('d2admin/menu/SetCurrentHisOrCollec', paraObj)
      this.$router.push({
        path: index
      })
    },
    scrollInit () {
      this.BS = new BScroll(this.$el, {
        mouseWheel: true,
        click: true,
        // 如果你愿意可以打开显示滚动条
        scrollbar: {
          fade: true,
          interactive: false
        }
      })
    },
    scrollDestroy () {
      // https://github.com/d2-projects/d2-admin/issues/75
      try {
        this.BS.destroy()
      } catch (e) {
        delete this.BS
        this.BS = null
      }
    }
  }
}
