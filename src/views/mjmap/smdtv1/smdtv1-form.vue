<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    @close="closeDialog()"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="smid" prop="smid" v-if="dataForm.id">
        <el-input v-model="dataForm.smid" placeholder="smid" disabled></el-input>
    </el-form-item>
    <el-form-item label="smkey" prop="smkey">
        <el-input v-model="dataForm.smkey" placeholder="smkey"></el-input>
    </el-form-item>
    <el-form-item label="smsdriw" prop="smsdriw">
        <el-input v-model="dataForm.smsdriw" placeholder="smsdriw"></el-input>
    </el-form-item>
    <el-form-item label="smsdrin" prop="smsdrin">
        <el-input v-model="dataForm.smsdrin" placeholder="smsdrin"></el-input>
    </el-form-item>
    <el-form-item label="smsdrie" prop="smsdrie">
        <el-input v-model="dataForm.smsdrie" placeholder="smsdrie"></el-input>
    </el-form-item>
    <el-form-item label="smsdris" prop="smsdris">
        <el-input v-model="dataForm.smsdris" placeholder="smsdris"></el-input>
    </el-form-item>
    <el-form-item label="smgranule" prop="smgranule">
        <el-input v-model="dataForm.smgranule" placeholder="smgranule"></el-input>
    </el-form-item>
    <el-form-item label="smgeometry" prop="smgeometry">
        <el-input v-model="dataForm.smgeometry" placeholder="smgeometry"></el-input>
    </el-form-item>
    <el-form-item label="smuserid" prop="smuserid">
        <el-input v-model="dataForm.smuserid" placeholder="smuserid"></el-input>
    </el-form-item>
    <el-form-item label="smlibtileid" prop="smlibtileid">
        <el-input v-model="dataForm.smlibtileid" placeholder="smlibtileid"></el-input>
    </el-form-item>
    <el-form-item label="smarea" prop="smarea">
        <el-input v-model="dataForm.smarea" placeholder="smarea"></el-input>
    </el-form-item>
    <el-form-item label="smperimeter" prop="smperimeter">
        <el-input v-model="dataForm.smperimeter" placeholder="smperimeter"></el-input>
    </el-form-item>
    <el-form-item label="省" prop="省">
        <el-input v-model="dataForm.省" placeholder="省"></el-input>
    </el-form-item>
    <el-form-item label="省代码" prop="省代码">
        <el-input v-model="dataForm.省代码" placeholder="省代码"></el-input>
    </el-form-item>
    <el-form-item label="市" prop="市">
        <el-input v-model="dataForm.市" placeholder="市"></el-input>
    </el-form-item>
    <el-form-item label="市代码" prop="市代码">
        <el-input v-model="dataForm.市代码" placeholder="市代码"></el-input>
    </el-form-item>
    <el-form-item label="name" prop="name">
        <el-input v-model="dataForm.name" placeholder="name"></el-input>
    </el-form-item>
    <el-form-item label="pac" prop="pac">
        <el-input v-model="dataForm.pac" placeholder="pac"></el-input>
    </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()" v-if="canSubmit">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
    import {getObj, addObj, putObj} from '@/api/smdtv1'

    export default {
    data () {
      return {
        visible: false,
        canSubmit: false,
        dataForm: {
          smid: '',
          smkey: '',
          smsdriw: '',
          smsdrin: '',
          smsdrie: '',
          smsdris: '',
          smgranule: '',
          smgeometry: '',
          smuserid: '',
          smlibtileid: '',
          smarea: '',
          smperimeter: '',
          省: '',
          省代码: '',
          市: '',
          市代码: '',
          name: '',
          pac: '',
        },
        dataRule: {
          smkey: [
            { required: true, message: 'smkey不能为空', trigger: 'blur' }
          ],

          smsdriw: [
            { required: true, message: 'smsdriw不能为空', trigger: 'blur' }
          ],

          smsdrin: [
            { required: true, message: 'smsdrin不能为空', trigger: 'blur' }
          ],

          smsdrie: [
            { required: true, message: 'smsdrie不能为空', trigger: 'blur' }
          ],

          smsdris: [
            { required: true, message: 'smsdris不能为空', trigger: 'blur' }
          ],

          smgranule: [
            { required: true, message: 'smgranule不能为空', trigger: 'blur' }
          ],

          smgeometry: [
            { required: true, message: 'smgeometry不能为空', trigger: 'blur' }
          ],

          smuserid: [
            { required: true, message: 'smuserid不能为空', trigger: 'blur' }
          ],

          smlibtileid: [
            { required: true, message: 'smlibtileid不能为空', trigger: 'blur' }
          ],

          smarea: [
            { required: true, message: 'smarea不能为空', trigger: 'blur' }
          ],

          smperimeter: [
            { required: true, message: 'smperimeter不能为空', trigger: 'blur' }
          ],

          省: [
            { required: true, message: '省不能为空', trigger: 'blur' }
          ],

          省代码: [
            { required: true, message: '省代码不能为空', trigger: 'blur' }
          ],

          市: [
            { required: true, message: '市不能为空', trigger: 'blur' }
          ],

          市代码: [
            { required: true, message: '市代码不能为空', trigger: 'blur' }
          ],

          name: [
            { required: true, message: 'name不能为空', trigger: 'blur' }
          ],

          pac: [
            { required: true, message: 'pac不能为空', trigger: 'blur' }
          ],

        }
      }
    },
    methods: {
      init (id) {
        this.visible = true;
        this.canSubmit = true;
        this.$nextTick(() => {
            this.$refs['dataForm'].resetFields()
            if (id) {
            getObj(id).then(response => {
                this.dataForm = response.data.data
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.canSubmit = false;
            if (this.dataForm.smid) {
                putObj(this.dataForm).then(data => {
                    this.$notify.success('修改成功')
                    this.visible = false
                    this.$emit('refreshDataList')
                }).catch(() => {
                    this.canSubmit = true;
                });
            } else {
                addObj(this.dataForm).then(data => {
                    this.$notify.success('添加成功')
                    this.visible = false
                    this.$emit('refreshDataList')
                }).catch(() => {
                    this.canSubmit = true;
                });
            }
          }
        })
      },
      //重置表单
      closeDialog() {
          this.$refs["dataForm"].resetFields()
      }
    }
  }
</script>
