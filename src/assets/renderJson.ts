export const render = {
    "components": [
        {
            "key": "textArea",
            "label": "Text Area",
            "background": "#ffffff",
            "textColor": "#000000",
            "defaultValue": "",
            "isUploadEnabled": false,
            "type": "textarea",
            "input": true,
            "tableView": true
        },
        {
            "key": "dateTime2",
            "label": "Date / Time",
            "background": "#ffffff",
            "textColor": "#000000",
            "defaultValue": "",
            "type": "datetime",
            "input": true,
            "suffix": true,
            "tableView": true,
            "widget": {
                "type": "calendar",
                "displayInTimezone": "viewer",
                "language": "en",
                "useLocaleSettings": false,
                "allowInput": true,
                "mode": "single",
                "enableTime": true,
                "noCalendar": false,
                "format": "yyyy-MM-dd hh:mm a",
                "defaultDate": "",
                "hourIncrement": 1,
                "minuteIncrement": 1,
                "time_24hr": false,
                "minDate": null,
                "maxDate": null
            }
        },
        {
            "key": "email2",
            "label": "Email",
            "background": "#ffffff",
            "textColor": "#000000",
            "defaultValue": "",
            "type": "email",
            "input": true,
            "tableView": true
        },
        {
            "key": "signature2",
            "label": "Signature",
            "background": "#ffffff",
            "textColor": "#000000",
            "defaultValue": "",
            "type": "signature",
            "input": true,
            "tableView": true
        },
        {
            "key": "address2",
            "label": "Address",
            "background": "#ffffff",
            "textColor": "#000000",
            "placeholder": "53",
            "defaultValue": "",
            "description": "34",
            "tooltip": "43",
            "errorLabel": "34",
            "tabindex": "43",
            "map": {
                "region": "443",
                "key": ""
            },
            "type": "address",
            "input": true,
            "tableView": true
        },
        {
            "key": "checkbox2",
            "label": "Checkbox",
            "background": "#ffffff",
            "textColor": "#000000",
            "placeholder": "werwer",
            "defaultValue": false,
            "description": "423",
            "shortcut": "",
            "type": "checkbox",
            "input": true,
            "tableView": true
        },
        {
            "key": "select22",
            "label": "Select",
            "data": {
                "values": [
                    {
                        "label": "w",
                        "value": "w"
                    },
                    {
                        "label": "w",
                        "value": "w"
                    }
                ]
            },
            "valueProperty": "value",
            "background": "#ffffff",
            "selectThreshold": 0.3,
            "textColor": "#000000",
            "defaultValue": "",
            "type": "select",
            "input": true,
            "tableView": true
        },
        {
            "key": "radio2",
            "label": "Radio",
            "background": "#ffffff",
            "optionsLabelPosition": "right",
            "values": [
                {
                    "label": "234",
                    "value": "234",
                    "shortcut": ""
                },
                {
                    "label": "432",
                    "value": "432",
                    "shortcut": ""
                }
            ],
            "textColor": "#000000",
            "defaultValue": "",
            "inline": false,
            "type": "radio",
            "input": true,
            "tableView": true
        },
        {
            "key": "textArea",
            "label": "Text Area",
            "background": "#ffffff",
            "textColor": "#000000",
            "defaultValue": "",
            "isUploadEnabled": false,
            "type": "textarea",
            "input": true,
            "tableView": true
        },
        {
            "type": "button",
            "label": "Submit",
            "key": "submit",
            "disableOnInvalid": true,
            "theme": "primary",
            "input": true,
            "tableView": true
        }
    ]
}
