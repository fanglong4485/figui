<!--
  -    Copyright (c) 2018-2025, lengleng All rights reserved.
  -
  - Redistribution and use in source and binary forms, with or without
  - modification, are permitted provided that the following conditions are met:
  -
  - Redistributions of source code must retain the above copyright notice,
  - this list of conditions and the following disclaimer.
  - Redistributions in binary form must reproduce the above copyright
  - notice, this list of conditions and the following disclaimer in the
  - documentation and/or other materials provided with the distribution.
  - Neither the name of the pig4cloud.com developer nor the names of its
  - contributors may be used to endorse or promote products derived from
  - this software without specific prior written permission.
  - Author: lengleng (wangiegie@gmail.com)
  -->
<template>
    <div class="execution">

        <basic-container>

            <avue-crud ref="crud"
                       :page.sync="page"
                       :data="tableData"
                       :permission="permissionList"
                       :table-loading="tableLoading"
                       :option="tableOption"
                       :search.sync="search"
                       @on-load="getList"
                       @date-change="dateChange"
                       @search-change="searchChange"
                       @search-reset="resetSearch"
                       @refresh-change="refreshChange"
                       @size-change="sizeChange"
                       @current-change="currentChange"
                       @row-update="handleUpdate"
                       @row-save="handleSave"
                       @row-del="rowDel">
            </avue-crud>
        </basic-container>
    </div>
</template>

<script>
    import {fetchList, getObj, addObj, putObj, delObj} from '@/api/datachinacity'
    import {tableOption} from '@/const/crud/datachinacity'
    import {mapGetters} from 'vuex'

    export default {
        name: 'datachinacity',
        data() {
            return {
              startDate: '',
              endDate: '',

                search: {
                  city: '',
                },
                searchForm: {},
                tableData: [],
                page: {
                    total: 0, // 总页数
                    currentPage: 1, // 当前页数
                    pageSize: 10 // 每页显示多少条
                },
                tableLoading: false,
                tableOption: tableOption
            }
        },
      mounted() {
        this.$nextTick(()=>this.$refs.crud.dicInit('cascader'))
      },
      computed: {
            ...mapGetters(['permissions']),
            permissionList() {
              //权限没有问题
              // console.log("我的权限：",this.permissions)
                return {
                    addBtn: this.vaildData(this.permissions.datas_datachinacity_add, false),
                    delBtn: this.vaildData(this.permissions.datas_datachinacity_del, false),
                    editBtn: this.vaildData(this.permissions.datas_datachinacity_edit, false)
                };
            }
        },
        methods: {
            getList(page, params) {
                this.tableLoading = true
                fetchList(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize
                }, params, this.searchForm )).then(response => {
                    this.tableData = response.data.data.records
                    this.page.total = response.data.data.total
                    this.tableLoading = false
                }).catch(() => {
                    this.tableLoading=false
                })
            },
          dateChange(date){
            //date 是一个数组，有两个元素，元素类型是字符串。
            // this.$message.success(JSON.stringify(date));
            if (date[0]){
              this.searchForm.startDate = date[0]
              this.searchForm.endDate = date[1]
            }
            console.log('查询参数=》',this.searchForm)

          },
            rowDel: function (row, index) {
                this.$confirm('是否确认删除ID为' + row.id, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    return delObj(row.id)
                }).then(data => {
                    this.$message.success('删除成功')
                    this.getList(this.page)
                })
            },
            handleUpdate: function (row, index, done,loading) {
              console.log("正在更新第"+row+"行！！")
              debugger
                putObj(row).then(data => {
                    this.$message.success('修改成功')
                    done()
                    this.getList(this.page)
                }).catch(() => {
                    loading();
                });
            },
            handleSave: function (row, done,loading) {
                addObj(row).then(data => {
                    this.$message.success('添加成功')
                    done()
                    this.getList(this.page)
                }).catch(() => {
                    loading();
                });
            },
            sizeChange(pageSize){
                this.page.pageSize = pageSize
            },
            currentChange(current){
                this.page.currentPage = current
            },
            //执行搜索
            searchChange(form, done) {
                this.searchForm.pro = form.pro
              this.searchForm.city = form.city
              console.log('form=>',form)
                this.page.currentPage = 1
                this.getList(this.page, this.searchForm)
                done()
            },
            //重置搜索
            resetSearch(item){
              //无需添加语句
            },
            refreshChange() {
                this.getList(this.page)
            }
        }
    }
</script>
