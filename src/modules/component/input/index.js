import './index.scss'
const template = `
<div class="layui-input" :class="classes.v()" :size="size">
    <div class="layui-input-prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </div>
    <div class="layui-input-wrapper">
      <span class="layui-input-prefix" v-if="$slots.prefix || prefixIcon">
        <div v-if="$slots.prefix">
          <slot name="prefix"></slot>
        </div>
        <lay-icon
          v-else
          :type="prefixIcon"
          class="layui-input-prefix-icon"
        ></lay-icon>
      </span>
      <input
        :type="type"
        :name="name"
        :disabled="disabled"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :maxlength="maxlength"
        :max="max"
        :min="min"
        :readonly="readonly"
        v-model="currentValue"
        @input="onInput"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
        @compositionstart="onCompositionstart"
        @compositionend="onCompositionend"
        ref="inputRef"
      />
      <span
        class="layui-input-password"
        @click="showPassword"
        v-if="password && hasContent"
      >
        <lay-icon type="layui-icon-show" v-if="isPassword"></lay-icon>
        <lay-icon type="layui-icon-hide" v-else></lay-icon>
      </span>
      <span
        class="layui-input-clear"
        v-if="allowClear && hasContent && !disabled"
      >
        <lay-icon type="layui-icon-close-fill" @click.stop="onClear"></lay-icon>
      </span>
      <span class="layui-input-suffix" v-if="$slots.suffix || suffixIcon">
        <div v-if="$slots.suffix">
          <slot name="suffix"></slot>
        </div>

        <lay-icon
          v-else
          :type="suffixIcon"
          class="layui-input-suffix-icon"
        ></lay-icon>
      </span>
    </div>
    <div class="layui-input-append" v-if="$slots.append">
      <slot name="append"></slot>
    </div>
  </div>

`
const Input = {
  props: {
    name: String,
    type: String,
    prefixIcon: String,
    suffixIcon: String,
    modelValue: {
      type: String,
      default: ''
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    autocomplete: String,
    placeholder: String,
    autofocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    password: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'md'
    },
    maxlength: Number,
    max: Number,
    min: Number
  },
  template: template,
  data: function () {
    return {
      type: '',
      currentValue: '345',
      composing: false
    }
  },
  computed: {
    hasContent: () => {},
    isPassword: () => {},
    hasContent: () => {},
    classes: function () {
      return {
        'layui-input-disabled': this.disabled
      }
    },
    hasContent: () => {}
  },
  mounted: function () {
    console.log(this.classes.v(), 'classes')
    console.log(this, '组件')
    // this.$forceUpdate()
  },
  methods: {
    onInput: function () {
      console.log(11)
    },
    onClear: function () {},
    onFocus: function () {},
    onChange: function () {},
    onBlur: function () {},
    onNumberBlur: function () {},
    onCompositionstart: function () {},
    onCompositionend: function () {},
    showPassword: function () {},
    focus: function () {},
    blur: function () {}
  }
}
export default Input
