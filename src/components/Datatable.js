import React from 'react';
import PropTypes from 'prop-types';

import { Menu, Dropdown, Button, Icon } from 'antd';
import { Table, Pagination } from 'antd';
import Skeleton from 'react-loading-skeleton';

import './Datatable.css';

const { Column, ColumnGroup } = Table;

const handleSelectMenu = (value, record) => {
  value.onSelect(value, record)
}

const customLabels = {
  emptyText: 'Nenhum registro encontrado'
}

class Datatable extends React.Component {

  render(){
    const {dataSource, dataColumns, rowOptions, onTableChange, page} = this.props;

    return (
      <div className="datatable">
        {!page.isFetching ?
          <Table
            onChange={onTableChange}
            dataSource={dataSource}
            pagination={false}
            rowKey="id"
            locale={customLabels}
          >

            {dataColumns.map(e => (
              <Column
                title={e.title}
                dataIndex={e.dataIndex}
                key={e.key}
              />
            ))}

            {rowOptions && (
              <Column
                title="Action"
                key="action"
                render={(text, record) => (
                  <Dropdown overlay={(
                    <Menu onClick={({key}) => handleSelectMenu(rowOptions[key], record)}>
                      {rowOptions.map((e,index) => (
                        <Menu.Item key={index}>{e.label}</Menu.Item>
                      ))}
                    </Menu>

                    )}>
                    <Button>
                      <Icon type="ellipsis" />
                    </Button>
                  </Dropdown>
                )}
              />
            )}
            />
          </Table>
          :
          <Skeleton count={3} />
        }
        {page.total > 0 && (
          <Pagination
            current={page.page}
            onChange={onTableChange}
            pageSize={page.limit}
            total={page.total} />
        )}
      </div>
    )
  }
}
Datatable.propTypes = {
  dataSource : PropTypes.array.isRequired,
  dataColumns: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    dataIndex: PropTypes.string,
    key:  PropTypes.string
  })),
  rowOptions: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
  })),
  page: PropTypes.object,
  onTableChange: PropTypes.func
}
Datatable.defaultProps = {
  dataSource : [],
  dataColumns : [],
  rowOptions: [],
  page: 0,
  onTableChange: () =>{}
}

export default Datatable;
