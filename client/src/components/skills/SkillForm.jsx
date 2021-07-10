import React from "react";
import {Formik, Form, Field, FieldArray} from "formik";
import {Card, Row, Col, FormControl, Button} from "react-bootstrap";
import {props} from "bluebird";

const getDescString = (num) => {
  let result;
  switch (num) {
    case 0:
      result = "is AMAZING at...";
      break;
    case 1:
      result = "is GOOD at...";
      break;
    case 2:
      result = "is BAD at...";
      break;
    case 3:
      result = "is HORRIBLE at...";
      break;
    default:
      result = "Something broke here";
      break;
  }
  return result;
};
export const SkillForm = (props) => (
  <div>
    <Formik
      initialValues={{skills: ["", "", "", ""]}}
      onSubmit={(values) => {
        let skills = values.skills
        let skillObj = {skills, name: props.name};
        console.log(skillObj)
        return props.submit(skillObj);
      }}
      render={({values}) => (
        <Form style={{padding:'5%',border:'2px solid #8A959E',borderRadius:'5px'}}>
          <label>{props.name}</label>
          <FieldArray
            name="values.skills"          
            render={(arrayHelpers) => (
              <div>
                {values.skills && values.skills.length > 0 ? (
                  values.skills.map((skill, index) => (
                    <div key={index}>
                      <Field
                        as={FormControl}
                        placeholder={getDescString(index)}
                        name={`skills[${index}]`}
                        style={{margin: "1%"}}
                      />
                    </div>
                  ))
                ) : (
                  <h5>YOU SHOULDN'T BE HERE</h5>
                )}
                <div>
                  <Button type="submit" size="sm" variant="dark">
                    Submit {props.name}
                  </Button>
                </div>
              </div>
            )}
          />
        </Form>
      )}
    />
  </div>
);
