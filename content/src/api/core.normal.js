import axios from 'axios'

export default {
  GetMethods () {
    return new Promise((resolve, reject) => {
      axios.get('/api/GetMethods')
        .then(res => {
          console.log(res.data, ' GetMethods in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  GetAllHistory () {
    return new Promise((resolve, reject) => {
      axios.get('/api/GetHistory')
        .then(res => {
          console.log(res.data, ' GetHistory in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  GetHistoryById (id) {
    return new Promise((resolve, reject) => {
      axios.get('/api/GetHistoryById/' + id)
        .then(res => {
          console.log(res.data, ' GetHistoryById in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  InsertHistory (params) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'post',
        url: '/api/DeleteCollectionById/',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        data: params
      })
        .then(res => {
          console.log(res.data, ' DeleteCollectionById in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  DeleteHistoryById (id) {
    return new Promise((resolve, reject) => {
      axios.delete('/api/DeleteHistoryById/' + id)
        .then(res => {
          console.log(res.data, ' DeleteHistoryById in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  GetCollectionById (id) {
    return new Promise((resolve, reject) => {
      axios.get('/api/GetCollectionById/' + id)
        .then(res => {
          console.log(res.data, ' GetCollectionById in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  GetAllCollections () {
    return new Promise((resolve, reject) => {
      axios.get('/api/GetCollections')
        .then(res => {
          console.log(res.data, ' GetCollections in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  AddToCollection (id) {

  },
  DeleteCollectionById (id) {
    return new Promise((resolve, reject) => {
      axios.delete('/api/DeleteCollectionById/' + id)
        .then(res => {
          console.log(res.data, ' DeleteCollectionById in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}
