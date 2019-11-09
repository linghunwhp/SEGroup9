<template>
  <d2-container>
    <div class="row" style="margin-bottom: 20px;border-bottom: 1px solid #eeeeee">
      <div class="col-xs-4 col-xs-offset-1">
        <label>Consumer Key</label>
        <input
          type="text"
          class="form-control"
          id="consumerKey"
          placeholder="Consumer Key"
          style="margin-bottom: 10px;"
        />
        <label>Consumer Secret</label>
        <input
          type="text"
          class="form-control"
          id="consumerSecret"
          placeholder="Consumer Secret"
          style="margin-bottom: 10px;"
        />
        <label>Token</label>
        <input
          type="text"
          class="form-control"
          id="token"
          placeholder="Token"
          style="margin-bottom: 10px;"
        />
        <label>Token Secret</label>
        <input
          type="text"
          class="form-control"
          id="tokenSecret"
          placeholder="Token Secret"
          style="margin-bottom: 10px;"
        />
        <label>Signature Method</label>
        <input
          type="text"
          class="form-control"
          id="signatureMethod"
          placeholder="Signature Method"
          style="margin-bottom: 10px;"
        />
        <label>Timestamp</label>
        <input
          type="text"
          class="form-control"
          id="timestamp"
          placeholder="Timestamp"
          style="margin-bottom: 10px;"
        />
        <label>Nonce</label>
        <input
          type="text"
          class="form-control"
          id="nonce"
          placeholder="Nonce"
          style="margin-bottom: 10px;"
        />
        <label>Version</label>
        <input
          type="text"
          class="form-control"
          id="version"
          placeholder="Version"
          style="margin-bottom: 10px;"
        />
        <label>Realm</label>
        <input
          type="text"
          class="form-control"
          id="realm"
          placeholder="Opaque"
          style="margin-bottom: 10px;"
        />
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-xs-6">
            <label>Add params to header</label>
          </div>
          <div class="col-xs-6">
            <input type="checkbox" name style="margin-left: 30px;" />
          </div>
        </div>
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-xs-6">
            <label>Auto add parameters</label>
          </div>
          <div class="col-xs-6">
            <input type="checkbox" name style="margin-left: 30px;" />
          </div>
        </div>
        <div class="row" style="margin-bottom: 10px;">
          <div class="col-xs-6">
            <label>Keep empty parameters</label>
          </div>
          <div class="col-xs-6">
            <input type="checkbox" name style="margin-left: 30px;" />
          </div>
        </div>
        <button type="button" class="btn btn-default" style="margin-bottom: 10px;">Refresh headers</button>
      </div>
      <div class="col-xs-3">
        <div class="alert alert-warning" role="alert">
          <strong>Note</strong>
          <br />The authorization header will be generated and added as a custom header.
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-7">
        <input
          type="text"
          class="form-control"
          id="requestURL"
          placeholder="Enter Request URL here"
          v-model="RequestURL[0]"
        />
      </div>

      <div class="col-xs-1">
        <div class="btn-group">
          <button
            type="button"
            class="btn btn-default dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {{ RequestURL[1] }}
            <span class="caret"></span>
          </button>
          <ul class="dropdown-menu">
            <li v-for="item in allMethods" :key="item.id" @click="changeMethod(item.method)">
              <a href="#">{{item.method}}</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="col-xs-2" style="width: 150px;">
        <button
          type="button"
          class="btn btn-default"
          @click="URLparamsBoxTrigger=!URLparamsBoxTrigger"
        >
          <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
          URL params
        </button>
      </div>

      <div class="col-xs-2" style="width: 150px;">
        <button type="button" class="btn btn-default" @click="HeaderBoxTrigger=!HeaderBoxTrigger">
          <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
          Headers(0)
        </button>
      </div>
    </div>
    <div class="row" style="margin-top:10px;" v-if="URLparamsBoxTrigger">
      <div class="col-xs-3">
        <input type="text" class="form-control" id="name" placeholder="URL Parameter Key" />
      </div>

      <div class="col-xs-3">
        <input type="text" class="form-control" id="name" placeholder="Value" />
      </div>
    </div>

    <div class="row" style="margin-top:10px;" v-if="HeaderBoxTrigger">
      <div class="col-xs-3">
        <input type="text" class="form-control" id="name" placeholder="Header" />
      </div>

      <div class="col-xs-3">
        <input type="text" class="form-control" id="name" placeholder="Value" />
      </div>

      <div class="col-xs-3">
        <button type="button" class="btn btn-default">Manage presets</button>
      </div>
    </div>

    <div class="row" style="margin-top:10px;">
      <div class="col-xs-1">
        <button
          type="button"
          class="btn btn-primary"
          style="width: 70px;"
          @click="SetUrlInformation()"
        >Send</button>
      </div>

      <div class="col-xs-1">
        <button type="button" class="btn btn-default">Preview</button>
      </div>

      <div class="col-xs-1">
        <button type="button" class="btn btn-default">Add to collection</button>
      </div>

      <div class="col-xs-1 col-xs-offset-7">
        <button type="button" class="btn btn-danger" style="width: 60px;" @click="reset()">Reset</button>
      </div>
    </div>

    <ul id="myTab" class="nav nav-tabs" style="margin-top:10px;border-top:1px solid #eeeeee ">
      <li class="active">
        <a href="#body" data-toggle="tab">Body</a>
      </li>
      <li>
        <a href="#cookies" data-toggle="tab">Cookies({{Object.keys(cookies).length}})</a>
      </li>
      <li>
        <a href="#headers" data-toggle="tab">Headers({{headers.length}})</a>
      </li>
      <li>
        <a style="color: #666666">
          <span class="label label-default">STATUS</span>&nbsp;200
        </a>
      </li>
      <li>
        <a style="color: #666666">
          <span class="label label-default">TIME</span>
          &nbsp;{{time}}ms
        </a>
      </li>
    </ul>
    <div id="myTabContent" class="tab-content">
      <div class="tab-pane fade in active" id="body" style="margin-top: 10px;">
        <div class="row">
          <div class="btn-group col-xs-3" role="group" aria-label="...">
            <button type="button" class="btn btn-default" @click="format()">Pretty</button>
            <button type="button" class="btn btn-default">Raw</button>
            <button type="button" class="btn btn-default">Preview</button>
          </div>

          <div class="btn-group col-xs-3" role="group" aria-label="...">
            <button type="button" class="btn btn-default">JSON</button>
            <button type="button" class="btn btn-default">XML</button>
          </div>
        </div>
        <pre style="margin-top:10px;white-space:pre-wrap;word-wrap: break-word; ">
{{ body }}
      </pre>
      </div>
      <div class="tab-pane fade" id="cookies">
        <table class="table table-striped table-bordered" style="margin-top: 10px;">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(val,key,i) in cookies">
              <td>{{key}}</td>
              <td>{{val}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="tab-pane fade" id="headers">
        <table class="table table-striped table-bordered" style="margin-top: 10px;">
          <thead>
            <tr>
              <th>Name</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in headers">
              <td>{{item.name}}</td>
              <td>{{item.value}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </d2-container>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'OAuth_1.0',
  data () {
    return {
      URLparamsBoxTrigger: false,
      HeaderBoxTrigger: false,
      MethodsList: [],
      RequestURL: ['', 'GET'],
      UrlInformation: {},
      body: '',
      cookies: {},
      headers: [],
      status: '200',
      time: 0
    }
  },
  methods: {
    ...mapActions('core/normal', ['GetMethods']),
    ...mapActions('core/normal', ['GetAnalyseURL']),
    ...mapActions('core/normal', ['AddHistory']),
    // getAnalyseURL(RequestURL){
    //   this.$store.dispatch('core/normal/GetAnalyseURL', RequestURL);
    // },
    changeMethod (methodName) {
      // this.RequestURL[1] = methodName
      this.$set(this.RequestURL, 1, methodName)
    },
    SetUrlInformation () {
      var begintime = new Date().getTime()
      var str = this.RequestURL[0].replace(/\//g, '%2F')
      this.$set(this.RequestURL, 0, str)
      var promise = this.GetAnalyseURL(this.RequestURL)
      promise.then(res => {
        this.UrlInformation = res
        this.body = this.UrlInformation.body

        if (this.UrlInformation.cookies.length > 0) {
          this.cookies = this.UrlInformation.cookies[0]
        } else {
          this.cookies = {}
        }

        this.headers = this.UrlInformation.headers

        this.save()
      })
      var endtime = new Date().getTime()
      this.time = endtime - begintime
    },
    test () {
      console.log(this.RequestURL[0])
    },
    reset () {
      this.RequestURL = ['', 'GET']
      this.body = ''
      this.cookies = {}
      this.headers = []
      this.time = 0
    },
    save () {
      var history = new Object()
      history.request = this.RequestURL[0]
      history.method = this.RequestURL[1]
      history.time = this.time

      var body = new Object()
      body.content = this.body
      history.body = body

      var cookies = new Object()
      cookies.content = this.cookies.toString()
      history.cookie = cookies

      var headers = new Object()
      headers.content = this.headers.toString()
      history.header = headers

      console.log(history)

      this.AddHistory(history)
    },
    format () {
      this.body = this.body.replace(/},/g, '},\n')
      this.body = this.body.replace(/{/g, '\t{')
      this.body = this.body.replace(/,/g, ',\n\t')
      this.body = this.body.replace(/{/g, '{\n\t')
      this.body = this.body.replace(/}/g, '\n\t}')
      this.body = this.body.replace(/\[/g, '[\n')
    }
  },
  computed: {
    ...mapState('core/normal', {
      allMethods: 'methods'
    })
  },
  created () {
    this.GetMethods()
  }
}
</script>

<style scope>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
