<!--
 * @Author: zzj
 * @Date: 2020-11-20 20:49:56
 * @LastEditors: zzj
 * @LastEditTime: 2020-11-22 11:13:57
 * @Description: 
-->
<template>
  <div>
    <ul class="fly-list">
      <li
        v-for="(item,index) in items"
        :key="index"
      >
        <a
          href="user/home.html"
          class="fly-avatar"
        >
          <img
            :src="item.uid.pic"
            :alt="item.uid.name"
          >
        </a>
        <h2>
          <a class="layui-badge">{{item.catalog}}</a>
          <a href="jie/detail.html">{{item.title}}</a>
        </h2>
        <div class="fly-list-info">
          <a
            href="user/home.html"
            link
          >
            <cite>{{item.uid.name}}</cite>
            <!-- <i
              class="iconfont icon-renzheng"
              title="认证信息：XXX"
            ></i> -->
            <i
              class="layui-badge fly-badge-vip"
              v-if="item.uid.isVip !== '0'"
            >{{'VIP' + item.uid.isVip}}</i>
          </a>
          <span>{{item.created|moment}}</span>
          <span
            class="fly-list-kiss layui-hide-xs"
            title="悬赏飞吻"
          >
            <i class="iconfont icon-kiss"></i>{{item.fav}}
          </span>
          <span
            class="layui-badge fly-badge-accept layui-hide-xs"
            v-show="item.status!==0"
          >已结</span>
          <span class="fly-list-nums">
            <i
              class="iconfont icon-pinglun1"
              title="回答"
            ></i>{{item.answer}}
          </span>
        </div>
        <div
          class="fly-list-badge"
          v-show="item.tags.length>0"
        >
          <span
            class="layui-badge"
            v-for="tag in item.tags"
            :key="tag"
            :class="tag.class"
          >{{tag.name}}</span>
        </div>
      </li>
    </ul>
    <div
      style="text-align: center"
      v-show="isShow"
    >
      <div
        class="laypage-main"
        v-if="!isEnd"
      >
        <a
          class="laypage-next"
          style="cursor: pointer"
          @click.prevent="more"
        >更多求解</a>
      </div>
      <div
        class="nomore gray"
        v-else
      >人家是有底线的</div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import moment from "moment";
import "moment/locale/zh-cn";
export default {
  name: "listItem",
  components: {},
  props: {
    lists: {
      type: Array,
      default: () => [],
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    isEnd: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  computed: {
    items() {
      _.map(this.lists, (item) => {
        switch (item.catalog) {
          case "ask":
            item.catalog = "提问";
            break;
          case "share":
            item.catalog = "分享";
            break;
          case "logs":
            item.catalog = "动态";
            break;
          case "notice":
            item.catalog = "公告";
            break;
          case "advice":
            item.catalog = "建议";
            break;
          case "discuss":
            item.catalog = "交流";
            break;
          default:
            break;
        }
      });
      return this.lists;
    },
  },
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    more() {
      this.$emit("nextpage");
    },
  },
  filters: {
    moment(date) {
      // 超过7天显示日期
      if (moment(date).isBefore(moment().subtract(7, "days"))) {
        return moment(date).format("YYYY-MM-DD");
      } else {
        return moment(date).from(moment());
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.nomore {
  font-size: 16px;
  padding: 30px 0;
}
</style>