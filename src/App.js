import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
import {
  withStyles,
  createStyleSheet
} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';

import Header from './Header';
import Round from './Round';

const styleSheet = createStyleSheet('App', {
  root: {},
  mainContent: {
    margin: '30px auto',
    width: '75%',
  },
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
  },
  teamContainer: {
    padding: '40px 0',
  },
});

let round = 0;

function createData(bid, bidWinner, change1, score1, meld1, change2, score2, meld2) {
  round += 1;
  return {
    round,
    bid,
    bidWinner,
    score1,
    meld1,
    change1,
    score2,
    meld2,
    change2,
  };
}

const data = [
  createData(200, 1, -450, -350, 10, +300, 1050, 250),
  createData(350, 2, +300, 1050, 250, +500, 200, 75),
  createData(420, 2, -150, 780, 150, -450, -350, 10),
  createData(170, 1, +500, 200, 75, +300, 1050, 250)
];

class App extends Component {
  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.root}>
        <Header />
        <main className={classes.mainContent}>
          <div className={classes.row+' row text-center'}>
            <div className='col-md-5'>
              <Paper className={classes.teamContainer}>
                <Typography type='display2'>
                  Team 1
                </Typography>
              </Paper>
            </div>
            <div className='col-md-2'>
              <Typography  className={classes.teamContainer} type='display1'>
                VS
              </Typography>
            </div>
            <div className='col-md-5'>
              <Paper className={classes.teamContainer}>
                <Typography type='display2'>
                  Team 2
                </Typography>
              </Paper>
            </div>
          </div>
          <Divider/>
          {data.slice(0).reverse().map((round,i) => {
            return <Round key={i} data={round} />
          })}
        </main>
        <br/>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(App);
