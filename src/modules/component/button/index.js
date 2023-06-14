import './index.scss'
const template = `

<button
    class="layui-btn"
    :class="classes.v()"
    :style="styles.v()"
    :type="nativeType"
    @click="onClick"
  >
  <i v-if="prefixIcon" :class="prefixIconClass.v()"></i>
  <i
    v-if="loading"
    :class="loadingIcon"
    class="layui-icon layui-anim layui-anim-rotate layui-anim-loop"
  ></i>
  <span v-else><slot></slot></span>
  <i v-if="suffixIcon" :class="suffixIconClass.v()"></i>
  </button>

`
const button = {
  props: {
    type: String,
    size: String,
    prefixIcon: String,
    suffixIcon: String,
    loadingIcon: {
      type: String,
      default: 'layui-icon-loading-one'
    },
    borderStyle: {
      type: String,
      default: 'soild'
    },
    border: String,
    fluid: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    },
    loading: Boolean,
    disabled: Boolean,
    nativeType: {
      type: String,
      default: 'button'
    }
  },
  template: template,
  computed: {
    prefixIconClass() {
      return `layui-icon ${this.prefixIcon}`
    },
    suffixIconClass() {
      return `layui-icon ${this.suffixIcon}`
    },
    classes() {
      return [
        {
          'layui-btn-fluid': this.fluid,
          'layui-btn-radius': this.radius,
          'layui-btn-disabled': this.disabled
        },
        this.type ? `layui-btn-${this.type}` : '',
        this.size ? `layui-btn-${this.size}` : '',
        this.border ? `layui-border-${this.border}` : ''
      ]
    },
    styles() {
      return {
        border: `1px ${this.borderStyle}`
      }
    }
  },
  data: function () {
    return {
      data: '我是listBase数据'
    }
  },

  mounted: function () {
    console.log(this, '组件')
  },
  methods: {
    onClick() {
      console.log('点击')
    }
  }
}
export default button
