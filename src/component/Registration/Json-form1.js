import React from 'react'

const data = {
  "form": {
    "sections":[
      {
        "order":1,
        "section_title": "Bsic Information",
        "fields": [
          {
            "name":"firstName",
            "required": true,
            "data_type":"Integer",
            "html_element":"textbox"
          },
          {
            "name":"lasttName",
            "required": true,
            "data_type":"Integer",
            "html_element":"textbox"
          },
          {
            "name":"email",
            "label":"Email",
            "required": true,
            "hidden": false,
            "data_type":"String",
            "html_element":"email"
          },
          {
            "name":"number",
            "label":"Number",
            "required": true,
            "data_type":"number",
            "html_element":"textbox"
          },
          {
            "name":"lasttName",
            "required": true,
            "data_type":"Integer",
            "html_element":"textbox"
          },

        ]
      }

    ]
  }
}

export default function Jsonfrom1() {
  return(
    <div>
      <form>
        {
          data.form.sections.map(formData => {
            return(
              <div>
                <h1>{formData.section_title}</h1>
                {
                  formData.fields.map(inputData => {
                    return(
                      <div>
                        <label>{inputData.label}</label>
                        <input type ={inputData.html_element} />
                      </div>
                    )
                  })
                }
              </div>
            )
          })
        }
      </form>
    </div>
  )
} 