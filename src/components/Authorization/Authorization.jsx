import {
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  Row,
  Select,
  Card,
  Typography,
} from "antd";
import authImage from "../images/backgr.jpg";
import authImage2 from "../images/auth.png";
import styled from "styled-components";

const { Option } = Select;
const { Title } = Typography;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const Authorization = () => {
  const [form] = Form.useForm();

  const onFinish = () => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      <Wrapper>
        <Card className="auth-container">
          <img className="auth" src={authImage} alt="authImage" />
        </Card>
        <Title level={2} className="auth-title">
          Comin soon... stay tuned!
        </Title>
        <Card className="authCard">
          <img className="authImage2" src={authImage2} alt="authimage" />
        </Card>
        <Form
          className="form"
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
          initialValues={{
            residence: ["Georgia"],
            prefix: "86",
          }}
          style={{ maxWidth: 600, opacity: 0.5 }} // Set the opacity of the form
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not a valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error("The new password that you entered do not match!")
                  );
                },
              }),
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="residence"
            label="Habitual Residence"
            rules={[
              {
                type: "array",
                required: true,
                message: "Please select your habitual residence!",
              },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input disabled />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Captcha"
            extra="We must make sure that your are a human."
          >
            <Row gutter={8}>
              <Col span={12}>
                <Form.Item
                  name="captcha"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input the captcha you got!",
                    },
                  ]}
                >
                  <Input disabled />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Button disabled>Get captcha</Button>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox disabled>
              I have read the <a href="">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button className="btn-1" type="primary">
              Login
            </Button>
            <Button className="btn-2" type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>

          {/* Rest of the form items... */}
        </Form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  .authImage2 {
    display: flex;
    width: 400px;
  }
  .authCard {
    display: flex;
    max-width: 400px;
    background-color: transparent;
    width: 100%;
    position: absolute;
    right: 50px;
    top: 60%;
  }

  .auth-container {
    background-color: #000;
    width: 100%;
  }

  .auth {
    width: 100%;
    height: 34vh;
    display: flex;
    justify-content: center;
    align-items: center;
    object-fit: cover;
  }

  .auth-title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }

  .form {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    max-height: 600px;
    width: 100%;
  }

  .btn-2 {
    margin-left: 10px;
    max-width: 120px;
    width: 100%;
  }
  .btn-1 {
    background-color: #ae5757;
  }
  @media screen and (max-width: 800px) {
    .authImage2 {
      display: none;
    }
    .form {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      max-height: 1200px;
      width: 100%;
      height: 108vh;
    }
  }
  ,
 
`;

export default Authorization;
