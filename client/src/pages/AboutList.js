// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import DialogDelete from "../components/DialogDelete";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";

// Table
import EnhancedTable from "../components/EnhancedTable";

// Custom Actions


// START IMPORT ACTIONS
import AboutActions from "../redux/actions/AboutActions";

// END IMPORT ACTIONS

/** APIs

* actionsAbout.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsAbout.list
*	@description CRUD ACTION list
*

**/


class AboutList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsAbout.loadAboutList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsAbout.deleteAbout(this.state.idDelete).then(data => {
      this.props.actionsAbout.loadAboutList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "contact",
        type: "number",
        label: "Contact"
      }, 
      {
        id: "place",
        type: "string",
        label: "Place"
      }, 
      {
        id: "schoolname",
        type: "string",
        label: "Schoolname"
      }, 
      {
        id: "telephone",
        type: "number",
        label: "Telephone"
      },
    ];
    const link = "/abouts/";

    return (
      <div>
        <h1>About List</h1>

        <EnhancedTable
          data={this.props.list}
          columns={columns}
          link={link}
          onDelete={this.delete.bind(this)}
        />

        <DialogDelete
          open={this.state.openDialogDelete}
          onClose={this.closeDialogDelete.bind(this)}
          onConfirm={this.confirmDialogDelete.bind(this)}
        />

        {/*
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Schoolname</TableCell>
              <TableCell align="right">Telephone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/abouts/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.contact }</TableCell>
                <TableCell align="right">{ row.place }</TableCell>
                <TableCell align="right">{ row.schoolname }</TableCell>
                <TableCell align="right">{ row.telephone }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/abouts/new">
            <Button variant="contained" color="primary">
              Add
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsAbout: bindActionCreators(AboutActions, dispatch),
  };
};

// Validate types
AboutList.propTypes = { 
  actionsAbout: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.AboutListReducer.listAbout
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutList);
