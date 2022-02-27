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
import StudentActions from "../redux/actions/StudentActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsStudent.list
*	@description CRUD ACTION list
*

**/


class StudentList extends Component {
  // Init component
  constructor(props) {
    super(props);
    this.state = {
      openDialogDelete: false
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.actionsStudent.loadStudentList();
  }

  // Delete data
  delete(id) {
    this.setState({ openDialogDelete: true, idDelete: id });
  }

  closeDialogDelete() {
    this.setState({ openDialogDelete: false, idDelete: null });
  }

  confirmDialogDelete(id) {
    this.props.actionsStudent.deleteStudent(this.state.idDelete).then(data => {
      this.props.actionsStudent.loadStudentList();
      this.setState({ openDialogDelete: false, idDelete: null });
    });
  }

  // Show content
  render() {
    const columns = [ 
      {
        id: "age",
        type: "integer",
        label: "Age"
      }, 
      {
        id: "class",
        type: "string",
        label: "Class"
      }, 
      {
        id: "contact",
        type: "number",
        label: "Contact"
      }, 
      {
        id: "dob",
        type: "date",
        label: "Dob"
      }, 
      {
        id: "email",
        type: "string",
        label: "Email"
      }, 
      {
        id: "fathersname",
        type: "string",
        label: "Fathersname"
      }, 
      {
        id: "name",
        type: "string",
        label: "Name"
      }, 
      {
        id: "place",
        type: "string",
        label: "Place"
      }, 
      {
        id: "rollnumber",
        type: "string",
        label: "Rollnumber"
      }, 
      {
        id: "surname",
        type: "string",
        label: "Surname"
      }, 
      {
        id: "validate",
        type: "boolean",
        label: "Validate"
      },
    ];
    const link = "/students/";

    return (
      <div>
        <h1>Student List</h1>

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
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Contact</TableCell>
              <TableCell align="right">Dob</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Fathersname</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Place</TableCell>
              <TableCell align="right">Rollnumber</TableCell>
              <TableCell align="right">Surname</TableCell>
              <TableCell align="right">Validate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.props.list.map(row => (
              <TableRow key={row._id}>
                <TableCell component="th" scope="row">
                  <Link to={"/students/" + row._id} key={row._id}>
                    {row._id}
                  </Link>
                </TableCell>
                <TableCell align="right">{ row.age }</TableCell>
                <TableCell align="right">{ row.class }</TableCell>
                <TableCell align="right">{ row.contact }</TableCell>
                <TableCell align="right">{ row.dob }</TableCell>
                <TableCell align="right">{ row.email }</TableCell>
                <TableCell align="right">{ row.fathersname }</TableCell>
                <TableCell align="right">{ row.name }</TableCell>
                <TableCell align="right">{ row.place }</TableCell>
                <TableCell align="right">{ row.rollnumber }</TableCell>
                <TableCell align="right">{ row.surname }</TableCell>
                <TableCell align="right">{ row.validate }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        */}

        <div className="footer-card">
          <Link to="/students/new">
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
    actionsStudent: bindActionCreators(StudentActions, dispatch),
  };
};

// Validate types
StudentList.propTypes = { 
  actionsStudent: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.StudentListReducer.listStudent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StudentList);
