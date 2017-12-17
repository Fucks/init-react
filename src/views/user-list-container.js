import React from 'react';
import {connect} from 'react-redux';

import { Button, Icon } from 'antd';
import Panel from 'components/Panel';
import TableFilter from 'components/TableFilter';
import Datatable from 'components/Datatable';

//actions
import * as TeamActions from 'actions/user-actions';

const columns = [
  {
    key: '#',
    title: '#',
    dataIndex: 'id',
  },
  {
    key: 'name',
    title: 'Nome',
    dataIndex: 'name',
  },
  {
    key: 'username',
    title: 'Username',
    dataIndex: 'username',
  },
  {
    key: 'email',
    title: 'E-mail',
    dataIndex: 'email',
  }
];

const rowOptions = [
  {
    label:'Editar',
    onSelect: (value) => {console.log(value)}
  },
  {
    label:'excluir',
    onSelect: (value) => {console.log(value)}
  }
]

const mapStateToProps = ({userState}, ownProps)  => {
  return {
    data: userState.data,
    page: userState.page
  }
}

const mapDispatchToProps = (dispatch,ownProps) => {
  return {
    fetchUsers: (page) => {
      TeamActions.fetchUsers(page)
    }
  }
}

const limitOptions = [ 5, 10, 15, 20];

class UserListContainer extends React.Component {

 constructor(props) {
   super(props);
   this.state = {page: props.page};
 }

 componentDidMount() {
   this.props.fetchUsers(this.state.page);
 }

  render() {
    const {fetchUsers, page, history, data} = this.props;

    return (
      <Panel title="Listagem de usuários" actions={
        <Button className="action-button" onClick={()=> {history.push('/users/new')}}>
          <Icon type="plus" />
          Novo usuário
        </Button>
      }>
        <TableFilter
          onLimitChange={(limit) => fetchUsers({...page, limit: limit})}
          onSearchText={(text) => fetchUsers({...page, query: text})}
          value={page.query}
          limitOptions={limitOptions}
          limit={page.limit}
        />
        <Datatable
          page={page}
          dataSource={data}
          dataColumns={columns}
          rowOptions={rowOptions}
          onTableChange={(pagination) => {console.log(pagination);fetchUsers({...page, page: pagination})}}
        />
      </Panel>
    )
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps)(UserListContainer);
