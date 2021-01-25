import { Form, Input, Button, Checkbox } from 'antd';
import { connect } from 'react-redux'
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const Login = props => {
    const onFinish = (values) => {
        console.log('Success:', values);
        const action = {
            type: 'change_login',
            login: values
        }
        props.changeLogin(action)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true, }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item label="Username" name="username"
                rules={[ { required: true, message: 'Please input your username!', }, ]}
            >
                <Input />
            </Form.Item>

            <Form.Item label="Password" name="password"
                rules={[ { required: true, message: 'Please input your password!', }, ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
        </Button>
            </Form.Item>
        </Form>
    );
};
const mapStateToProps = (state) => {
    return {
        // 使用了immutable 管理 state 数据就要用 get() 方法拿数据
        isLogin: state.login.get('login'),
    }
}
const mapDispathToProps = (dispatch) => ({
    changeLogin(action) {
        dispatch(action)
    }
})
export default connect(mapStateToProps, mapDispathToProps)(Login)