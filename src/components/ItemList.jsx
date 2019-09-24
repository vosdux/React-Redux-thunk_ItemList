import React, { Component } from 'react';
import * as actions from '../store/actions';
import { List, Avatar, Row, Col, Typography } from 'antd'

const { Title } = Typography;

const URL = 'http://5826ed963900d612000138bd.mockapi.io/items';

class ItemList extends Component {
  componentDidMount() {
    this.props.dispatch(actions.itemsFetchData(URL))
  }

  render = () => {
    const { hasErrored, isLoading, items } = this.props;
    if (hasErrored) return this.errorRender
    if (isLoading) return this.loadRender
    return (
      <Row>
        <Col offset={11}>
          <Title>ItemList</Title>
        </Col>
        <Col span={8} offset={8}>
          <List
            itemLayout="horizontal"
            dataSource={items}
            renderItem={item => (
              <List.Item>
                <List.Item.Meta
                  avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                  title={<a href="https://ant.design">{item.label}</a>}
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    );
  }

  errorRender = () => (
    <p>Error</p>
  )

  loadRender = () => (
    <p>Loading...</p>
  )

}

export default ItemList;