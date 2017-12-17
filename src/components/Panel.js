import React from 'react';
import PropTypes from 'prop-types';

import {Card} from 'antd';

import './Panel.css';

const Panel = ({title, children, actions}) =>(
  <div className="panel">
    <Card title={title} extra={actions} bordered={false} className="panel">
      {children}
    </Card>
  </div>
)

Panel.propTypes = {
  title: PropTypes.string,
  actions: PropTypes.object,
  children: PropTypes.array
}
Panel.defaultProps = {
  title: '',
  actions: {},
  children: {}
}

export default Panel;
