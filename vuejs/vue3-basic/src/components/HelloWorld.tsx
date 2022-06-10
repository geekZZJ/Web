import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  props:{
    msg: {
      required: true,
      type: String,
    }
  },
  setup(props,context) {
    return () => {
      return <div>hello</div>;
    };
  },
});
