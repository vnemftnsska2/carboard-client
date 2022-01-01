import './App.css';
import { Container, Grid } from '@mui/material';
import CarMemo from './components/car-memo/car-memo';

const App = () => {
  return (
    <div className="App">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
        {[...Array(10)].map(v => {
          return (
            <Grid item xs={3}>
              <CarMemo></CarMemo>
            </Grid>
          )
        })}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
