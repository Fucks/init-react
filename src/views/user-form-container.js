import React from 'react';
import { connect } from 'react-redux';

import { message, Form, Input, Icon, Button} from 'antd';
import Panel from 'components/Panel';

import * as HelperFunctions from 'util/helper-functions';
import * as UserActions from 'actions/user-actions';

const FormItem = Form.Item;

const mapStateToProps = ({userState}, ownProps)  => {
  return {
    ...ownProps,
    user: userState.user
  }
}

class UserFormContainer extends React.Component {

  state = {};

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        HelperFunctions.postData(UserActions.addUser, values, 'Criando usuário...')
          .then( success => {
            message.success(`Usuário ${values.name} criado com sucesso!`, 10);
            this.props.history.push('/users')
          })
          .catch( error => {
            alert(error)
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { history } = this.props;

    const formItenGrid ={
      labelCol: {span: 5},
      wrapperCol: {span: 12}
    }

    return (
      <Form onSubmit={this.handleSubmit}>

        <Panel title="Novo usuário" actions={
          <div className="action-buttons-container">
            <Button htmlType="button" onClick={()=> history.push('/users')}>
              Cancelar
            </Button>
          </div>
        }
      >

        <FormItem
          {...formItenGrid}
          label="Nome"
        >
          {getFieldDecorator('name', {
            rules: [{
              required: true, message: 'Informe o nome!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItenGrid}
          label="Username"
          wrapperCol={{span: 8}}
        >
          {getFieldDecorator('username', {
            rules: [{
              required: true, message: 'Informe o username!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          {...formItenGrid}
          wrapperCol={{span: 8}}
          label="E-mail"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Informe um endereço de e-mail válido!',
            },{
              required: true, message: 'Informe um endereo de e-mail!',
            }],
          })(
            <Input />
          )}
        </FormItem>

        <FormItem
          wrapperCol={{offset: 5}}>

          <Button htmlType="submit" className="action-button">
            <Icon type="save" />
            Salvar
          </Button>

        </FormItem>

      </Panel>
  </Form>
    )
  }
}
export default connect(mapStateToProps)(Form.create()(UserFormContainer));
