import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      iconTabs: 1,
      textTabs: 4
    };
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    return (
      <div className="section section-tabs">
        <Container>
          <div className="title">
            <h3 className="mb-3">Kategori</h3>
          </div>
          <Row>
            <Col className="" md="10" xl="12">
              <Card>
                <CardHeader>
                  <Nav className="nav-tabs-info" role="tablist" tabs>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 4
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 4)}
                        href="#pablo"
                      >
                        Biografi
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 5
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 5)}
                        href="#pablo"
                      >
                        Fiksi
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: this.state.textTabs === 6
                        })}
                        onClick={e => this.toggleTabs(e, "textTabs", 6)}
                        href="#pablo"
                      >
                        Sains Fiksi
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>
                <CardBody>
                  <TabContent
                    // className="tab-space"
                    activeTab={"link" + this.state.textTabs}
                  >
                    <TabPane tabId="link4">
                      <Row>
                      <Col lg="3">
                        <Card>
                          <img src="https://placeimg.com/640/480/tech" alt=""/>
                          <CardBody>
                            <CardTitle>Ada Apa Dengan Cinta</CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card>
                          <img src="https://placeimg.com/640/480/tech" alt=""/>
                          <CardBody>
                            <CardTitle>Ada Apa Dengan Cinta</CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card>
                          <img src="https://placeimg.com/640/480/tech" alt=""/>
                          <CardBody>
                            <CardTitle>Ada Apa Dengan Cinta</CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="3">
                        <Card>
                          <img src="https://placeimg.com/640/480/tech" alt=""/>
                          <CardBody>
                            <CardTitle>Ada Apa Dengan Cinta</CardTitle>
                          </CardBody>
                        </Card>
                      </Col>
                      </Row>
                    </TabPane>
                    <TabPane tabId="link5">
                      <p>
                        I will be the leader of a company that ends up being
                        worth billions of dollars, because I got the answers. I
                        understand culture. I am the nucleus. I think that’s a
                        responsibility that I have, to push possibilities, to
                        show people, this is the level that things could be at.
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at.
                      </p>
                    </TabPane>
                    <TabPane tabId="link6">
                      <p>
                        I think that’s a responsibility that I have, to push
                        possibilities, to show people, this is the level that
                        things could be at. So when you get something that has
                        the name Kanye West on it, it’s supposed to be pushing
                        the furthest possibilities. I will be the leader of a
                        company that ends up being worth billions of dollars,
                        because I got the answers. I understand culture. I am
                        the nucleus.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Tabs;
