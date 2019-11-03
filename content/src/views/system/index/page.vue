<template>
  <d2-container>
    <template slot="header">Home header</template>
    Hello World
  </d2-container>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      title: 'Normal',
      filename: __filename
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    width: 120px;
  }
  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    margin-top: 0px;
    margin-bottom: 20px;
    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
