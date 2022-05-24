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
    <el-form-item label="省份" prop="pro">
        <el-input v-model="dataForm.pro" placeholder="省份"></el-input>
    </el-form-item>
    <el-form-item label="城市" prop="city">
        <el-input v-model="dataForm.city" placeholder="城市"></el-input>
    </el-form-item>
    <el-form-item label="本土新增" prop="nativeRelative">
        <el-input v-model="dataForm.nativeRelative" placeholder="本土新增"></el-input>
    </el-form-item>
    <el-form-item label="累计无症状" prop="asymptomatic">
        <el-input v-model="dataForm.asymptomatic" placeholder="累计无症状"></el-input>
    </el-form-item>
    <el-form-item label="新增无症状" prop="asymptomaticRelative">
        <el-input v-model="dataForm.asymptomaticRelative" placeholder="新增无症状"></el-input>
    </el-form-item>
    <el-form-item label="累计确诊" prop="confirmed">
        <el-input v-model="dataForm.confirmed" placeholder="累计确诊"></el-input>
    </el-form-item>
    <el-form-item label="新增确诊" prop="confirmedRelative">
        <el-input v-model="dataForm.confirmedRelative" placeholder="新增确诊"></el-input>
    </el-form-item>
    <el-form-item label="累计死亡" prop="died">
        <el-input v-model="dataForm.died" placeholder="累计死亡"></el-input>
    </el-form-item>
    <el-form-item label="新增死亡" prop="diedRelative">
        <el-input v-model="dataForm.diedRelative" placeholder="新增死亡"></el-input>
    </el-form-item>
    <el-form-item label="现有确诊" prop="curConfirm">
        <el-input v-model="dataForm.curConfirm" placeholder="现有确诊"></el-input>
    </el-form-item>
    <el-form-item label="累计治愈" prop="crued">
        <el-input v-model="dataForm.crued" placeholder="累计治愈"></el-input>
    </el-form-item>
    <el-form-item label="新增治愈" prop="cruedRelative">
        <el-input v-model="dataForm.cruedRelative" placeholder="新增治愈"></el-input>
    </el-form-item>
    <el-form-item label="城市代号" prop="cityCode">
        <el-input v-model="dataForm.cityCode" placeholder="城市代号"></el-input>
    </el-form-item>
    <el-form-item label="行政区编码" prop="administrativeCode">
        <el-input v-model="dataForm.administrativeCode" placeholder="行政区编码"></el-input>
    </el-form-item>
    <el-form-item label="唯一标识" prop="mark">
        <el-input v-model="dataForm.mark" placeholder="唯一标识"></el-input>
    </el-form-item>
    <el-form-item label="更新时间" prop="updateTime" v-if="dataForm.id">
        <el-input v-model="dataForm.updateTime" placeholder="更新时间" disabled></el-input>
    </el-form-item>
    <el-form-item label="创建时间" prop="createTime" v-if="dataForm.id">
        <el-input v-model="dataForm.createTime" placeholder="创建时间" disabled></el-input>
    </el-form-item>
    <el-form-item label="创建人" prop="createBy" v-if="dataForm.id">
        <el-input v-model="dataForm.createBy" placeholder="创建人" disabled></el-input>
    </el-form-item>
    <el-form-item label="更新人" prop="updateBy" v-if="dataForm.id">
        <el-input v-model="dataForm.updateBy" placeholder="更新人" disabled></el-input>
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
          createBy: '',
          updateBy: '',
        },
        dataRule: {
          pro: [
            { required: true, message: '省份不能为空', trigger: 'blur' }
          ],

          city: [
            { required: true, message: '城市不能为空', trigger: 'blur' }
          ],

          nativeRelative: [
            { required: true, message: '本土新增不能为空', trigger: 'blur' }
          ],

          asymptomatic: [
            { required: true, message: '累计无症状不能为空', trigger: 'blur' }
          ],

          asymptomaticRelative: [
            { required: true, message: '新增无症状不能为空', trigger: 'blur' }
          ],

          confirmed: [
            { required: true, message: '累计确诊不能为空', trigger: 'blur' }
          ],

          confirmedRelative: [
            { required: true, message: '新增确诊不能为空', trigger: 'blur' }
          ],

          died: [
            { required: true, message: '累计死亡不能为空', trigger: 'blur' }
          ],

          diedRelative: [
            { required: true, message: '新增死亡不能为空', trigger: 'blur' }
          ],

          curConfirm: [
            { required: true, message: '现有确诊不能为空', trigger: 'blur' }
          ],

          crued: [
            { required: true, message: '累计治愈不能为空', trigger: 'blur' }
          ],

          cruedRelative: [
            { required: true, message: '新增治愈不能为空', trigger: 'blur' }
          ],

          cityCode: [
            { required: true, message: '城市代号不能为空', trigger: 'blur' }
          ],

          administrativeCode: [
            { required: true, message: '行政区编码不能为空', trigger: 'blur' }
          ],

          mark: [
            { required: true, message: '唯一标识不能为空', trigger: 'blur' }
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
