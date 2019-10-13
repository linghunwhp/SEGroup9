import normal from '@api/core.normal'

const state = {
  methods: [],
  history: [],
  collections: []
}

const actions = {
  /**
   * @description 返回各种methods方法
   */
  GetMethods ({ commit }) {
    return new Promise((resolve, reject) => {
      // 开始请求各种Method数据
      normal.GetMethods()
        .then(async res => {
          // 保存所有的Methods数据
          console.log(res, 'response methods from server in normal.js')
          commit('saveMethods', res)
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
  /**
   * @description get all histories
   */
  GetAllHistory ({ commit }) {
    return new Promise((resolve, reject) => {
      normal.GetAllHistory()
        .then(async res => {
          console.log(res, 'response histroy from server in normal.js')
          commit('saveHistory', res)
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
  /**
   * @description get a history by id
   */
  GetHistoryById ({ commit }, id) {
    return new Promise((resolve, reject) => {
      normal.GetHistoryById(id)
        .then(async res => {
          console.log(res, 'response a histroy from server in normal.js')
          commit('saveHistory', res)
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
  /**
   * @description add a history
   */
  AddHistory (params) {
    return new Promise((resolve, reject) => {
      normal.InsertHistory(params)
        .then(async res => {
          console.log(res, 'response a histroy from server in normal.js')
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
  /**
   * @description delete a history by id
   */
  DelHistoryById (id) {
    return new Promise((resolve, reject) => {
      normal.DeleteHistoryById(id)
        .then(async res => {
          console.log(res, 'response a collection from server in normal.js')
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
  /**
   * @description 返回全部的Collections
   */
  GetAllCollections ({ commit }) {
    return new Promise((resolve, reject) => {
      normal.GetAllCollections()
        .then(async res => {
          console.log(res, 'response collections from server in normal.js')
          commit('saveCollections', res)
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
  /**
   * @description get a collection by id
   */
  GetCollectionById ({ commit }) {
    return new Promise((resolve, reject) => {
      normal.GetCollectionById()
        .then(async res => {
          console.log(res, 'response a collection from server in normal.js')
          commit('saveCollections', res)
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
  /**
   * @description delete a collection by id
   */
  DelCollectionById (id) {
    return new Promise((resolve, reject) => {
      normal.DeleteCollectionById(id)
        .then(async res => {
          console.log(res, 'response a collection from server in normal.js')
          resolve()
        })
        .catch(err => {
          console.log('err: ', err)
          reject(err)
        })
    })
  },
}

const getters = {
  // sumWithRootCount(state, getters, rootState) {
  //   return state.count + rootState.count;
  // }
}

const mutations = {
  saveMethods (state, data) {
    state.methods = data
  },
  saveHistory (state, data) {
    state.history = data
  },
  saveCollections (state, data) {
    state.collections = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
