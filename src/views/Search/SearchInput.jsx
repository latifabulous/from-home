import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Container
} from "reactstrap";
import "../../components/Navbar/NavbarPage.css";
import "./SearchInput.css";

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent"
    };
  }

  render() {
    return (
      <div className="page-header header-filter heights">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        <div className="content-center">
      <Form onSubmit={this.props.searchBook} className="form-inline justify-content-center">
        <FormGroup className="no-border forms">
          <div className="input-group-prepend">
            <span className="input-group-text left">
              <i className="fa fa-search fa-2x famax"></i>
              {/* <i className="fas fa-times-circle clear" /> */}
            </span>
          </div>
            <Input onChange={this.props.handleSearch} placeholder="Search your favorite books" type="text" className="forms"/>
        <div class="vertical-divider"></div>
        <select defaultValue="Sort" value="Sort" onChange={this.props.handleSort} className="custom-select sort">
          <option className="sort">Urutkan</option>
          <option className="sort" value="Newest">Terbaru</option>
          <option className="sort" value="Oldest">Terlama</option>
        </select>
        </FormGroup>
        </Form>
        {/* <p className="mt-3 text-left" >Hasil untuk: {this.props.hasil}</p> */}
        </div>
      </Container>
      </div>
      );
    }
  }
  
  export default SearchInput;

