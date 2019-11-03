<template>
  <d2-container>

    <div class="row">

        <div class="col-xs-7">
          <input type="text" class="form-control" id="name" placeholder="Enter Request URL here">
        </div>

        <div class="col-xs-1">
          <div class="btn-group">
          <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {{ currentMethod }} <span class="caret"></span>
          </button>
            <ul class="dropdown-menu">
              <li v-for="item in allMethods" :key="item.id" @click="changeMethod(item.method)"><a href="#">{{item.method}}</a></li>
            </ul>
          </div>
        </div>

        <div class="col-xs-2" style="width: 150px;">
          <button type="button" class="btn btn-default"  @click="URLparamsBoxTrigger=!URLparamsBoxTrigger"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            URL params
          </button>
        </div>

        <div class="col-xs-2" style="width: 150px;">
          <button type="button" class="btn btn-default" @click="HeaderBoxTrigger=!HeaderBoxTrigger"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
            Headers(0)
          </button>
        </div>

    </div>
<div class="row" style="margin-top:10px;" v-if="URLparamsBoxTrigger">

  <div class="col-xs-3">
      <input type="text" class="form-control" id="name" placeholder="URL Parameter Key">
  </div>

  <div class="col-xs-3">
      <input type="text" class="form-control" id="name" placeholder="Value">
  </div>

</div>

<div class="row" style="margin-top:10px;" v-if="HeaderBoxTrigger">

  <div class="col-xs-3">
      <input type="text" class="form-control" id="name" placeholder="Header">
  </div>

  <div class="col-xs-3">
      <input type="text" class="form-control" id="name" placeholder="Value">
  </div>

  <div class="col-xs-3">
          <button type="button" class="btn btn-default">
            Manage presets
          </button>
  </div>
</div>

<div class="row" style="margin-top:10px;">

  <div class="col-xs-1">
          <button type="button" class="btn btn-primary" style="width: 70px;">
            Send
          </button>
  </div>

  <div class="col-xs-1">
          <button type="button" class="btn btn-default">
            Preview
          </button>
  </div>

  <div class="col-xs-1">
          <button type="button" class="btn btn-default">
            Add to collection
          </button>
  </div>

  <div class="col-xs-1 col-xs-offset-7">
          <button type="button" class="btn btn-danger" style="width: 60px;">
            Reset
          </button>
  </div>
</div>

<ul id="myTab" class="nav nav-tabs" style="margin-top:10px;border-top:1px solid #eeeeee ">
    <li class="active">
        <a href="#body" data-toggle="tab">
            Body
        </a>
    </li>
    <li><a href="#cookies" data-toggle="tab">Cookies(3)</a></li>
    <li><a href="#headers" data-toggle="tab">Headers(4)</a></li>
    <li><a style="color: #666666"><span class="label label-default">STATUS</span>&nbsp;200</a></li>
    <li><a style="color: #666666"><span class="label label-default">TIME</span>&nbsp;52ms</a></li>
</ul>
<div id="myTabContent" class="tab-content">
    <div class="tab-pane fade in active" id="body" style="margin-top: 10px;">
      <div class="row">
      <div class="btn-group col-xs-3" role="group" aria-label="...">
        <button type="button" class="btn btn-default">Pretty</button>
        <button type="button" class="btn btn-default">Raw</button>
        <button type="button" class="btn btn-default">Preview</button>
      </div>

      <div class="btn-group col-xs-3" role="group" aria-label="...">
        <button type="button" class="btn btn-default">JSON</button>
        <button type="button" class="btn btn-default">XML</button>
      </div>
      </div>
      <pre style="margin-top:10px; ">
<!-- this is an example -->
[
    {
        "request": "www,baidu.com",
        "method": "GET",
        "id": 1
    },
    {
        "request": "www.qq.com",
        "method": "DELETE",
        "id": 2
    },
    {
        "request": "www.qq123.com",
        "method": "DELETE",
        "id": 3
    },
    {
        "request": "www.qq123.com",
        "method": "DELETE",
        "id": 4
    },
    {
        "request": "www.qq123.com",
        "method": "DELETE",
        "id": 5
    }
]
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
            <tr>
              <td>BAIDUID</td>
              <td>0C30C11AC73589042B4BFFD417CE09BA:FG=1</td>
            </tr>
            <tr>
              <td>BIDUPSID</td>
              <td>0C30C11AC73589042B4BFFD417CE09BA</td>
            </tr>
            <tr>
              <td>H_PS_PSSID</td>
              <td>1434_21080_29567_29700_29221_26350_22160</td>
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
            <tr>
              <td>expires</td>
              <td>Sat, 02 Nov 2019 14:20:37 GMT</td>
            </tr>
            <tr>
              <td>content-type</td>
              <td>text/html;charset=utf-8</td>
            </tr>
            <tr>
              <td>connection</td>
              <td>Keep-Alive</td>
            </tr>
            <tr>
              <td>traceid</td>
              <td>157270443802879966829385737524522010588</td>
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
  name: 'BasicAuth',
  data() {
    return {
      URLparamsBoxTrigger:false,
      HeaderBoxTrigger:false,
      MethodsList:[],
      currentMethod: 'GET'
    }
  },
  methods: {
    ...mapActions('core/normal', [
      'GetMethods'
    ]),
    changeMethod(methodName){
      this.currentMethod = methodName
    }
  },
  computed: {
    ...mapState('core/normal', {
      allMethods: 'methods'
    }),
  },
  created () {
    this.GetMethods()
  }
}
</script>

<style scope>
@import '~bootstrap/dist/css/bootstrap.css';
</style>