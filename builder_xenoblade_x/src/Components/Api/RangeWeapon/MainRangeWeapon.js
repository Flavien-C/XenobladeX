import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class MainRangeWeapon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listRangeWeapons: [],
    };
  }

  componentDidMount() {
    this.getAllRangeWeapons();
  }

  getAllRangeWeapons = () => {
    axios.get("/range_weapons").then((response) => {
      this.setState({
        listRangeWeapons: response.data["hydra:member"],
      });
    });
  };

  render() {
    return (
      <>
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Attribute</th>
              <th>Attack</th>
              <th>Stability</th>
              <th>Cooldown</th>
              <th>TP Gain</th>
              <th>Amno</th>
            </tr>
          </thead>
          <tbody>
            {this.state.listRangeWeapons.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.attribute}</td>
                  <td>{item.stability}</td>
                  <td>{item.cooldown}</td>
                  <td>{item.tpGain}</td>
                  <td>{item.amno}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}
