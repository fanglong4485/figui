<template>
  <div class="mod-config">
    <basic-container>
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
        <el-form-item>
          <el-button v-if="permissions.demo_datachinacity_add" icon="el-icon-plus" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        </el-form-item>
        <el-input v-model="input" placeholder="请输入城市名" style="width: 100px"></el-input>
        <el-button @click="handleSearch">按名字查询</el-button>
      </el-form>

      <div class="avue-crud">
        <el-table
                :data="dataList"
                border
                v-loading="dataListLoading">
            <el-table-column
                    prop="id"
                    header-align="center"
                    align="center"
                    label="id">
            </el-table-column>
            <el-table-column
                    prop="pro"
                    header-align="center"
                    align="center"
                    label="pro">
            </el-table-column>
            <el-table-column
                    prop="city"
                    header-align="center"
                    align="center"
                    label="city">
            </el-table-column>
            <el-table-column
                    prop="nativeRelative"
                    header-align="center"
                    align="center"
                    label="nativeRelative">
            </el-table-column>
            <el-table-column
                    prop="asymptomatic"
                    header-align="center"
                    align="center"
                    label="asymptomatic">
            </el-table-column>
            <el-table-column
                    prop="asymptomaticRelative"
                    header-align="center"
                    align="center"
                    label="asymptomaticRelative">
            </el-table-column>
            <el-table-column
                    prop="confirmed"
                    header-align="center"
                    align="center"
                    label="confirmed">
            </el-table-column>
            <el-table-column
                    prop="confirmedRelative"
                    header-align="center"
                    align="center"
                    label="confirmedRelative">
            </el-table-column>
            <el-table-column
                    prop="died"
                    header-align="center"
                    align="center"
                    label="died">
            </el-table-column>
            <el-table-column
                    prop="diedRelative"
                    header-align="center"
                    align="center"
                    label="diedRelative">
            </el-table-column>
            <el-table-column
                    prop="curConfirm"
                    header-align="center"
                    align="center"
                    label="curConfirm">
            </el-table-column>
            <el-table-column
                    prop="crued"
                    header-align="center"
                    align="center"
                    label="crued">
            </el-table-column>
            <el-table-column
                    prop="cruedRelative"
                    header-align="center"
                    align="center"
                    label="cruedRelative">
            </el-table-column>
            <el-table-column
                    prop="cityCode"
                    header-align="center"
                    align="center"
                    label="cityCode">
            </el-table-column>
            <el-table-column
                    prop="administrativeCode"
                    header-align="center"
                    align="center"
                    label="administrativeCode">
            </el-table-column>
            <el-table-column
                    prop="mark"
                    header-align="center"
                    align="center"
                    label="mark">
            </el-table-column>
            <el-table-column
                    prop="updateTime"
                    header-align="center"
                    align="center"
                    label="updateTime">
            </el-table-column>
            <el-table-column
                    prop="createTime"
                    header-align="center"
                    align="center"
                    label="createTime">
            </el-table-column>
          <el-table-column
                  header-align="center"
                  align="center"
                  label="操作">
            <template slot-scope="scope">
              <el-button v-if="permissions.demo_datachinacity_edit" type="text" size="small" icon="el-icon-edit" @click="addOrUpdateHandle(scope.row.id)">修改</el-button>
              <el-button v-if="permissions.demo_datachinacity_del" type="text" size="small" icon="el-icon-delete" @click="deleteHandle(scope.row.id)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>

      <div class="avue-crud__pagination">
        <el-pagination
                @size-change="sizeChangeHandle"
                @current-change="currentChangeHandle"
                :current-page="pageIndex"
                :page-sizes="[10, 20, 50, 100]"
                :page-size="pageSize"
                :total="totalPage"
                background
                layout="total, sizes, prev, pager, next, jumper">
        </el-pagination>
      </div>
      <!-- 弹窗, 新增 / 修改 -->
      <table-form v-if="addOrUpdateVisible" ref="addOrUpdate" @refreshDataList="getDataList"></table-form>
    </basic-container>
  </div>
</template>

<script>
  import {fetchList, delObj} from '@/api/datachinacity'
  import TableForm from './datachinacity-form'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
        input: '',
        dataForm: {
          key: ''
        },
        dataList: [],
        pageIndex: 1,
        pageSize: 10,
        totalPage: 0,
        dataListLoading: false,
        addOrUpdateVisible: false
      }
    },
    components: {
      TableForm
    },
    created () {
      this.getDataList()
    },
    computed: {
      ...mapGetters(['permissions'])
    },
    methods: {
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        fetchList(Object.assign({
          current: this.pageIndex,
          size: this.pageSize
        })).then(response => {
          this.dataList = response.data.data.records
          this.totalPage = response.data.data.total
        })
        this.dataListLoading = false
      },
      // 每页数
      sizeChangeHandle (val) {
        this.pageSize = val
        this.pageIndex = 1
        this.getDataList()
      },
      // 当前页
      currentChangeHandle (val) {
        this.pageIndex = val
        this.getDataList()
      },
      // 新增 / 修改
      addOrUpdateHandle (id) {
        this.addOrUpdateVisible = true
        this.$nextTick(() => {
          this.$refs.addOrUpdate.init(id)
        })
      },
      // 删除
      deleteHandle (id) {
        this.$confirm('是否确认删除ID为' + id, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(function () {
          return delObj(id)
        }).then(data => {
          this.$message.success('删除成功')
          this.getDataList()
        }).catch(() => {})
      },
      handleSearch(){
        //以这个Vue的input的值作为参数，发送Ajax请求
        this.dataListLoading = true
        fetchList(Object.assign({//这是一个从api导入的Ajax请求
          current: this.pageIndex,
          size: this.pageSize,
          city: this.input
        })).then(response => {
          this.dataList = response.data.data.records
          this.totalPage = response.data.data.total
        })
        this.dataListLoading = false
      }
    }
  }
</script>
