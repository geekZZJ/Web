/*
 * @Author: zzj
 * @Date: 2020-12-27 15:39:27
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-27 15:59:16
 * @Description:
 */
import { getCode } from "@/api/login";
import { v4 as uuidv4 } from "uuid";

export default {
  data() {
    return {
      vercode: "",
      svg: "",
    };
  },
  mounted() {
    this.generateSid();
    this._getCode(this.$store.state.sid);
  },
  methods: {
    generateSid() {
      let sid = "";
      if (localStorage.getItem("sid")) {
        sid = localStorage.getItem("sid");
      } else {
        sid = uuidv4();
        localStorage.setItem("sid", sid);
      }
      this.$store.commit("setSid", sid);
    },
    async _getCode(sid) {
      const result = await getCode(sid);
      if (result.code === 200) {
        this.svg = result.data;
      }
    },
  },
};
