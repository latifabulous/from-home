import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from "perfect-scrollbar";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Label,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledCarousel
} from "reactstrap";

import "./TentangKami.css";

import FooterPage from '../../components/Footer/FooterPage';
import NavbarPage from '../../components/Navbar/NavbarPage';

const carouselItems = [
  {
    src: require("../../assets/img/denys.jpg"),
    altText: "Slide 1",
    caption: "From Home"
  },
  {
    src: require("../../assets/img/fabien-bazanegue.jpg"),
    altText: "Slide 2",
    caption: "ReactJS"
  },
  {
    src: require("../../assets/img/mark-finn.jpg"),
    altText: "Slide 3",
    caption: "Google Books API"
  }
];

// let ps = null;

class TentangKami extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        // ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      // ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    return (
      <>
        <NavbarPage />
        <div className="wrapper">
        <div className="page-header">
        {/* <img
              alt="..."
              className="dots"
              src={require("../../assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("../../assets/img/path3.png")}
            /> */}
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center">
                    <UncontrolledCarousel items={carouselItems} />
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Projects</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description text-left">
                  Website ini dibuat dengan tujuan menyelesaikan project matakuliah Pemrograman Web Lanjut
                  Project ini dikerjakan dengan menggunakan framework React.Js dan memanfaatkan API dari Google Books.
                  </p>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section section-javascript mt-5">
            <img
              alt="..."
              className="dots"
              src={require("../../assets/img/dots.png")}
            />
            <img
              alt="..."
              className="path"
              src={require("../../assets/img/path4.png")}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">From Home</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description">
                  Tim tangguh yang berhasil memberikan segenap ide juga kerja keras!
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="danger"
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-gitlab" />
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="github"
                      href="#"
                      target="_blank"
                    >
                      <i className="fab fa-github" />
                    </Button>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="6" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle absolutes"
                        src={require("../../assets/img/mike.jpg")}
                      />
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center mt-180"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Latifa
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Desyra
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            Kiya
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 4
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 4)}
                            href="#pablo"
                          >
                            Chintya
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 5
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 5)}
                            href="#pablo"
                          >
                            Umbara
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle absolutes"
                            src={require("../../assets/img/mike.jpg")}
                          />
                          <Table >
                            <thead className="">
                              <tr><th className="header">NAMA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Nur Izza Latifah</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">NIM</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>F1D018050</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">KATA MUTIARA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>WKKWKWKKWKWKKW</td></tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle absolutes"
                            src={require("../../assets/img/james.jpg")}
                          />
                          <Table >
                            <thead className="">
                              <tr><th className="header">NAMA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Desyra Ardiani</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">NIM</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>F1D018012</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">KATA MUTIARA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>AKU LEKAK</td></tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle absolutes"
                            src={require("../../assets/img/julie.jpeg")}
                          />
                          <Table >
                            <thead className="">
                              <tr><th className="header">NAMA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Tazkiya Auliya Rachman</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">NIM</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>F1D018094</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">KATA MUTIARA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>EH MONY</td></tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab4">
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle absolutes"
                            src={require("../../assets/img/lora.jpg")}
                          />
                          <Table >
                            <thead className="">
                              <tr><th className="header">NAMA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Ni Kadek Chintya Andayani</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">NIM</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>F1D0180</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">KATA MUTIARA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>JIGGY FELLAS</td></tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab5">
                          <img
                            alt="..."
                            className="img-center img-fluid rounded-circle absolutes"
                            src={require("../../assets/img/ryan.jpg")}
                          />
                          <Table >
                            <thead className="">
                              <tr><th className="header">NAMA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>Umbara Diki Pratama</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">NIM</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>F1D018094</td></tr>
                            </tbody>
                            <thead className="text-primary">
                              <tr><th className="header">KATA MUTIARA</th></tr>
                            </thead>
                            <tbody>
                              <tr><td>EH EH</td></tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          <section className="section">
            
          </section>
          <FooterPage />
        </div>
      </>
    );
  }
}

export default TentangKami;
