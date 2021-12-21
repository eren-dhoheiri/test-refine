
import React, { useEffect } from "react";
import {
    Row,
    Col,
    AntdLayout,
    Card,
    Typography,
    Form,
    Button,
} from "@pankod/refine";

import { useLogin } from "@pankod/refine";
import axios from 'axios';

const { Title } = Typography;

export const Login: React.FC = () => {

    const { mutate: login } = useLogin();

    const API_VERIFY_GOOGLE = `https://stg-auths.service.efishery.com`;
    const loginCode = new URLSearchParams(window.location.search).get('code');

    const sso = async () => {
        if (loginCode) {
            const verifyUrl = `${API_VERIFY_GOOGLE}/google/verify`;
            try {
                const res = await axios.post(verifyUrl, { code: loginCode });
                const tokens = res.data.data;
                localStorage.setItem("token", JSON.stringify(tokens.token));
                localStorage.setItem("refresh_token", JSON.stringify(tokens.refresh_token));
                window.location.href = "/"
            } catch (err: any) {
                return Promise.reject()
            }
        }
    }

    useEffect(() => {
        if (loginCode) {
            sso()
        }
    })


    const CardTitle = (
        <Title level={3} className="title">
            Sign in your account
        </Title>
    );

    return (
        <AntdLayout className="layout">
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "100vh",
                }}
            >
                <Col xs={22}>
                    <div className="container">

                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                            <Form
                                layout="vertical"
                                onFinish={(values) => {
                                    login(values)
                                }}
                            >
                                <Button type="primary" size="large" htmlType="submit" block>
                                    Sign in
                                </Button>
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </AntdLayout>
    );
};
