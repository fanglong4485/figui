var baseUrl = 'https://cli.avuejs.com/api/area'

export const tableOption ={
  "align": "center",
  "index": true,
  "border": true,
  searchSpan: 8,
  "column": [
    {"prop": "pro","label": "省份", "type": "radio",  "addDisplay": false, "editDisabled": false,
      props: {label: 'label',value: 'value'},
      cascader: ['city'],
      search: true,
      dicUrl: `/admin/dict/type/province_code`,
      dataType: 'string/number', // 注意配置后台返回value的类型，特别注意类型不对无法渲染
      rules: [
        {
          required: true,
          message: '请选择省份',
          trigger: 'blur'
        }
      ]
    },
    {"prop": "city", "type": "select", "label": "城市", "addDisplay": false, "editDisabled": false,search:true,
      props: {
        label: 'label',
        value: 'value'
      },
      //TODO 这个接口应该调用pig admin服务的字典接口。
      dicUrl: `/datas/sadministrativedivisions/{{key}}`,
      dataType: 'string/number', // 注意配置后台返回value的类型，特别注意类型不对无法渲染
      rules: [
        {
          required: true,
          message: '请选择城市',
          trigger: 'blur'
        }
      ]
    },
    {"prop": "nativeRelative", "type": "number", "label": "本土新增", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "asymptomatic", "type": "number", "label": "累计无症状", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "asymptomaticRelative", "type": "number", "label": "新增无症状", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "confirmed", "type": "number", "label": "累计确诊", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "confirmedRelative", "type": "number", "label": "新增确诊", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "died", "type": "number", "label": "累计死亡", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "diedRelative", "type": "number", "label": "新增死亡", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "curConfirm", "type": "number", "label": "现有确诊", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "crued", "type": "number", "label": "累计治愈", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "cruedRelative", "type": "number", "label": "新增治愈", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "cityCode", "type": "number", "label": "城市代号", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "administrativeCode", "type": "number", "label": "行政区编码", "display": true, "controls": true, "addDisplay": false, "editDisabled": false},
    {"prop": "updateTime", "type": "date", "label": "更新时间", "format": "yyyy-MM-dd", "display": true, "addDisplay": false, "valueFormat": "yyyy-MM-dd", "editDisabled": true},
    {"prop": "createTime", "type": "date", "label": "创建时间", "format": "yyyy-MM-dd", "display": true, "addDisplay": false, "valueFormat": "yyyy-MM-dd", "editDisabled": true},
    {"prop": "createBy", "type": "input", "label": "创建人", "addDisplay": false, "editDisabled": true},
    {"prop": "updateBy", "type": "input", "label": "更新人", "addDisplay": false, "editDisabled": true}
  ],
  "gutter": 0,
  "stripe": true,
  "menuBtn": true,
  "emptyBtn": true,
  "emptyText": "清空",
  "menuAlign": "center",
  "submitBtn": true,
  "indexLabel": "序号",
  "labelWidth": 120,
  "submitText": "提交",
  "labelSuffix": "：",
  "menuPosition": "center",
  "labelPosition": "left",
  "searchMenuSpan": 6
}
