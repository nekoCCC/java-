import React from 'react';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css'
import axios from 'axios'
import qs from 'qs'

function App() {

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values) => {
    axios.post('http://8081.max.com/heima_ssm_web_war_exploded/login.do', qs.stringify({
    // axios.post('http://127.0.0.1:8081/heima_ssm_web_war_exploded/login.do', qs.stringify({
        username: values.username,
        password: values.password
    }))
    .then(function (response) {
      if (response.status === 200) {
        alert(response.data.msg);
      } else {
          alert('出现问题');
      }
    })
    .catch(function (error) {
      console.log(error.message);
    });
  };
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
    <Form
    {...layout}
    name="basic"
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input style={{ width:300}}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password style={{ width:300}}/>
    </Form.Item>

    <Form.Item {...tailLayout}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  );
}

export default App;