<template>
  <div>
    <!-- 切換語系 UI -->
    <label v-for="(item, index) in optionsLang" v-bind:key="index">
      <input
        v-model="lang"
        type="radio"
        :value="item.value"
        v-on:change="setLang(item.value)"
      />
      {{ item.text }}
    </label>

    <!-- 使用 $t(key) 即可依所選用的語系顯示對應的語言 -->
    <h1>{{ $t("title") }}</h1>
    <h2>{{ $t("description") }}</h2>

    <!-- 測試component內的語言是否一樣更變 -->
    <TestComponent />

    <!-- Scope 測試 -->
    <TestComponent2 />
  </div>
</template>

<script>
import TestComponent from "./TestComponent";
import TestComponent2 from "./TestComponent2";

export default {
  name: "HelloWorld",
  components: {
    TestComponent,
    TestComponent2,
  },
  data() {
    return {
      lang: null,
      optionsLang: [
        { text: "中文", value: "zh" },
        { text: "English", value: "en" },
      ],
    };
  },
  methods: {
    setLang(value) {
      this.$i18n.locale = value;
    },
  },
};
</script>
