<!--
 * @Author: zzj
 * @Date: 2020-12-27 13:05:06
 * @LastEditors: zzj
 * @LastEditTime: 2020-12-27 16:08:01
 * @Description: 
-->
<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel" pad20 style="padding-top: 5px;">
      <!--<div class="fly-none">没有权限</div>-->
      <div class="layui-form layui-form-pane">
        <div class="layui-tab layui-tab-brief">
          <ul class="layui-tab-title">
            <li class="layui-this">
              发表新帖
              <!-- 编辑帖子 -->
            </li>
          </ul>
          <div class="layui-form layui-tab-content" style="padding: 20px 0;">
            <div class="layui-tab-item layui-show">
              <form>
                <validation-observer ref="observer" v-slot="{ validate }">
                  <div class="layui-row layui-col-space15 layui-form-item">
                    <div class="layui-col-md3">
                      <validation-provider
                        name="catalog"
                        rules="is_not:请选择"
                        v-slot="{errors}"
                      >
                        <div class="layui-row">
                          <label class="layui-form-label">所在专栏</label>
                          <div class="layui-input-block">
                            <div
                              class="layui-unselect layui-form-select"
                              :class="{'layui-form-selected': isSelect}"
                            >
                              <div class="layui-select-title">
                                <input
                                  type="text"
                                  placeholder="请选择专栏"
                                  readonly
                                  v-model="catalogs[cataIndex].text"
                                  class="layui-input layui-unselect"
                                />
                                <i class="layui-edge"></i>
                              </div>
                              <dl class="layui-anim layui-anim-upbit">
                                <dd
                                  v-for="(item,index) in catalogs"
                                  :key="'catalog' + index"
                                  @click="chooseCatalog(item, index)"
                                  :class="{'layui-this': index === cataIndex}"
                                >{{item.text}}</dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                        <div class="layui-row">
                          <span style="color: #c00;">{{errors[0]}}</span>
                        </div>
                      </validation-provider>
                    </div>
                    <div class="layui-col-md9">
                      <validation-provider
                        name="title"
                        rules="required"
                        v-slot="{errors}"
                      >
                        <div class="layui-row">
                          <label class="layui-form-label">标题</label>
                          <div class="layui-input-block">
                            <input
                              type="text"
                              class="layui-input"
                              v-model="title"
                            />
                            <!-- <input type="hidden" name="id" value="{{d.edit.id}}"> -->
                          </div>
                        </div>
                        <div class="layui-row">
                          <span style="color: #c00;">{{errors[0]}}</span>
                        </div>
                      </validation-provider>
                    </div>
                  </div>
                  <!-- <Editor @changeContent="add" :initContent="content"></Editor> -->
                  <div class="layui-form-item">
                    <div class="layui-inline">
                      <label class="layui-form-label">悬赏飞吻</label>
                      <div class="layui-input-inline" style="width: 190px;">
                        <div
                          class="layui-unselect layui-form-select"
                          :class="{'layui-form-selected': isSelect_fav}"
                          @click="changeFav"
                        >
                          <div class="layui-select-title">
                            <input
                              type="text"
                              placeholder="请选择"
                              readonly
                              v-model="favList[favIndex]"
                              class="layui-input layui-unselect"
                            />
                            <i class="layui-edge"></i>
                          </div>
                          <dl class="layui-anim layui-anim-upbit">
                            <dd
                              v-for="(item,index) in favList"
                              :key="'catalog' + index"
                              @click="chooseFav(item, index)"
                              :class="{'layui-this': index === favIndex}"
                            >{{item}}</dd>
                          </dl>
                        </div>
                      </div>
                      <div class="layui-form-mid layui-word-aux">发表后无法更改飞吻</div>
                    </div>
                  </div>
                  <div class="layui-form-item">
                    <validation-provider
                      name="vercode"
                      ref="codefield"
                      rules="required|length:4"
                      v-slot="{errors}"
                    >
                      <div class="layui-row">
                        <label class="layui-form-label">验证码</label>
                        <div class="layui-input-inline">
                          <input
                            type="text"
                            name="vercode"
                            v-model="vercode"
                            placeholder="请输入验证码"
                            class="layui-input"
                          />
                        </div>
                        <span
                          class="svg"
                          @click="_getCode($store.state.sid)"
                          v-html="svg"
                        ></span>
                      </div>
                      <div class="layui-form-mid">
                        <span style="color: #c00;">{{errors[0]}}</span>
                      </div>
                    </validation-provider>
                  </div>
                  <div class="layui-form-item">
                    <button
                      type="button"
                      class="layui-btn"
                      @click="validate().then(submit)"
                    >立即发布</button>
                  </div>
                </validation-observer>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from "vee-validate";
import Editor from "@/components/modules/editor";
import CodeMix from "@/mixin/code";
export default {
  name: "Add",
  mixins: [CodeMix],
  components: { ValidationProvider, ValidationObserver, Editor },
  data() {
    return {
      isSelect: false,
      isSelect_fav: false,
      cataIndex: 0,
      favIndex: 0,
      catalogs: [
        {
          text: "请选择",
          value: "",
        },
        {
          text: "提问",
          value: "ask",
        },
        {
          text: "分享",
          value: "share",
        },
        {
          text: "讨论",
          value: "discuss",
        },
        {
          text: "建议",
          value: "advise",
        },
      ],
      favList: [20, 30, 50, 60, 80],
      title: "",
    };
  },
  computed: {},
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  methods: {
    chooseCatalog(item, index) {
      this.cataIndex = index;
    },
    chooseFav(item, index) {
      this.favIndex = index;
    },
  },
};
</script>
<style lang='scss' scoped>
.svg {
  cursor: pointer;
}
</style>