import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import "../Tableau.css";

import axios from "axios";
import { Formik } from "formik";
import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory, { Type } from "react-bootstrap-table2-editor";
import filterFactory, {
  Comparator,
  numberFilter,
  selectFilter,
  textFilter,
} from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import { BsTrashFill } from "react-icons/bs";
import * as yup from "yup";

export default class MainArmor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.schema = yup.object().shape({
      name: yup
        .string()
        .min(5, "*At least 5 characters")
        .required("*Name is required"),
      type: yup.string().required("*Type is required"),
      defense: yup
        .number()
        .integer("*Must be entire")
        .min(0, "*Must be >= 0")
        .required("*Defense is required"),
      physical: yup
        .number()
        .integer("*Must be entire")
        .min(-100, "*Must be >= -100")
        .max(100, "*Must be <= 100")
        .required("*Physical is required"),
      ether: yup
        .number()
        .integer("*Must be entire")
        .min(-100, "*Must be >= -100")
        .max(100, "*Must be <= 100")
        .required("*Ether is required"),
      fire: yup
        .number()
        .integer("*Must be entire")
        .min(-100, "*Must be >= -100")
        .max(100, "*Must be <= 100")
        .required("*Fire is required"),
      electric: yup
        .number()
        .integer("*Must be entire")
        .min(-100, "*Must be >= -100")
        .max(100, "*Must be <= 100")
        .required("*Electrical is required"),
      beam: yup
        .number()
        .integer("*Must be entire")
        .min(-100, "*Must be >= -100")
        .max(100, "*Must be <= 100")
        .required("*Beam is required"),
      gravity: yup
        .number()
        .integer("*Must be entire")
        .min(-100, "*Must be >= -100")
        .max(100, "*Must be <= 100")
        .required("*Gravity is required"),
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("/armors").then((response) => {
      this.setState({
        data: response.data["hydra:member"],
      });
    });
  };

  postItem = (body) => {
    axios.post("/armors", body).then((response) => {
      this.getData();
    });
  };

  patchItem = (row) => {
    let body = {
      name: row.name,
      type: row.type,
      defense: parseInt(row.defense),
      physical: parseInt(row.physical),
      ether: parseInt(row.ether),
      fire: parseInt(row.fire),
      electric: parseInt(row.electric),
      beam: parseInt(row.beam),
      gravity: parseInt(row.gravity),
    };
    axios.put("/armors/" + row.id, body).then((response) => {
      this.getData();
    });
  };

  removeItem = (row) => {
    axios.delete("/armors/" + row.id).then((response) => {
      this.getData();
    });
  };

  render() {
    const selectTypeArmor = [
      { value: "Head", label: "Head" },
      { value: "Torso", label: "Torso" },
      { value: "Left Arm", label: "Left Arm" },
      { value: "Right Arm", label: "Right Arm" },
      { value: "Legs", label: "Legs" },
    ];
    const columns = [
      //id
      {
        dataField: "id",
        text: "Armor Id",
        hidden: true,
      },
      //name
      {
        dataField: "name",
        text: "Name",
        sort: true,
        //filtre
        filter: textFilter({ placeholder: "Search an armor" }),
        //edit
        type: "string",
      },
      //type
      {
        dataField: "type",
        text: "Type",
        sort: true,
        //filtre
        formatter: (cell) =>
          selectTypeArmor.find((opt) => opt.value === cell).label,
        filter: selectFilter({
          placeholder: "Select type of armor",
          options: selectTypeArmor,
        }),
        //edit
        type: "string",
        editor: {
          type: Type.SELECT,
          options: [
            {
              value: "Head",
              label: "Head",
            },
            {
              value: "Torso",
              label: "Torso",
            },
            {
              value: "Left Arm",
              label: "Left Arm",
            },
            {
              value: "Right Arm",
              label: "Right Arm",
            },
            {
              value: "Legs",
              label: "Legs",
            },
          ],
        },
      },
      //def
      {
        dataField: "defense",
        text: "Defense",
        sort: true,
        //filtre
        filter: numberFilter({
          placeholder: "Search >=",
          withoutEmptyComparatorOption: true,
          defaultValue: {
            comparator: Comparator.GE,
          },
        }),
        //edit
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue) || newValue === "") {
            return {
              valid: false,
              message: "Should be a numerical value",
            };
          }
          if (newValue < 0) {
            return {
              valid: false,
              message: "Should be >= 0",
            };
          }
          return true;
        },
        //style
        align: "right",
      },
      //phys
      {
        dataField: "physical",
        text: "Physical",
        sort: true,
        //filtre
        filter: numberFilter({
          placeholder: "Search >=",
          withoutEmptyComparatorOption: true,
          defaultValue: {
            comparator: Comparator.GE,
          },
        }),
        //edit
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue) || newValue === "") {
            return {
              valid: false,
              message: "Should be a numerical value",
            };
          }
          if (newValue > 100 || newValue < -100) {
            return {
              valid: false,
              message: "Shoulde be between -100 and 100",
            };
          }
          return true;
        },
        //style
        align: "right",
      },
      //ether
      {
        dataField: "ether",
        text: "Ether",
        sort: true,
        //filtre
        filter: numberFilter({
          placeholder: "Search >=",
          withoutEmptyComparatorOption: true,
          defaultValue: {
            comparator: Comparator.GE,
          },
        }),
        //edit
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue) || newValue === "") {
            return {
              valid: false,
              message: "Should be a numerical value",
            };
          }
          if (newValue > 100 || newValue < -100) {
            return {
              valid: false,
              message: "Shoulde be between -100 and 100",
            };
          }
          return true;
        },
        //style
        align: "right",
      },
      //fire
      {
        dataField: "fire",
        text: "Fire",
        sort: true,
        //filtre
        filter: numberFilter({
          placeholder: "Search >=",
          withoutEmptyComparatorOption: true,
          defaultValue: {
            comparator: Comparator.GE,
          },
        }),
        //edit
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue) || newValue === "") {
            return {
              valid: false,
              message: "Should be a numerical value",
            };
          }
          if (newValue > 100 || newValue < -100) {
            return {
              valid: false,
              message: "Shoulde be between -100 and 100",
            };
          }
          return true;
        },
        //style
        align: "right",
      },
      //electric
      {
        dataField: "electric",
        text: "Electric",
        sort: true,
        //filtre
        filter: numberFilter({
          placeholder: "Search >=",
          withoutEmptyComparatorOption: true,
          defaultValue: {
            comparator: Comparator.GE,
          },
        }),
        //edit
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue) || newValue === "") {
            return {
              valid: false,
              message: "Should be a numerical value",
            };
          }
          if (newValue > 100 || newValue < -100) {
            return {
              valid: false,
              message: "Shoulde be between -100 and 100",
            };
          }
          return true;
        },
        //style
        align: "right",
      },
      //beam
      {
        dataField: "beam",
        text: "Beam",
        sort: true,
        //filtre
        filter: numberFilter({
          placeholder: "Search >=",
          withoutEmptyComparatorOption: true,
          defaultValue: {
            comparator: Comparator.GE,
          },
        }),
        //edit
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue) || newValue === "") {
            return {
              valid: false,
              message: "Should be a numerical value",
            };
          }
          if (newValue > 100 || newValue < -100) {
            return {
              valid: false,
              message: "Shoulde be between -100 and 100",
            };
          }
          return true;
        },
        //style
        align: "right",
      },
      //gravity
      {
        dataField: "gravity",
        text: "Gravity",
        sort: true,
        //filtre
        filter: numberFilter({
          placeholder: "Search >=",
          withoutEmptyComparatorOption: true,
          defaultValue: {
            comparator: Comparator.GE,
          },
        }),
        //edit
        type: "number",
        validator: (newValue, row, column) => {
          if (isNaN(newValue) || newValue === "") {
            return {
              valid: false,
              message: "Should be a numerical value",
            };
          }
          if (newValue > 100 || newValue < -100) {
            return {
              valid: false,
              message: "Shoulde be between -100 and 100",
            };
          }
          return true;
        },
        //style
        align: "right",
      },
      //action
      {
        dataField: "action",
        text: "Action",
        editable: false,
        formatter: (cell, row, rowIndex, formatExtraData) => {
          return (
            <Button
              onClick={() => {
                this.removeItem(row);
              }}
            >
              <BsTrashFill />
            </Button>
          );
        },
        align: "right",
      },
    ];
    const defaultSorted = [{ dataField: "defense", order: "asc" }];
    return (
      <Container fluid>
        <h1>Armor</h1>
        <BootstrapTable
          keyField="id"
          data={this.state.data}
          columns={columns}
          bootstrap4
          condensed
          hover
          noDataIndication="Is empty"
          defaultSorted={defaultSorted}
          pagination={paginationFactory({
            sizePerPageList: [20, 100, this.state.data.length],
            firstPageText: "<<",
            lastPageText: ">>",
            prePageText: "<",
            nextPageText: ">",
            showTotal: true,
          })}
          filter={filterFactory()}
          filterPosition="top"
          cellEdit={cellEditFactory({
            mode: "dbclick",
            blurToSave: true,
            autoSelectText: true,
            afterSaveCell: (oldValue, newValue, row, column) => {
              this.patchItem(row);
            },
          })}
        />

        <h3 style={{ marginTop: "50px" }}>Add a new armor</h3>

        <Formik
          initialValues={{
            name: "",
            type: "Head",
            defense: "",
            physical: "",
            ether: "",
            fire: "",
            electric: "",
            beam: "",
            gravity: "",
          }}
          validationSchema={this.schema}
          onSubmit={(formValues, actions) => {
            console.log("submit", formValues);
            actions.setSubmitting(true);
            this.postItem(formValues);
            actions.resetForm({
              values: {
                name: "",
                type: "Head",
                defense: "",
                physical: "",
                ether: "",
                fire: "",
                electric: "",
                beam: "",
                gravity: "",
              },
            });
            actions.setSubmitting(false);
          }}
        >
          {(formik) => (
            <Form noValidate onSubmit={formik.handleSubmit}>
              <Row>
                <Col sm={8}>
                  <Form.Group controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      name="name"
                      type="text"
                      placeholder="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.name && !formik.errors.name}
                      isInvalid={formik.errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formType">
                    <Form.Label>Type</Form.Label>
                    <Form.Control
                      name="type"
                      as="select"
                      value={formik.values.type}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.type && !formik.errors.type}
                      isInvalid={formik.errors.type}
                    >
                      <option value="Head">Head</option>
                      <option value="Torso">Torso</option>
                      <option value="Left Arm">Left Arm</option>
                      <option value="Right Arm">Right Arm</option>
                      <option value="Legs">Legs</option>
                    </Form.Control>
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.type}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formDefense">
                    <Form.Label>Defense</Form.Label>
                    <Form.Control
                      name="defense"
                      type="number"
                      placeholder="0"
                      min={0}
                      value={formik.values.defense}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.defense && !formik.errors.defense}
                      isInvalid={formik.errors.defense}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.defense}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="formPhysical">
                    <Form.Label>Physical</Form.Label>
                    <Form.Control
                      name="physical"
                      type="number"
                      placeholder="0"
                      min={-100}
                      max={100}
                      value={formik.values.physical}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={
                        formik.touched.physical && !formik.errors.physical
                      }
                      isInvalid={formik.errors.physical}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.physical}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formEther">
                    <Form.Label>Ether</Form.Label>
                    <Form.Control
                      name="ether"
                      type="number"
                      placeholder="0"
                      min={-100}
                      max={100}
                      value={formik.values.ether}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.ether && !formik.errors.ether}
                      isInvalid={formik.errors.ether}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.ether}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formFire">
                    <Form.Label>Fire</Form.Label>
                    <Form.Control
                      name="fire"
                      type="number"
                      placeholder="0"
                      min={-100}
                      max={100}
                      value={formik.values.fire}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.fire && !formik.errors.fire}
                      isInvalid={formik.errors.fire}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.fire}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formElectric">
                    <Form.Label>Electric</Form.Label>
                    <Form.Control
                      name="electric"
                      type="number"
                      placeholder="0"
                      min={-100}
                      max={100}
                      value={formik.values.electric}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={
                        formik.touched.electric && !formik.errors.electric
                      }
                      isInvalid={formik.errors.electric}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.electric}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formBeam">
                    <Form.Label>Beam</Form.Label>
                    <Form.Control
                      name="beam"
                      type="number"
                      placeholder="0"
                      min={-100}
                      max={100}
                      value={formik.values.beam}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.beam && !formik.errors.beam}
                      isInvalid={formik.errors.beam}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.beam}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formGravity">
                    <Form.Label>Gravity</Form.Label>
                    <Form.Control
                      name="gravity"
                      type="number"
                      placeholder="0"
                      min={-100}
                      max={100}
                      value={formik.values.gravity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      isValid={formik.touched.gravity && !formik.errors.gravity}
                      isInvalid={formik.errors.gravity}
                    />
                    <Form.Control.Feedback type="invalid">
                      {formik.errors.gravity}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Button type="submit" disabled={formik.isSubmitting}>
                    Add
                  </Button>
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    );
  }
}
