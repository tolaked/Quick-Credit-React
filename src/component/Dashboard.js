import React, { useEffect } from "react";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
import { Route, NavLink, Redirect, withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLoans } from "../state/actionCreator";
import AllLoans from "./AllLoans";
import LoanApplication from "./LoanApplication";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userLoans = user.currentUser.loans;
  useEffect(() => {
    dispatch(getLoans());
  }, []);
  return (
    <div>
      {/* {userLoans.map(loans => (
        <div key={loans.id}>
          <p>Amount:{loans.balance}</p>
          <p>payment installment:{loans.paymentinstallment}</p>
          <p>clientmail:{loans.clientemail}</p>
          <p>Date:{loans.createdon}</p>
        </div>
      ))} */}
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <NavLink exact to="/apply">
              Loan Application
            </NavLink>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: "#fff" }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    subnav 1
                  </span>
                }
              >
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4"></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="fund" />
                    subnav 2
                  </span>
                }
              >
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    subnav 3
                  </span>
                }
              >
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Welcome,Adetola</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <AllLoans />
              <Route exact path="/apply" component={LoanApplication} />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default withRouter(Dashboard);
