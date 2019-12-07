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
      axios.post('/api/InsertHistoryByJSON', params)
        .then(res => {
          console.log(res.data, ' InsertHistoryByJSON in the core.normal.js')
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
  AddToCollection (id) {
    console.log("1 id is", id)
    return new Promise((resolve, reject) => {
      console.log("id is", id)
      axios.post('/api/AddToCollection/' + id)
        .then(res => {
          console.log(res.data, ' AddToCollection in the core.normal.js')
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
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
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
  },
  GetAnalyseURL (url) {
    console.log(url)
    return new Promise((resolve, reject) => {
      axios.get('/api/AnalyseURL/' + url[1] + '/' + url[0])
        .then(res => {
          console.log(res.data, ' AnalyseURL in the core.normal.js')
          resolve(res.data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }

}
