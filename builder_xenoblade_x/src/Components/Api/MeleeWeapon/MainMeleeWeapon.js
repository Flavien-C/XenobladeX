import axios from "axios";
import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class MainMeleeWeapon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMeleeWeapons: [],
    };
  }

  componentDidMount() {
    this.getAllMeleeWeapons();
  }

  getAllMeleeWeapons = () => {
    axios.get("/melee_weapons").then((response) => {
      this.setState({
        listMeleeWeapons: response.data["hydra:member"],
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
            </tr>
          </thead>
          <tbody>
            {this.state.listMeleeWeapons.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.type}</td>
                  <td>{item.attribute}</td>
                  <td>{item.stability}</td>
                  <td>{item.cooldown}</td>
                  <td>{item.tpGain}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </>
    );
  }
}
