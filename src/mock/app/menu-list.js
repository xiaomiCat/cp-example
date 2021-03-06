module.exports = {
  "errno": 0,
  "data": [
    {
      "label": "Data",
      "path": "/data",
      "submenu": [
        {
          "label": "General",
          "path": "/data/general",
          "template": "template-data-report"
        },
        {
          "label": "Real-time",
          "path": "/data/real-time",
          "template": "template-data-report"
        }
      ]
    },
    {
      "label": "Curd",
      "path": "/curd",
      "submenu": [
        {
          "label": "User Management",
          "path": "/curd/user",
          "template": "template-curd"
        },
        {
          "label": "Post Management",
          "path": "/curd/post",
          "template": "template-curd"
        }
      ]
    },
    {
      "label": "Audit",
      "path": "/audit",
      "submenu": [
        {
          "label": "Total Config",
          "path": "/audit/total",
          "template": "template-audit"
        },
        {
          "label": "Audit Edit",
          "path": "/audit/edit",
          "template": "template-audit"
        }
      ]
    }
  ]
}
