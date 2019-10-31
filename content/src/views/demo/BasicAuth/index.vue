<template>
  <d2-container>
    <template slot="header">BasicAuth header</template>
    Hello World
    <input type="text" name="test" id="test">
    <input type="button" value="button" @click="test">
    
    <button type="button" class="btn btn-default" data-toggle="tooltip" data-placement="left" title="Tooltip on left">Tooltip on left</button>
    <button type="button" class="btn btn-primary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
    <button type="button" class="btn btn-warning" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">Tooltip on bottom</button>
    <button type="button" class="btn btn-danger" data-toggle="tooltip" data-placement="right" title="Tooltip on right">Tooltip on right</button>

  </d2-container>
</template>

<script>
export default {
  name: 'BasicAuth',
  data() {
    return {
    }
  },
  methods: {
    test(){
      let test = $('#test').val()
      console.log(test)
    }
  }
}
</script>

<style scope>
@import '~bootstrap/dist/css/bootstrap.css';
</style>