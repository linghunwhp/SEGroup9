<template>
  <d2-container>
    <template slot="header">Normal header</template>
    <!-- <button @click="GetMethods">GetMethods</button> -->
    <ul id="allMethods">
      <li v-for = "item in allMethods" :key="item.id">
        {{ item.method }}
      </li>
    </ul>
    
    <ul id="allHistory">
      <li v-for = "(item, i) in allHistory" :key="item.id">
        {{ i + 1 }} Request {{ item.request }} with {{ item.method }} method
      </li>
    </ul>
    
    <div>
      <input type="text" id="getHistById" v-model="histId">
      <input type="button" value="Get History" @click="GetHistoryById(histId)">
    </div>
    
    <ul id="allCollections">
      <li v-for = "(item, i) in allCollections" :key="item.id">
        {{ i + 1 }} Request {{ item.request }} with {{ item.method }} method
      </li>
    </ul>
  </d2-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Normal',
  components: {
  },
  data () {
    return {
      // [侧边栏宽度] 正常状态
      asideWidth: '200px',
      // [侧边栏宽度] 折叠状态
      asideWidthCollapse: '65px',
      histId: 1
    }
  },
  created () {
    this.GetMethods()
    this.GetAllHistory()
    this.GetAllCollections()
  },
  computed: {
    ...mapState('core/normal', {
      allMethods: 'methods'
    }),
    ...mapState('core/normal', {
      allHistory: 'history'
    }),
    ...mapState('core/normal', {
      allCollections: 'collections'
    }),
  },
  methods: {
    ...mapActions('core/normal', [
      'GetMethods'
    ]),
    ...mapActions('core/normal', [
      'GetAllHistory'
    ]),
    ...mapActions('core/normal', [
      'GetHistoryById'
    ]),
    ...mapActions('core/normal', [
      'GetAllCollections'
    ]),
  }
}
</script>

<style lang="scss">
// 注册主题
@import '~@/assets/style/theme/register.scss';
</style>
