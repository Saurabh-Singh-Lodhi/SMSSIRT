// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import ResultActions from "../redux/actions/ResultActions";

// END IMPORT ACTIONS

/** APIs

* actionsResult.create
*	@description CRUD ACTION create
*
* actionsResult.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsResult.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class ResultEdit extends Component {
  // Init result
  constructor(props) {
    super(props);
    this.state = {
      result: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsResult.loadResult(this.props.match.params.id);
    }
    
  }

  // Insert props result in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      result: props.result
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.result._id) {
      this.props.actionsResult.saveResult(this.state.result).then(data => {
        this.props.history.push("/results/");
      });
    } else {
      this.props.actionsResult.createResult(this.state.result).then(data => {
        this.props.history.push("/results/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>Result Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="rollnumber"
            label="Rollnumber"
            value={this.state.result.rollnumber || ""}
            onChange={Utils.handleChange.bind(this, "result")}
            type="number"
            type="decimal"
            margin="normal"
            fullWidth
            required
            {...(!this.state.result.rollnumber && this.state.result.rollnumber === ""
              ? { error: true }
              : {})}
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/results/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsResult: bindActionCreators(ResultActions, dispatch),
  };
};

// Validate types
ResultEdit.propTypes = { 
  actionsResult: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    result: state.ResultEditReducer.result
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultEdit);
