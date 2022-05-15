<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    @close="closeDialog()"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="id" prop="id" v-if="dataForm.id">
        <el-input v-model="dataForm.id" placeholder="id" disabled></el-input>
    </el-form-item>
    <el-form-item label="pro" prop="pro">
        <el-input v-model="dataForm.pro" placeholder="pro"></el-input>
    </el-form-item>
    <el-form-item label="city" prop="city">
        <el-input v-model="dataForm.city" placeholder="city"></el-input>
    </el-form-item>
    <el-form-item label="nativeRelative" prop="nativeRelative">
        <el-input v-model="dataForm.nativeRelative" placeholder="nativeRelative"></el-input>
    </el-form-item>
    <el-form-item label="asymptomatic" prop="asymptomatic">
        <el-input v-model="dataForm.asymptomatic" placeholder="asymptomatic"></el-input>
    </el-form-item>
    <el-form-item label="asymptomaticRelative" prop="asymptomaticRelative">
        <el-input v-model="dataForm.asymptomaticRelative" placeholder="asymptomaticRelative"></el-input>
    </el-form-item>
    <el-form-item label="confirmed" prop="confirmed">
        <el-input v-model="dataForm.confirmed" placeholder="confirmed"></el-input>
    </el-form-item>
    <el-form-item label="confirmedRelative" prop="confirmedRelative">
        <el-input v-model="dataForm.confirmedRelative" placeholder="confirmedRelative"></el-input>
    </el-form-item>
    <el-form-item label="died" prop="died">
        <el-input v-model="dataForm.died" placeholder="died"></el-input>
    </el-form-item>
    <el-form-item label="diedRelative" prop="diedRelative">
        <el-input v-model="dataForm.diedRelative" placeholder="diedRelative"></el-input>
    </el-form-item>
    <el-form-item label="curConfirm" prop="curConfirm">
        <el-input v-model="dataForm.curConfirm" placeholder="curConfirm"></el-input>
    </el-form-item>
    <el-form-item label="crued" prop="crued">
        <el-input v-model="dataForm.crued" placeholder="crued"></el-input>
    </el-form-item>
    <el-form-item label="cruedRelative" prop="cruedRelative">
        <el-input v-model="dataForm.cruedRelative" placeholder="cruedRelative"></el-input>
    </el-form-item>
    <el-form-item label="cityCode" prop="cityCode">
        <el-input v-model="dataForm.cityCode" placeholder="cityCode"></el-input>
    </el-form-item>
    <el-form-item label="administrativeCode" prop="administrativeCode">
        <el-input v-model="dataForm.administrativeCode" placeholder="administrativeCode"></el-input>
    </el-form-item>
    <el-form-item label="mark" prop="mark">
        <el-input v-model="dataForm.mark" placeholder="mark"></el-input>
    </el-form-item>
    <el-form-item label="updateTime" prop="updateTime" v-if="dataForm.id">
        <el-input v-model="dataForm.updateTime" placeholder="updateTime" disabled></el-input>
    </el-form-item>
    <el-form-item label="createTime" prop="createTime" v-if="dataForm.id">
        <el-input v-model="dataForm.createTime" placeholder="createTime" disabled></el-input>
    </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()" v-if="canSubmit">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
    import {getObj, addObj, putObj} from '@/api/datachinacity'

    export default {
    data () {
      return {
        visible: false,
        canSubmit: false,
        dataForm: {
          id: '',
          pro: '',
          city: '',
          nativeRelative: '',
          asymptomatic: '',
          asymptomaticRelative: '',
          confirmed: '',
          confirmedRelative: '',
          died: '',
          diedRelative: '',
          curConfirm: '',
          crued: '',
          cruedRelative: '',
          cityCode: '',
          administrativeCode: '',
          mark: '',
          updateTime: '',
          createTime: '',
        },
        dataRule: {
          pro: [
            { required: true, message: 'pro不能为空', trigger: 'blur' }
          ],

          city: [
            { required: true, message: 'city不能为空', trigger: 'blur' }
          ],

          nativeRelative: [
            { required: true, message: 'nativeRelative不能为空', trigger: 'blur' }
          ],

          asymptomatic: [
            { required: true, message: 'asymptomatic不能为空', trigger: 'blur' }
          ],

          asymptomaticRelative: [
            { required: true, message: 'asymptomaticRelative不能为空', trigger: 'blur' }
          ],

          confirmed: [
            { required: true, message: 'confirmed不能为空', trigger: 'blur' }
          ],

          confirmedRelative: [
            { required: true, message: 'confirmedRelative不能为空', trigger: 'blur' }
          ],

          died: [
            { required: true, message: 'died不能为空', trigger: 'blur' }
          ],

          diedRelative: [
            { required: true, message: 'diedRelative不能为空', trigger: 'blur' }
          ],

          curConfirm: [
            { required: true, message: 'curConfirm不能为空', trigger: 'blur' }
          ],

          crued: [
            { required: true, message: 'crued不能为空', trigger: 'blur' }
          ],

          cruedRelative: [
            { required: true, message: 'cruedRelative不能为空', trigger: 'blur' }
          ],

          cityCode: [
            { required: true, message: 'cityCode不能为空', trigger: 'blur' }
          ],

          administrativeCode: [
            { required: true, message: 'administrativeCode不能为空', trigger: 'blur' }
          ],

          mark: [
            { required: true, message: 'mark不能为空', trigger: 'blur' }
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
            if (this.dataForm.id) {
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
