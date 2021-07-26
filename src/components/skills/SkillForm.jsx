import React from "react";
import {Formik, Form, Field, FieldArray} from "formik";
import {Card, Row, Col, FormControl, Button} from "react-bootstrap";
import {props} from "bluebird";

const getDescString = (num) => {
  let result;
  switch (num) {
    case 0:
      result = "IS GREAT AT...";
      break;
    case 1:
      result = "IS GOOD AT...";
      break;
    case 2:
      result = "IS BAD AT...";
      break;
    case 3:
      result = "IS HORRIBLE AT...";
      break;
    default:
      result = "SOMETHING BROKE...";
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
        let skillObj = {skills, player:props.id};
        return props.submit(skillObj);
      }}
      render={({values}) => (
        <Form style={{padding:'5%',border:'2px solid #8A959E',borderRadius:'5px'}}>
          <label>{props.name.toUpperCase()}</label>
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
                        style={{margin: "1%",fontFamily:'none'}}
                      />
                    </div>
                  ))
                ) : (
                  <h5>YOU SHOULDN'T BE HERE</h5>
                )}
                <div>
                  <Button type="submit" size="sm" variant="dark">
                    SUBMIT {props.name.toUpperCase()}
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
