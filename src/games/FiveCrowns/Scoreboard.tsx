import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('3', 159, 6.0, 24, 4.0),
  createData('4', 237, 9.0, 37, 4.3),
  createData('5', 262, 16.0, 24, 6.0),
  createData('6', 305, 3.7, 67, 4.3),
  createData('7', 356, 16.0, 49, 3.9),
  createData('8', 356, 16.0, 49, 3.9),
  createData('9', 356, 16.0, 49, 3.9),
  createData('10', 356, 16.0, 49, 3.9),
  createData('J', 356, 16.0, 49, 3.9),
  createData('Q', 356, 16.0, 49, 3.9),
  createData('K', 356, 16.0, 49, 3.9),
];

export default function FiveCrownsScoreboard() {
  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="five crowns score table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Round</TableCell>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">Fat (g)</TableCell>
            <TableCell align="center">Carbs (g)</TableCell>
            <TableCell align="center">Protein (g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">
                <TextField label="Score" size="small" fullWidth />
              </TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
