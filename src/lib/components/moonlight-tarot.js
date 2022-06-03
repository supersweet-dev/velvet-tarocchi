import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from '@mui/material';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { cards, cardback, tablecloth } from './cards';

const TarotBoard = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  const [spread, updateSpread] = useState([
    { flipped: false, card: cardback },
    { flipped: false, card: cardback },
    { flipped: false, card: cardback },
  ]);
  const reset = () => {
    const seed = new Date(selectedDate).getTime();
    const deck = [...cards];
    const draw = [];
    while (draw.length < 3) {
      const rand = Math.random() + parseFloat('.' + seed);
      const index = Math.floor((rand - Math.floor(rand)) * deck.length);
      draw.push(deck[index]);
      deck.splice(index, 1);
    }
    updateSpread([
      { flipped: false, card: draw[0] },
      { flipped: false, card: draw[1] },
      { flipped: false, card: draw[2] },
    ]);
  };
  return (
    <Paper
      style={{ backgroundImage: `url(${tablecloth})` }}
      elevation={3}
      p={2}
    >
      <Grid container spacing={2} p={2}>
        <Grid container item spacing={1} p={2}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5">
              Moonlight Tarot
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="body2" color="text.secondary">
              Enter your birthday to begin
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <MuiPickersUtilsProvider utils={MomentUtils}>
              <DatePicker
                disableFuture
                openTo="year"
                format="MM/DD/yyyy"
                label="Date of birth"
                views={['year', 'month', 'date']}
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item xs={12} md={4}>
            <Button onClick={reset} variant="contained" color="secondary">
              DRAW
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            onClick={
              !spread[0].flipped
                ? () => {
                    const newSpread = [...spread];
                    newSpread[0].flipped = true;
                    updateSpread(newSpread);
                  }
                : () => {}
            }
          >
            <CardMedia
              component={'img'}
              image={spread[0].flipped ? spread[0].card.image : cardback.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {spread[0].flipped
                  ? spread[0].card.name === 'Card'
                    ? 'Reveal Past'
                    : spread[0].card.name
                  : 'Reveal Past'}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {spread[0].flipped ? spread[0].card.past : cardback.past}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            onClick={
              !spread[1].flipped
                ? () => {
                    const newSpread = [...spread];
                    newSpread[1].flipped = true;
                    updateSpread(newSpread);
                  }
                : () => {}
            }
          >
            <CardMedia
              component={'img'}
              image={spread[1].flipped ? spread[1].card.image : cardback.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {spread[1].flipped
                  ? spread[1].card.name === 'Card'
                    ? 'Reveal Present'
                    : spread[1].card.name
                  : 'Reveal Present'}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {spread[1].flipped ? spread[1].card.present : cardback.present}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            onClick={
              !spread[2].flipped
                ? () => {
                    const newSpread = [...spread];
                    newSpread[2].flipped = true;
                    updateSpread(newSpread);
                  }
                : () => {}
            }
          >
            <CardMedia
              component={'img'}
              image={spread[2].flipped ? spread[2].card.image : cardback.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {spread[2].flipped
                  ? spread[2].card.name === 'Card'
                    ? 'Reveal Advice'
                    : spread[2].card.name
                  : 'Reveal Advice'}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                {spread[2].flipped ? spread[2].card.advice : cardback.advice}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TarotBoard;
