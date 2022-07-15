<template>
  <div class="mod-config">
    <basic-container>
      <el-form :inline="true" :model="dataForm" @keyup.enter.native="getDataList()">
        <el-form-item>
          <el-button v-if="permissions.mjmap_smdtv1_add" icon="el-icon-plus" type="primary" @click="addOrUpdateHandle()">新增</el-button>
        </el-form-item>
      </el-form>

      <div class="avue-crud">
        <el-table
                :data="dataList"
                border
                v-loading="dataListLoading">
            <el-table-column
                    prop="smid"
                    header-align="center"
                    align="center"
                    label="smid">
            </el-table-column>
            <el-table-column
                    prop="smkey"
                    header-align="center"
                    align="center"
                    label="smkey">
            </el-table-column>
            <el-table-column
                    prop="smsdriw"
                    header-align="center"
                    align="center"
                    label="smsdriw">
            </el-table-column>
            <el-table-column
                    prop="smsdrin"
                    header-align="center"
                    align="center"
                    label="smsdrin">
            </el-table-column>
            <el-table-column
                    prop="smsdrie"
                    header-align="center"
                    align="center"
                    label="smsdrie">
            </el-table-column>
            <el-table-column
                    prop="smsdris"
                    header-align="center"
                    align="center"
                    label="smsdris">
            </el-table-column>
            <el-table-column
                    prop="smgranule"
                    header-align="center"
                    align="center"
                    label="smgranule">
            </el-table-column>
            <el-table-column
                    prop="smgeometry"
                    header-align="center"
                    align="center"
                    label="smgeometry">
            </el-table-column>
            <el-table-column
                    prop="smuserid"
                    header-align="center"
                    align="center"
                    label="smuserid">
            </el-table-column>
            <el-table-column
                    prop="smlibtileid"
                    header-align="center"
                    align="center"
                    label="smlibtileid">
            </el-table-column>
            <el-table-column
                    prop="smarea"
                    header-align="center"
                    align="center"
                    label="smarea">
            </el-table-column>
            <el-table-column
                    prop="smperimeter"
                    header-align="center"
                    align="center"
                    label="smperimeter">
            </el-table-column>
            <el-table-column
                    prop="省"
                    header-align="center"
                    align="center"
                    label="省">
            </el-table-column>
            <el-table-column
                    prop="省代码"
                    header-align="center"
                    align="center"
                    label="省代码">
            </el-table-column>
            <el-table-column
                    prop="市"
                    header-align="center"
                    align="center"
                    label="市">
            </el-table-column>
            <el-table-column
                    prop="市代码"
                    header-align="center"
                    align="center"
                    label="市代码">
            </el-table-column>
            <el-table-column
                    prop="name"
                    header-align="center"
                    align="center"
                    label="name">
            </el-table-column>
            <el-table-column
                    prop="pac"
                    header-align="center"
                    align="center"
                    label="pac">
            </el-table-column>
          <el-table-column
                  header-align="center"
                  align="center"
                  label="操作">
            <template slot-scope="scope">
              <el-button v-if="permissions.mjmap_smdtv1_edit" type="text" size="small" icon="el-icon-edit" @click="addOrUpdateHandle(scope.row.smid)">修改</el-button>
              <el-button v-if="permissions.mjmap_smdtv1_del" type="text" size="small" icon="el-icon-delete" @click="deleteHandle(scope.row.smid)">删除</el-button>
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
  import {fetchList, delObj} from '@/api/smdtv1'
  import TableForm from './smdtv1-form'
  import {mapGetters} from 'vuex'
  export default {
    data () {
      return {
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
      }
    }
  }
</script>
