import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Dropdown, Button, Icon, message } from 'antd';
import { Input } from 'antd';

import './TableFilter.css';

const Search = Input.Search;

const mapLimitOptions = (options, onLimitChange) =>(
  <Menu onClick={({key}) => onLimitChange(options[key])}>
    {options.map((option, key) => (
      <Menu.Item key={key}>{option}</Menu.Item>
    ))}
  </Menu>
)

const TableFilter = ({onLimitChange, limitOptions, limit, onSearchText, value, anotherFilter}) => (
  <div className="tableFilter">
    {limitOptions != null &&
      <div>
        <span>Show</span>
        <Dropdown size="large" overlay={mapLimitOptions(limitOptions, onLimitChange)}>
          <Button>
            {limit} <Icon type="down" />
          </Button>
        </Dropdown>
      </div>
    }
    { onSearchText != null &&
      <div>
        <Search
          size="large"
          placeholder="Pesquisar"
          onSearch={onSearchText}
          enterButton
        />
      </div>
    }
  </div>
)

TableFilter.propTypes = {
  onLimitChange: PropTypes.func,
  limitOptions: PropTypes.array,
  limit: PropTypes.number,
  onSearchText: PropTypes.func,
  value: PropTypes.string,
  anotherFilter: PropTypes.array //TODO implementar outros filtros
}

export default TableFilter;
