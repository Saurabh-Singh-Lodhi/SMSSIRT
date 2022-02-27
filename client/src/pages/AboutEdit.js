// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// Custom Actions


// START IMPORT ACTIONS
import AboutActions from "../redux/actions/AboutActions";

// END IMPORT ACTIONS

/** APIs

* actionsAbout.create
*	@description CRUD ACTION create
*
* actionsAbout.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsAbout.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class AboutEdit extends Component {
  // Init about
  constructor(props) {
    super(props);
    this.state = {
      about: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsAbout.loadAbout(this.props.match.params.id);
    }
    
  }

  // Insert props about in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      about: props.about
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.about._id) {
      this.props.actionsAbout.saveAbout(this.state.about).then(data => {
        this.props.history.push("/abouts/");
      });
    } else {
      this.props.actionsAbout.createAbout(this.state.about).then(data => {
        this.props.history.push("/abouts/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>About Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="contact"
            label="Contact"
            value={this.state.about.contact || ""}
            onChange={Utils.handleChange.bind(this, "about")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="place"
            label="Place"
            value={this.state.about.place || ""}
            onChange={Utils.handleChange.bind(this, "about")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="schoolname"
            label="Schoolname"
            value={this.state.about.schoolname || ""}
            onChange={Utils.handleChange.bind(this, "about")}
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="telephone"
            label="Telephone"
            value={this.state.about.telephone || ""}
            onChange={Utils.handleChange.bind(this, "about")}
            type="number"
            margin="normal"
            fullWidth
          />
          

          {/* Footer */}
          <div className="footer-card">
            <Link to="/abouts/">Back to list</Link>

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
    actionsAbout: bindActionCreators(AboutActions, dispatch),
  };
};

// Validate types
AboutEdit.propTypes = { 
  actionsAbout: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    about: state.AboutEditReducer.about
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutEdit);
