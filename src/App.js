import React, { Component } from 'react';
import { Form, Select, InputNumber, DatePicker, Switch, Slider, Button } from 'antd';
import ItemsListContainer from './containers/ItemListContainer'

import './App.css';

const { Option } = Select;

class App extends Component {
  render() {
    return (
      <ItemsListContainer />
    );
  }
};
export default App;