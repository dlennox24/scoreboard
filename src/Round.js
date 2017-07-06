import React from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';

const styleSheet = createStyleSheet('Round', {
  root: {},
  grid: {
    textAlign: 'center',
    fontSize: '16px',
  },
  gridHeader: {
    fontWeight: 'bold',
  },
  score1: {
    textAlign: 'right',
  },
  score2: {
    textAlign: 'left',
  },
  roundBid: {
    textAlign: 'center',
  },
  meld1: {
    textAlign: 'left',
  },
  meld2: {
    textAlign: 'right',
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

function Round(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <div className={classes.row + ' row'}>
        <div className={classes.score1 + ' col-md-3'}>
          <Typography type='title'>
            <strong>{props.data.score1}</strong>
          </Typography>
          <Typography type='body1' className={props.data.change1 < 0 ? classes.neg : classes.pos}>
            {props.data.change1 < 0 ? '-' : '+'}
            {Math.abs(props.data.change1)}
          </Typography>
        </div>
        <div className={classes.meld1 + ' col-md-1'}>
          <Typography type='body1'>
            {props.data.meld1}
          </Typography>
        </div>
        <div className={classes.roundBid + ' col-md-4'}>
          <Typography type='title'>
            <strong>{props.data.bid}</strong>
          </Typography>
          <Icon>{props.data.bidWinner === 1 ? 'chevron_left' : 'chevron_right'}</Icon>
          <Typography type='body1'>
            Round {props.data.round}
          </Typography>
        </div>
        <div className={classes.meld2 + ' col-md-1'}>
          <Typography type='body1'>
            {props.data.meld2}
          </Typography>
        </div>
        <div className={classes.score2 + ' col-md-3'}>
          <Typography type='title'>
            <strong>{props.data.score2}</strong>
          </Typography>
          <Typography type='body1' className={props.data.change2 < 0 ? classes.neg : classes.pos}>
            {props.data.change1 < 0 ? '- ' : '+ '}
            {Math.abs(props.data.change2)}
          </Typography>
        </div>
      </div>
    </div>
  );
}

Round.propTypes = {
  data: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(Round);
