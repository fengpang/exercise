<template>
  <div class="dataTable" id="demo">
    <div id="demo1">
      <table>
        <tbody>
          <tr v-for="data in datas" :key="data.id">
            <td v-html="data.num > 20 ? shang : xia"/>
            <td style="width: 13%;">{{ data.id }}</td>
            <td style="width: 54%">{{ data.name }}</td>
            <td>{{ data.guokong }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div id="demo2"/>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        default () {
          return null
        },
        type: Array
      }
    },
    shang: '', // 上升标签
    xia: '', // 上降标签
    datas: [],
    created () {
      this.datas = this.data
      this.shang = '<span style="color: #e66b1a;font-size: 12px">↑</span>' // 上升标签
      this.xia = '<span style="color: #00d433;font-size: 12px">↓</span>' // 上降标签
    },
    mounted () {
      let MyMar = []
      let speed = 30
      let demo2 = document.getElementById('demo2')
      let demo1 = document.getElementById('demo1')
      let demo = document.getElementById('demo')
      MyMar.push(setInterval(function () {
        demo2.innerHTML = demo1.innerHTML
        if (demo.scrollTop >= demo1.scrollHeight) {
          demo.scrollTop -= demo1.offsetHeight
        } else {
          demo.scrollTop++
        }
      }, speed))
      // 获取父级焦点。暂停
      demo.onmouseover = function () {
        for (let i = 0; i < MyMar.length; i++) {
          clearInterval(MyMar[i])
        }
        MyMar = []
      }
      // 失去父级焦点。开始
      demo.onmouseout = function () {
        MyMar.push(setInterval(function () {
          demo2.innerHTML = demo1.innerHTML
          if (demo.scrollTop >= demo1.scrollHeight) {
            demo.scrollTop -= demo1.offsetHeight
          } else {
            demo.scrollTop++
          }
        }, speed))
      }
    }
  }
</script>

<style  lang="less" scoped>
  .dataTable {
    height: 300px;
    overflow: hidden;
    width: 100%;
    animation: lineMove4 2s ease-out;
    color: white;
  }
  table {
    width: 100%;
    font-size: 10px;
    border-collapse: collapse;
  }
  td {
    padding: 6px;
    text-align: center;
    border-bottom: 1px solid #3f7ab8;
  }
</style>
