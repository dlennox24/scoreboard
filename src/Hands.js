import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import Paper from 'material-ui/Paper';
import List, {
  ListItem,
  ListItemText
} from 'material-ui/List';

const styleSheet = createStyleSheet('Hands', {
  root: {},
  grid: {
    textAlign: 'center',
    fontSize: '16px',
  },
  gridHeader: {
    fontWeight: 'bold',
  },
  row: {
    padding: '20px 0',
    '&:hover': {
      background: 'whitesmoke',
    }
  },
  pos: {
    color: 'green',
  },
  neg: {
    color: 'red',
  },
});

function createNumbersTypography(data) {
  return {
    hand: <strong>{data.hand}</strong>,
    bid: <strong>{data.bid}</strong>,
    score1: <Typography type='display1'><strong>{data.score1}</strong></Typography>,
    score2: <Typography type='display1'><strong>{data.score2}</strong></Typography>,
    meld1: <strong>{data.meld1}</strong>,
    meld2: <strong>{data.meld2}</strong>,
    change1: <strong>{(data.change1 < 0 ? '-' : '+') + Math.abs(data.change1)}</strong>,
    change2: <strong>{(data.change2 < 0 ? '-' : '+') + Math.abs(data.change2)}</strong>,
  }
}

function Hands(props) {
  const classes = props.classes;
  const numbers = createNumbersTypography(props.data);
  return (
    <div className={classes.root}>
      <div className={classes.row + ' text-center row'}>
        <div className='col-md-4'>
          <List dense className='row'>
            <ListItem className='col-md-4'>
              <ListItemText primary={numbers.change1} secondary='Change'/>
            </ListItem>
            <ListItem className='col-md-4'>
              {props.data.meld1 < 0 ? <ListItemText primary={<Icon>brightness_3</Icon>} secondary='Shot the Moon' /> : <ListItemText primary={numbers.meld1} secondary='Meld' />}
            </ListItem>
            <div className='col-md-4'>
              {numbers.score1}
            </div>
          </List>
        </div>
        <Paper className='col-md-4 text-center'>
          <List dense className='row'>
            <ListItem className='col-md-4'>
              {props.data.bidWinner === 1 ? <ListItemText primary={numbers.bid} secondary='Bid'/> : null}
            </ListItem>
            <ListItem className='col-md-4'>
              <ListItemText primary={numbers.hand} secondary='Hand' />
            </ListItem>
            <ListItem className='col-md-4'>
              {props.data.bidWinner === 2 ? <ListItemText primary={numbers.bid} secondary='Bid'/> : null}
            </ListItem>
          </List>
        </Paper>
        <div className='col-md-4'>
          <List dense className='row'>
            <div className='col-md-4'>
              {numbers.score2}
            </div>
            <ListItem className='col-md-4'>
              <ListItemText primary={numbers.meld2} secondary='Meld' />
            </ListItem>
            <ListItem className='col-md-4'>
              <ListItemText primary={numbers.change2} secondary='Change'/>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

Hands.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Hands);
