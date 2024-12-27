import LayoutScoreboard from '@/layouts/Scoreboard.layout';
import { MilitaryTech } from '@mui/icons-material';
import { Alert, Chip, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import * as React from 'react';

interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: 'left' | 'center' | 'right';
  format?: (value: number) => string;
}
interface RowHeader {
  id: string;
  label: string;
}

const columnHeaders: readonly Column[] = [
  { id: '1', label: 'Player 1', minWidth: 125 },
  { id: '2', label: 'Player 2', minWidth: 125 },
  { id: '3', label: 'Player 3', minWidth: 125 },
  { id: '4', label: 'Player 4', minWidth: 125 },
  { id: '5', label: 'Player 5', minWidth: 125 },
  { id: '6', label: 'Player 6', minWidth: 125 },
  { id: '7', label: 'Player 7', minWidth: 125 },
  { id: '8', label: 'Player 8', minWidth: 125 },
];

const rowHeaders: readonly RowHeader[] = [
  { id: '3', label: '3' },
  { id: '4', label: '4' },
  { id: '5', label: '5' },
  { id: '6', label: '6' },
  { id: '7', label: '7' },
  { id: '8', label: '8' },
  { id: '9', label: '9' },
  { id: '10', label: '10' },
  { id: '11', label: 'Jack' },
  { id: '12', label: 'Queen' },
  { id: '13', label: 'King' },
];

// const placesStyles = [
//   {
//     chip: { borderColor: amber[500] },
//     icon: { color: amber[500] },
//   },
// ];

export default function HomePage() {
  const [scores, setScores] = React.useState(
    Array.from({ length: rowHeaders.length }, () =>
      new Array(columnHeaders.length).fill(-1),
    ),
  );
  const [totals, setTotals] = React.useState(
    Array.from({ length: rowHeaders.length + 1 }, () =>
      new Array(columnHeaders.length).fill(-1),
    ),
  );
  const [places, setPlaces] = React.useState(
    new Array(columnHeaders.length).fill(-1),
  );
  const [players, setPlayers] = React.useState(
    new Array(columnHeaders.length).fill(''),
  );

  const sumScoreTotals = () => {
    const newTotals = totals.map((arr) => [...arr]);
    const numRows = scores.length;
    const numColumns = scores[0].length;

    for (let col = 0; col < numColumns; col++) {
      let cumSum = 0;
      for (let row = 0; row < numRows; row++) {
        if (scores[row][col] > -1) {
          cumSum += scores[row][col];
        }
        newTotals[row][col] = scores[row][col] > -1 ? cumSum : -1;
      }
    }

    for (let col = 0; col < numColumns; col++) {
      let cumSum = 0;
      for (let row = 0; row < numRows; row++) {
        if (scores[row][col] > -1) {
          cumSum += scores[row][col];
        }
        newTotals[newTotals.length - 1][col] = cumSum > 0 ? cumSum : -1;
      }
    }

    return newTotals;
  };

  const calcPlaces = () => {
    return totals[totals.length - 1]
      .map((value, index) => ({ index, value }))
      .sort((a, b) => b.value - a.value)
      .map((total) => total.index);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdateScore = (event: { target: any }) => {
    const {
      target: { value, id },
    } = event;
    const [i, j] = id.split('-')[1].split(':');
    scores[i][j] = parseInt(value, 10);
    setScores(scores);
    setTotals(sumScoreTotals());
    console.log(calcPlaces(), totals[totals.length - 1]);
    setPlaces(calcPlaces());
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleUpdatePlayer = (event: { target: { value: any; id: any } }) => {
    const {
      target: { value, id },
    } = event;
    const [, i] = id.split('-');
    const newPlayers = players.map((p) => p);
    newPlayers[i] = value;
    setPlayers(newPlayers);
    console.log(newPlayers);
  };

  return (
    <LayoutScoreboard>
      <Alert sx={{ width: '100%' }}>
        Warning: Refreshing or navigating away from this page will reset all
        scores. There is no save feature currently. Use with caution.
      </Alert>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="center"></TableCell>
                {columnHeaders.map((columnHeader, i) => (
                  <TableCell
                    key={columnHeader.id}
                    sx={{ minWidth: columnHeader.minWidth }}
                  >
                    <Stack>
                      <TextField
                        id={`nameField-${i}`}
                        label={columnHeader.label}
                        variant="standard"
                        onChange={handleUpdatePlayer}
                      />
                      <Typography variant="h3" align="center" sx={{ my: 1 }}>
                        {totals[totals.length - 1][i] > -1
                          ? totals[totals.length - 1][i]
                          : '-'}
                      </Typography>
                      {false && totals[totals.length - 1][i] > -1 && (
                        <Chip
                          icon={<MilitaryTech sx={{ color: 'green' }} />}
                          label={`${places.indexOf(i) + 1} Place`}
                          variant="outlined"
                        />
                      )}
                    </Stack>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {totals.slice(0, totals.length - 1).map((totalRow, i) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={rowHeaders[i].id}
                  >
                    <TableCell align="center">{rowHeaders[i].label}</TableCell>
                    {totalRow.map((total, j) => {
                      return (
                        <TableCell
                          key={columnHeaders[j].id}
                          align={columnHeaders[j].align}
                        >
                          <Stack>
                            <TextField
                              id={`score-${i}:${j}`}
                              label={`P${columnHeaders[j].id} - ${rowHeaders[i].label}'s Score`}
                              variant="standard"
                              onChange={handleUpdateScore}
                              type="number"
                              disabled={!players[j]}
                            />
                            {i !== 0 && (
                              <Typography variant="caption">
                                {total > -1 ? total : '-'}
                              </Typography>
                            )}
                          </Stack>
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </LayoutScoreboard>
  );
}
