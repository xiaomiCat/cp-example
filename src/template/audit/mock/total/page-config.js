module.exports = {
  "errno": 0,
  "data": {
    "pageMark": "total",
    "showButton": false,
    "request": {
      "api": '/api/audit/total/data',
      "method": 'get',
      "apiParams": ['all']
    },
    "pageGoBackUrl": '',
    "tableList": [
      {
        "title": '用户上传信息',
        "type": 'table',
        "sectionKey": 'baseInfo',
        "needClearData": true,
        "needShowDownLoadButton": false,
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '值',
              "key": 'value',
              "width": 'auto'
            }
          ]
        }
      },
      {
        "title": '用户案件描述',
        "type": 'table',
        "needShowDownLoadButton": false,
        "needClearData": true,
        "sectionKey": 'caseDes',
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '值',
              "key": 'value',
              "width": 'auto'
            }
          ]
        }
      },
      {
        "title": '用户更多信息',
        "type": 'table',
        "needShowDownLoadButton": false,
        "needClearData": true,
        "sectionKey": 'moreInfo',
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '值',
              "key": 'value',
              "width": 'auto'
            }
          ]
        }
      },
      {
        "title": '用户图片信息',
        "type": 'table',
        "needShowDownLoadButton": true,
        "needClearData": true,
        "sectionKey": 'uploadMaterial',
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '图片列表',
              "slot": 'value1',
              "width": 'auto',
              "formFields": [
                {
                  "type": 'List',
                  "model": 'value',
                  'cardWidth': '120px',
                  'cardHeight': '90px'
                }
              ]
            }
          ]
        }
      },
      {
        "title": '材料初审建议',
        "type": 'table',
        "needShowDownLoadButton": false,
        "needClearData": true,
        "sectionKey": 'firstComment',
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '值',
              "key": 'value',
              "width": 'auto'
            }
          ]
        }
      },
      {
        "title": '材料复审建议',
        "type": 'table',
        "needShowDownLoadButton": false,
        "needClearData": true,
        "sectionKey": 'secondComment',
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '值',
              "key": 'value',
              "width": 'auto'
            }
          ]
        }
      },
      {
        "title": '线下调查建议',
        "type": 'table',
        "needShowDownLoadButton": false,
        "needClearData": true,
        "sectionKey": 'offlineComment',
        "hideFormKey": 'status',
        // 需要渲染成html的key 在页面中单独处理样式
        "htmlKey": 'underlineDoc',
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '值',
              "width": 'auto',
              "slot": 'html',
              "htmlKey": '调查材料'
            }
          ]
        }
      },
      {
        "title": '材料终审建议',
        "type": 'table',
        "needShowDownLoadButton": false,
        "needClearData": true,
        "sectionKey": 'checkConsolusion',
        "showTableHeader": false,
        "table": {
          "columns": [
            {
              "title": '项',
              "key": 'label',
              "width": 150
            },
            {
              "title": '值',
              "key": 'value',
              "width": 'auto'
            }
          ]
        }
      }
    ]
  },
  "msg": "ok"
}
  