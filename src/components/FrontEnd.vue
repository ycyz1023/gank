<template>
  <div>
  <yd-infinitescroll :callback="loadMore" :distance="2" :scroll-top="false" ref="infinitescrollDemo">
    <yd-list theme="1" slot="list">
      <yd-list-item v-for="item, key in list" :key="key">
        <!--<img slot="img" v-lazy="item.images?item.images[0]:null" class="img">-->
        <a :href="item.url"><span class="demo-list-price">{{item.desc}}</span></a>
        <span slot="title">{{item.who}}</span>
        <yd-list-other slot="other">
          <div>
            <a :href="item.url"><span class="demo-list-price">{{item.desc}}</span></a>
            <span class="demo-list-del-price">{{item.source}}</span>
          </div>
          <div>content</div>
        </yd-list-other>
      </yd-list-item>
    </yd-list>
  </yd-infinitescroll>
  </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "frontend",
      data() {
        return {
          page: 1,
          pageSize: 10, // 每页10条数据
          list: []
        }
      },
      mounted(){
        this.getPictrue();
      },
      methods:{
          getPictrue(){
            const url = '/apip/api/data/前端/10/1';
            axios({
              method: 'get',
              url: url,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(response => {
                var that = this;
                that.list = response.data.results
            }).catch(err => {
              this.$dialog.alert({mes: '接口获取数据出错'});
            })
          },
        // 加载更多
        loadMore () {
          const url = '/apip/api/data/前端/10/'+(this.page+1)
          axios({
            method: 'get',
            url: url,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
          }).then(response => {
            const _list = response.data.results
            this.list = [...this.list, ..._list]
            if (_list.length < this.pageSize) {
              /* 所有数据加载完毕 */
              console.log(this.page)
              this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone')
            }
            /* 单次请求数据完毕 */
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad')
            this.page++
            console.log(this.page)
          }).catch(err => {
            this.$dialog.alert({mes: '接口获取数据出错'});
          })
        },
      }
    }
</script>

<style type="text/css">
 
</style>
