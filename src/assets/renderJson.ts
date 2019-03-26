export const render = {
    "components": [
        {
            "key": "content2",
            "label": "Content",
            "className": "",
            "refreshOnChange": false,
            "type": "content",
            "input": false,
            "tableView": true,
            "html": "<p style=\"text-align:center;\"><span class=\"text-big\"><strong>PromPtmd&nbsp;</strong></span><br><span class=\"text-big\"><strong>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Urgent care Center</strong></span></p>"
        },
        {
            "key": "Name",
            "label": "Name",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Date",
            "label": "Date",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "format": "yyyy-MM-dd",
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
                "format": "yyyy-MM-dd",
                "defaultDate": "",
                "hourIncrement": 1,
                "minuteIncrement": 1,
                "time_24hr": false,
                "minDate": null,
                "maxDate": null
            }
        },
        {
            "key": "Dob",
            "label": "Dob",
            "hideInputLabels": false,
            "inputsLabelPosition": "top",
            "fields": {
                "day": {
                    "hide": false,
                    "type": "number"
                },
                "month": {
                    "hide": false,
                    "type": "select"
                },
                "year": {
                    "hide": false,
                    "type": "number"
                }
            },
            "useLocaleSettings": false,
            "type": "day",
            "input": true,
            "tableView": true,
            "maxDate": "",
            "minDate": ""
        },
        {
            "key": "Symptoms",
            "label": "What are the symptoms",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "MedicalCondition",
            "label": "Any Medical Condition?",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "SymptomsTime",
            "label": "How Long",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Medication",
            "label": "Medication(Prescription)",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Allergies",
            "label": "Allergies to anything/reaction",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "SurgicalHistory",
            "label": "Surgical History & approx yr",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "FamilyHistory",
            "label": "Family History(immediate):",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Travel",
            "label": "Have you travel outside the U.S in past 30 days?(Where)",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "content3",
            "label": "Content",
            "className": "",
            "refreshOnChange": false,
            "type": "content",
            "input": false,
            "tableView": true,
            "html": "<p style=\"text-align:center;\"><strong>Social History</strong></p>"
        },
        {
            "key": "Smoke",
            "label": "Smoke: Yes Or No?",
            "optionsLabelPosition": "right",
            "values": [
                {
                    "label": "yes",
                    "value": "yes",
                    "shortcut": ""
                },
                {
                    "label": "No",
                    "value": "no",
                    "shortcut": ""
                }
            ],
            "defaultValue": "",
            "inline": false,
            "type": "radio",
            "input": true,
            "tableView": true
        },
        {
            "key": "E-Gic",
            "label": "E-Gic:yes or no?",
            "optionsLabelPosition": "right",
            "values": [
                {
                    "label": "Yes",
                    "value": "yes",
                    "shortcut": ""
                },
                {
                    "label": "No",
                    "value": "no",
                    "shortcut": ""
                }
            ],
            "defaultValue": "",
            "inline": false,
            "type": "radio",
            "input": true,
            "tableView": true
        },
        {
            "key": "Drug",
            "label": "Drug:Yes or No?",
            "optionsLabelPosition": "right",
            "values": [
                {
                    "label": "Yes",
                    "value": "yes",
                    "shortcut": ""
                },
                {
                    "label": "No",
                    "value": "no",
                    "shortcut": ""
                }
            ],
            "defaultValue": "",
            "inline": false,
            "type": "radio",
            "input": true,
            "tableView": true
        },
        {
            "key": "DrugType",
            "label": "Please List Drug Type",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "isUploadEnabled": false,
            "type": "textarea",
            "input": true,
            "tableView": true,
            "rows": 2
        },
        {
            "key": "Drink",
            "label": "Drink: Yes or No",
            "optionsLabelPosition": "right",
            "values": [
                {
                    "label": "Yes",
                    "value": "yes",
                    "shortcut": ""
                },
                {
                    "label": "No",
                    "value": "no",
                    "shortcut": ""
                }
            ],
            "defaultValue": "",
            "inline": false,
            "type": "radio",
            "input": true,
            "tableView": true
        },
        {
            "key": "caffeine",
            "label": "Caffeine: Yes Or No",
            "optionsLabelPosition": "right",
            "values": [
                {
                    "label": "Yes",
                    "value": "yes",
                    "shortcut": ""
                },
                {
                    "label": "No",
                    "value": "no",
                    "shortcut": ""
                }
            ],
            "defaultValue": "",
            "inline": false,
            "type": "radio",
            "input": true,
            "tableView": true
        },
        {
            "key": "Exercise",
            "label": "Exercise : Yes Or No?",
            "optionsLabelPosition": "right",
            "values": [
                {
                    "label": "Yes",
                    "value": "yes",
                    "shortcut": ""
                },
                {
                    "label": "No",
                    "value": "no",
                    "shortcut": ""
                }
            ],
            "defaultValue": "",
            "inline": false,
            "type": "radio",
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
        },
        {
            "key": "content4",
            "label": "Content",
            "className": "",
            "refreshOnChange": false,
            "type": "content",
            "input": false,
            "tableView": true,
            "html": "<p style=\"text-align:center;\"><strong>Vital</strong></p>"
        },
        {
            "key": "Height",
            "label": "Height",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Weight",
            "label": "Weight",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Menstural",
            "label": "Last Menstural Period",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "content5",
            "label": "Content",
            "className": "",
            "refreshOnChange": false,
            "type": "content",
            "input": false,
            "tableView": true,
            "html": "<p style=\"text-align:center;\"><strong>(Office Use Only)</strong></p>"
        },
        {
            "key": "BP",
            "label": "BP",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Temp",
            "label": "Temp",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "O2",
            "label": "O2",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Pulse",
            "label": "Pulse",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "PeakFlow",
            "label": "PeakFlow",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "content6",
            "label": "Content",
            "className": "",
            "refreshOnChange": false,
            "type": "content",
            "input": false,
            "tableView": true,
            "html": "<p style=\"text-align:center;\">Vision</p>"
        },
        {
            "key": "R",
            "label": "R",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "L",
            "label": "L",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },
        {
            "key": "Both",
            "label": "Both",
            "background": "#ffffff",
            "textColor": "#000000",
            "fontStyle": "normal",
            "defaultValue": "",
            "type": "textfield",
            "input": true,
            "tableView": true
        },{
            "label": "Submit",
            "state": "",
            "theme": "primary",
            "shortcut": "",
            "disableOnInvalid": true,
            "mask": false,
            "tableView": true,
            "alwaysEnabled": false,
            "type": "button",
            "key": "submit",
            "input": true
        }

    ]
}
