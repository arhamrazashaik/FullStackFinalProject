import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    margin: 10,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },


});


class PaperSheet extends React.Component {

  state = {
    glasses: ''

  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  };



render () {
  const { classes } = this.props;

    return (
      <div>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="display1">
            Water Goal
          </Typography>
          <Typography>
            Drink at least 8 fluid ounces each day. 
            One Glass counts as one fluid ounce 
          </Typography>
          <Typography variant="title">
            Add Water
          </Typography>
          <Typography variant="subheading">
            Today's Progress
          </Typography>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>3 Glasses</TableCell>
              </TableRow>
            </TableBody>
          </Table>

          <Button variant="outlined" size="small">+1 Glasses</Button>
          <Button variant="outlined" size="small">+3 Glasses</Button>
          <Button variant="outlined" size="small">+6 Glasses</Button>

           <form className={classes.container} noValidate autoComplete="off">
              <TextField
              id="addGlasses"
              label="Enter Water"
              value={this.state.glasses}
              onChange={this.handleChange('glasses')}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            </form>
          <Button variant="contained">Submit</Button>
        </Paper>
        <Paper>
           <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className={classes.column}>
            <Typography className={classes.heading}>Location</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Select trip destination</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Barbados" className={classes.chip} onDelete={() => {}} />
          </div>
          <div className={classNames(classes.column, classes.helper)}>
            <Typography variant="caption">
              Select your destination of choice<br />
              <a href="#sub-labels-and-columns" className={classes.link}>
                Learn more
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Cancel</Button>
          <Button size="small" color="primary">
            Save
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>

        </Paper>


      </div>
  );

  }
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);