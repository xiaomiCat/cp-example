module.exports = {
  "errno": 0,
  "data": {
    pageMark: 'reCheck',
    showButton: true,
    request: {
      api: '/api/audit/edit/data',
      method: 'get',
      apiParams: ['all']
    },
    submitApi: {
      api: '/api/audit/edit/submit',
      method: 'get'
    },
    pageGoBackUrl: '',
    // 表单验证通过后的行为
    formVaildAction: 'showDialog',
    tableList: [
      {
        title: '用户上传信息',
        type: 'table',
        sectionKey: 'baseInfo',
        needClearData: true,
        changeFormStyle: true,
        showTableHeader: false,
        table: {
          columns: [
            {
              title: '项',
              key: 'label',
              width: 150
            },
            {
              title: '值',
              key: 'value',
              width: 'auto'
            },
            {
              title: '操作',
              slot: 'action',
              width: 'auto',
              formFields: [
                {
                  type: 'Radio',
                  model: 'auditStatus',
                  options: [
                    {
                      label: '通过',
                      value: '1'
                    },
                    {
                      label: '驳回',
                      value: '2'
                    }
                  ],
                  rules: [
                    {
                      required: true,
                      message: '请选择审核结论'
                    }
                  ]
                },
                {
                  type: 'Select',
                  model: 'reason',
                  placeholder: '请选择原因',
                  options: [
                    {
                      label: '此部分信息填写有误，请重新填写',
                      value: '此部分信息填写有误，请重新填写'
                    },
                    {
                      label: '此部分信息填写不完整，请重新填写',
                      value: '此部分信息填写不完整，请重新填写'
                    },
                    {
                      label: '此部分信息填写与所上传图片不符，请重新填写',
                      value: '此部分信息填写与所上传图片不符，请重新填写'
                    },
                    {
                      label: '其他原因，手动输入',
                      value: '4'
                    }
                  ],
                  rules: [
                    {
                      required: true,
                      message: '请选择原因'
                    }
                  ],
                  showOn: {
                    auditStatus: [
                      {
                        type: 'enum',
                        enum: ['2']
                      },
                      {
                        required: true
                      }
                    ]
                  }
                },
                {
                  type: 'Input',
                  subtype: 'textarea',
                  model: 'reasonDesc',
                  placeholder: '请输入原因',
                  rules: [
                    {
                      required: true,
                      message: '请输入原因'
                    }
                  ],
                  showOn: {
                    reason: [
                      {
                        type: 'enum',
                        enum: ['4']
                      },
                      {
                        required: true
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      {
        title: '用户案件描述',
        type: 'table',
        sectionKey: 'caseDes',
        needClearData: true,
        changeFormStyle: false,
        showTableHeader: false,
        table: {
          columns: [
            {
              title: '项',
              key: 'label',
              width: 150
            },
            {
              title: '值',
              key: 'value',
              width: 'auto'
            },
            {
              title: '操作',
              slot: 'action',
              width: 'auto',
              formFields: [
                {
                  type: 'Radio',
                  model: 'auditStatus',
                  options: [
                    {
                      label: '通过',
                      value: '1'
                    },
                    {
                      label: '驳回',
                      value: '2'
                    }
                  ],
                  rules: [
                    {
                      required: true,
                      message: '请选择审核结论'
                    }
                  ]
                },
                {
                  type: 'Select',
                  model: 'reason',
                  placeholder: '请选择原因',
                  options: [
                    {
                      label: '此部分信息填写有误，请重新填写',
                      value: '此部分信息填写有误，请重新填写'
                    },
                    {
                      label: '此部分信息填写不完整，请重新填写',
                      value: '此部分信息填写不完整，请重新填写'
                    },
                    {
                      label: '此部分信息填写与所上传图片不符，请重新填写',
                      value: '此部分信息填写与所上传图片不符，请重新填写'
                    },
                    {
                      label: '其他原因，手动输入',
                      value: '4'
                    }
                  ],
                  rules: [
                    {
                      required: true,
                      message: '请选择原因'
                    }
                  ],
                  showOn: {
                    auditStatus: [
                      {
                        type: 'enum',
                        enum: ['2']
                      },
                      {
                        required: true
                      }
                    ]
                  }
                },
                {
                  type: 'Input',
                  subtype: 'textarea',
                  model: 'reasonDesc',
                  placeholder: '请输入原因',
                  rules: [
                    {
                      required: true,
                      message: '请输入原因'
                    }
                  ],
                  showOn: {
                    reason: [
                      {
                        type: 'enum',
                        enum: ['4']
                      },
                      {
                        required: true
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      {
        title: '用户更多信息',
        type: 'table',
        sectionKey: 'moreInfo',
        needClearData: true,
        changeFormStyle: false,
        showTableHeader: false,
        table: {
          columns: [
            {
              title: '项',
              key: 'label',
              width: 150
            },
            {
              title: '值',
              key: 'value',
              width: 'auto'
            }
          ]
        }
      },
      {
        title: '用户图片信息',
        type: 'table',
        sectionKey: 'uploadMaterial',
        needClearData: true,
        changeFormStyle: true,
        showTableHeader: false,
        table: {
          columns: [
            {
              title: '项',
              key: 'label',
              width: 150
            },
            {
              title: '图片列表',
              slot: 'value1',
              width: 'auto',
              formFields: [
                {
                  type: 'List',
                  model: 'value',
                  'cardWidth': '120px',
                  'cardHeight': '90px'
                }
              ]
            },
            {
              title: '操作',
              slot: 'action',
              width: 250,
              formFields: [
                {
                  type: 'Radio',
                  model: 'auditStatus',
                  options: [
                    {
                      label: '通过',
                      value: '1'
                    },
                    {
                      label: '驳回',
                      value: '2'
                    }
                  ],
                  rules: [
                    {
                      required: true,
                      message: '请选择审核结论'
                    }
                  ]
                },
                {
                  type: 'Select',
                  model: 'reason',
                  placeholder: '请选择原因',
                  options: [
                    {
                      label: '此项图片上传较模糊，请重新拍摄后上传',
                      value: '此项图片上传较模糊，请重新拍摄后上传'
                    },
                    {
                      label: '此项图片上传不完整，请重新拍摄后上传',
                      value: '此项图片上传不完整，请重新拍摄后上传'
                    },
                    {
                      label: '其他原因，手动输入',
                      value: '3'
                    }
                  ],
                  rules: [
                    {
                      required: true,
                      message: '请选择原因'
                    }
                  ],
                  showOn: {
                    auditStatus: [
                      {
                        type: 'enum',
                        enum: ['2']
                      },
                      {
                        required: true
                      }
                    ]
                  }
                },
                {
                  type: 'Input',
                  subtype: 'textarea',
                  model: 'reasonDesc',
                  placeholder: '请输入原因',
                  rules: [
                    {
                      required: true,
                      message: '请输入原因'
                    }
                  ],
                  showOn: {
                    reason: [
                      {
                        type: 'enum',
                        enum: ['3']
                      },
                      {
                        required: true
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      },
      {
        title: '案件审核结论',
        type: 'table',
        sectionKey: 'CaseReviewConclusion',
        changeFormStyle: false,
        showTableHeader: false,
        table: {
          columns: [
            {
              title: '项',
              key: 'label',
              width: 'auto'
            },
            {
              title: '值',
              key: 'value',
              width: 'auto'
            },
            {
              title: '操作',
              slot: 'action',
              width: 'auto',
              formFields: [
                {
                  type: 'Radio',
                  model: 'auditStatus',
                  options: [
                    {
                      label: '通过',
                      value: '1',
                      disabled: false
                    },
                    {
                      label: '驳回',
                      value: '2',
                      disabled: false
                    },
                    {
                      label: '不通过',
                      value: '3',
                      disabled: false
                    }
                  ],
                  rules: [
                    {
                      required: true,
                      message: '请选择审核结论'
                    }
                  ]
                }
              ]
            }
          ],
          data: [
            {
              key: 'conclusion',
              label: '选择案件审核结论',
              value: '选择「通过」后转到下个审核流程，选择「不通过」后转到终审员，选择「驳回」后转到用户侧补交材料',
              reasonDesc: ''
            }
          ]
        }
      },
      {
        type: 'table',
        changeFormStyle: false,
        showTableHeader: false,
        table: {
          columns: [
            {
              title: '项',
              key: 'label',
              width: 100
            },
            {
              title: '操作',
              slot: 'action',
              width: 'auto',
              formFields: [
                {
                  type: 'Select',
                  label: '',
                  model: 'companyId',
                  options: '/api/audit/edit/company-list',
                  rules: [
                    {
                      required: true,
                      type: 'number',
                      message: '请选择线下调查公司'
                    }
                  ]
                }
              ]
            }
          ],
          data: [
            {
              key: 'companyId',
              label: '选择线下调查公司',
              companyId: ''
            }
          ]
        }
      },
      {
        type: 'table',
        changeFormStyle: false,
        showTableHeader: false,
        table: {
          columns: [
            {
              title: '项',
              key: 'label',
              width: 100
            },
            {
              title: '操作',
              slot: 'action',
              width: 'auto',
              formFields: [
                {
                  type: 'Input',
                  subtype: 'textarea',
                  model: 'checkConsolusion',
                  placeholder: '请输入最终审核结论',
                  rules: [
                    {
                      required: true,
                      message: '请输入最终审核结论'
                    },
                    {
                      type: 'string',
                      min: 20,
                      max: 500,
                      message: '字数要求在20-500字之间',
                      trigger: 'blur'
                    }
                  ]
                }
              ]
            }
          ],
          data: [
            {
              key: 'checkConsolusion',
              label: '填写审核结论',
              checkConsolusion: ''
            }
          ]
        }
      }
    ],
    dialogs: {
      "title": "提交",
      "content": "提交后，案件将转入下一流程"
    }
  },
  "msg": "ok"
}
    