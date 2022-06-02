import React, { useState } from 'react';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { cards, cardback, tablecloth } from './cards';

const TarotBoard = () => {
  const [seed, setSeed] = useState(0);
  const [selectedDate, handleDateChange] = useState(new moment());
  const [spread, updateSpread] = useState([
    { flipped: false, card: 0 },
    { flipped: false, card: 1 },
    { flipped: false, card: 2 },
  ]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        Moonlight Tarot
      </Grid>
      <Grid item xs={12} md={4}>
        Enter Your Birthday To Begin
      </Grid>
      <Grid item xs={12} md={4}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <DatePicker
            disableFuture
            openTo="year"
            format="MM/DD/yyyy"
            label="Date of birth"
            views={['year', 'month', 'date']}
            value={selectedDate.format('MM/DD/yyyy')}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </Grid>
      <Grid item xs={12} md={4}>
        <Button
          onClick={() => {
            const newSeed = selectedDate.getTime();
            const deck = [...Array(22).keys()];
            const draw = [];
            while (draw.length < 3) {
              const rand = Math.random() + parseFloat('.' + newSeed);
              const index =
                rand > 1
                  ? Math.floor(rand - 1 * deck.length)
                  : Math.floor(rand * deck.length);
              draw.push(deck[index]);
              deck.splice(index, 1);
            }
            updateSpread([
              { flipped: false, card: draw[0] },
              { flipped: false, card: draw[1] },
              { flipped: false, card: draw[2] },
            ]);
            setSeed(newSeed);
          }}
        >
          {seed === 0 ? 'Begin' : 'Reset'}
        </Button>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          onClick={
            !spread[0].flipped && seed != 0
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
            image={
              spread[0].flipped ? cards[spread[0].card].image : cardback.image
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {spread[0].flipped
                ? cards[spread[0].card].name
                : 'Reveal Your Past'}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {spread[0].flipped
                ? cards[spread[0].card].past
                : 'This card will reveal the conditions that brought you here.'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          onClick={
            !spread[1].flipped && seed != 0
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
            image={
              spread[1].flipped ? cards[spread[1].card].image : cardback.image
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {spread[1].flipped
                ? cards[spread[1].card].name
                : 'Reveal Present'}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {spread[1].flipped
                ? cards[spread[1].card].present
                : 'This card will shed light on your current situation.'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card
          onClick={
            !spread[2].flipped && seed != 0
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
            image={
              spread[2].flipped ? cards[spread[2].card].image : cardback.image
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {spread[2].flipped ? cards[spread[2].card].name : 'Reveal Advice'}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {spread[2].flipped
                ? cards[spread[2].card].advice
                : 'This card will guide you towards your destiny.'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TarotBoard;
