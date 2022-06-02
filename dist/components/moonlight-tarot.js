"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.parse-float.js");

var _react = _interopRequireWildcard(require("react"));

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _moment2 = _interopRequireDefault(require("moment"));

var _material = require("@mui/material");

var _pickers = require("@material-ui/pickers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TarotBoard = () => {
  //Cards DB
  var tablecloth = 'https://imgur.com/0q2fDLx.png';
  var cardback = {
    name: 'Card',
    image: 'https://i.imgur.com/v0CtagW.png',
    past: 'Fate and circumstance have brought you here.',
    present: 'You want to know why.',
    advice: 'I can guide you.'
  };
  var cards = [{
    name: 'The Fool',
    image: 'https://imgur.com/J9ZcKJY.png',
    past: "You've recently begun a new cycle in your life. Perhaps you're still in a tumultuous time.",
    present: "There are a lot of possibilities in front of you. You know that if you take that step it could lead to something great but you might feel a bit reckless doing it. You're right on the edge of something new.",
    advice: 'You need to be brave. Take a leap of faith. No matter what, you can always pick yourself back up and start again.'
  }, {
    name: 'The Magician',
    image: 'https://imgur.com/BUg9CXm.png',
    past: "Recently you were in a situation where you could have done more. Perhaps you got to where you are because you didn't let yourself reach your full potential.",
    present: "You might be struggling to see the end of your ordeals, you've been putting a lot of focus and effort into your achieving your goals but you're not quiet there yet.",
    advice: 'Think before you act. Consider your goals and your talents, plan ahead.'
  }, {
    name: 'The High Priestess',
    image: 'https://imgur.com/qQfDUJN.png',
    past: "You've found out something you didn't expect to. Your intuition was proven right, you feel confident in your gut feelings.",
    present: 'You might be feeling a little dull, not as intuitive as you usually do. Something has you feeling disconnected from your usual circles.',
    advice: 'Be introspective. Listen to your gut, you know more than you think you do.'
  }, {
    name: 'The Empress',
    image: 'https://imgur.com/5O7YJXV.png',
    past: 'You were in your comfort zone for a bit too long. You relaxed and had a nice time but you feel like you need to get your edge back.',
    present: "You find yourself in a bountiful situation. Although you're going through a period of abundance you migth feel like you're getting a little to comfortable. You don't want to stop here, you want to keep moving.",
    advice: 'You should be confident in your creativity. You can rely on yourself to solve your own problems.'
  }, {
    name: 'The Emperor',
    image: 'https://imgur.com/TEaxr67.png',
    past: "You've felt the weight of responsibility on you. You've had to put in a lot of effort to get where you are.",
    present: "You feel like an excess of control has lead to a lack of discipline. You were worked so hard that now you can't focus anymore.",
    advice: "You are a very strong person but you don't need to be on guard all the time. People expect things from you but they can understand when you need to sit back and rest."
  }, {
    name: 'The Hierophant',
    image: 'https://imgur.com/yWsax6H.png',
    past: "You met someone who quickly became a role model. Working with them has taught you a lot and you feel like you've even learned how to learn.",
    present: "People began to notice your wisdom, and now you've become a mentor of sorts. Perhaps not on an official capacity, but you can feel people's reliance on your for guidance.",
    advice: "Rules are there for a reason. There are guides and structures in place that can help you. Don't try do everything on your own, take a step back and look at the resources available to you."
  }, {
    name: 'The Lovers',
    image: 'https://imgur.com/nAS0PIB.png',
    past: "Love has shaped your outlook on life. It could be your own relationship, or maybe your parents', but your experience with love has contributed a lot to who you are now.",
    present: 'There is certainly love in the horizon. You might already be eager to start a relationship, or you might have suspicions that someone you know will make a move on you soon, but you can certainly feel passion in the air.',
    advice: "Look at all the signs. Don't just evaluate others but be introspective. Try to identify and address your toxic behaviors."
  }, {
    name: 'The Chariot',
    image: 'https://imgur.com/tZy3V01.png',
    past: 'You have had big success! To the point smaller victories feel less meaningful. ',
    present: "You did it! You're currently basking in your triumph. You might be feleing a bit uneasy hower, about what that implies for your future.",
    advice: 'Your goals are attainable. You have evrything you need. Keep a cool head and charge on.'
  }, {
    name: 'Strength',
    image: 'https://imgur.com/IcQ0J7l.png',
    past: 'Your composure and expertise helped you break out of a rut. You became very aware of your own power.',
    present: "You're getting to know how to rule your own world. You are becoming conscious of your influence and power. Be responsible.",
    advice: "You are perfectly capable of keeping control in though situations. Don't let yourself feel overwhelmed."
  }, {
    name: 'The Hermit',
    image: 'https://imgur.com/Qz6FDi7.png',
    past: "You've felt isolated. Maybe not socially but you definitely know that you've relied mostly on yourself in the past, clearing obstacles with little but your own pluck.",
    present: 'You feel alone right now. That might actually be up to you. There are other people around you who also feel abandoned. You are all waiting for each other.',
    advice: 'Being alone is not a bad thing. Learning to take care of yourself and help yourself grow is the most valuable thing you can do.'
  }, {
    name: 'The Wheel of Fortune',
    image: 'https://imgur.com/FFfJatl.png',
    past: 'Your life has been full of ups and downs.',
    present: 'Your power comes from owning your actions.',
    advice: 'Remmeber that everything will pass, just like good times, bad times also end.'
  }, {
    name: 'Justice',
    image: 'https://imgur.com/Ei9wGGW.png',
    past: 'In your past you made the choice to remain stagnant. You know and are aware that you let go of many posibilities to build the life you have now but it is a choice you took willingly.',
    present: "You're currently faced with an important decision. You might not have realized it yet, but this is a permanent one. Whatever you decide to do will impact your life in the long run.",
    advice: 'Get ready to embrace the results of your decisions. Small pebbles can make big ripples, and small choices can impact your life greatly. Play Bandersnatch.'
  }, {
    name: 'The Hanged Man',
    image: 'https://imgur.com/gqweYG6.png',
    past: "You've resisted temptation. You saw others fall to it but you are where you are now because you refused to let something else take control of your life.",
    present: "You should avoid conflict. Your enemies are roused and might be looking for a fight but don't let them drag you along.",
    advice: "Don't make yourself out to be an aggressor, don't go looking for fights or conflict when you don't need them."
  }, {
    name: 'Death',
    image: 'https://imgur.com/ednDTBj.png',
    past: "A cycle has ended. You might feel like you've suffered a loss, but everything happens for a reason. Life closes a chapter and moves on to the next one. You feel a real sense of finality.",
    present: 'A massive change in your life is coming and you can sense it. You see the signs that something is about to end and you feel the need to cling to it.',
    advice: "Don't fear the end of the familiar. The end of a cycle is always the best time to explore the unknown, get to know yourself and the world better."
  }, {
    name: 'Temperance',
    image: 'https://imgur.com/buCpB9l.png',
    past: "Your integrity has recently tipped an incident in your advantage. You are aware of the power of your wisdom, and you're more sure now than ever than remaining calm is the way to go for you.",
    present: 'You surprised yourself by finding common ground in a dispute. You now know that your side is not absolute and are in the process of mediating a reasonable solution. Things will be more equitable going forward, use this time to forge strong relationships.',
    advice: 'No matter how tense you might be right now, tranquility is just around the corner. Be comfortable knowing that all hardship eventually ends.'
  }, {
    name: 'The Devil',
    image: 'https://imgur.com/POMT9Gv.png',
    past: 'You just got out of a toxic relationship. Perhaps not a romantic one, but you certainly managed to escape the claws of someone who was holding you down. It is good news to know these chains have been broken.',
    present: "You might not even realize it, but you're very likely hooked on something that's holding you back. It could be a person or a bad habit but this card is a reminder to look after yourself. There is a terrible connection in your life that is keeping you from being your full self.",
    advice: 'Set up structures in your life that you can rely on when things go south. Make friends now that can help you later.'
  }, {
    name: 'The Tower',
    image: 'https://imgur.com/zklNNjY.png',
    past: 'Something from your past is bound to erupt again... The Tower is a card that lives in the moment, it calls attention to any loose ends or unfinished business you might think is in the past but could come back for you.',
    present: 'The tower is a card of chaos. You might lose yout job but starta new relationship. Stay on your feet and be ready for anything.',
    advice: 'Brace yoruself for the incoming chaos. You never know when your life will get turned around or even upside down. IT could be in the next hour.'
  }, {
    name: 'The Star',
    image: 'https://imgur.com/s7Dgpvl.png',
    past: 'You can thank your intuition and improvisational skills for bringing you here. You recently had a good idea and where able to bring it to fruition.',
    present: "You've just gotten a new idea. A new plan, you're on the verge of taking a different path.",
    advice: 'Keep hope alive. Take a chance.'
  }, {
    name: 'The Moon',
    image: 'https://imgur.com/IjKffh7.png',
    past: "You ha da chaotic and murky past. You've gone through periods of uncertainty but these have made you who you are now. You've learned to be creative and artistic as you tried to make sense of your situation.",
    present: 'There are so many mixed signals in the world around you. Structures seem to be crumbling and you feel temptation calling for you. You wish you could distract yourself.',
    advice: "Don't believe in all your assumptions. Take a minute to observe and make sure you can see clearly. Create your own path and don't let others lead you astray."
  }, {
    name: 'The Sun',
    image: 'https://imgur.com/mjF55UB.png',
    past: 'You had a wonderful childhood. Like the sun, you rose with strength and confidence to become the person you are now.',
    present: "You feel like you're in the spotlight right now. And this is a good thing. You don't feel anxious or worried. You have little to lose and a lot to gain.",
    advice: 'You are on a path leading to greater wisdom than you think. Not only will you ucceed if you keep it up, but you will exceed.'
  }, {
    name: 'Judgement',
    image: 'https://imgur.com/WgYM2NY.png',
    past: "You made the big decision to stick to your guns. Ever since, it's been hard to make you change your mind even for a minute. You set yourself on a straigth path and it has brought you to where you are now.",
    present: 'You are at a crossroads. You must take a big decision and you know that it will affect you greatly. It may seem small and others might dismiss it but you can indeed feel how singificant this choice is.',
    advice: "Don't feel guilty about making a difficult choice. You have sound judgement and you will chose what is best."
  }, {
    name: 'The World',
    image: 'https://imgur.com/uQPAVi4.png',
    past: "You feel as if your situation has come full circle. You peaked in the past, but are wise not to get hung up on it. You know life plays n cycles and you'll end up on top again.",
    present: "You're in the peak, in the climax, the highest point of your adventure. You feel things coming together and everything is begining to make sense.",
    advice: "Keep your dreams alive. Don't feel bad about having great expectations, your strong desire will keep you going."
  }];
  const [seed, setSeed] = (0, _react.useState)(0);
  const [selectedDate, handleDateChange] = (0, _react.useState)(new _moment2.default());
  const [spread, updateSpread] = (0, _react.useState)([{
    flipped: false,
    card: 0
  }, {
    flipped: false,
    card: 1
  }, {
    flipped: false,
    card: 2
  }]);
  return /*#__PURE__*/_react.default.createElement(_material.Grid, {
    container: true,
    spacing: 2
  }, /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12
  }, "Moonlight Tarot"), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, "Enter Your Birthday To Begin"), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    utils: _moment.default
  }, /*#__PURE__*/_react.default.createElement(_pickers.DatePicker, {
    disableFuture: true,
    openTo: "year",
    format: "MM/DD/yyyy",
    label: "Date of birth",
    views: ['year', 'month', 'date'],
    value: selectedDate.format('MM/DD/yyyy'),
    onChange: handleDateChange
  }))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_material.Button, {
    onClick: () => {
      const newSeed = new Date(selectedDate).getTime();
      const deck = [...Array(22).keys()];
      const draw = [];

      while (draw.length < 3) {
        const rand = Math.random() + parseFloat('.' + newSeed);
        const index = rand > 1 ? Math.floor(rand - 1 * deck.length) : Math.floor(rand * deck.length);
        draw.push(deck[index]);
        deck.splice(index, 1);
      }

      updateSpread([{
        flipped: false,
        card: draw[0]
      }, {
        flipped: false,
        card: draw[1]
      }, {
        flipped: false,
        card: draw[2]
      }]);
      setSeed(newSeed);
    }
  }, seed === 0 ? 'Begin' : 'Reset')), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_material.Card, {
    onClick: !spread[0].flipped && seed != 0 ? () => {
      const newSpread = [...spread];
      newSpread[0].flipped = true;
      updateSpread(newSpread);
    } : () => {}
  }, /*#__PURE__*/_react.default.createElement(_material.CardMedia, {
    component: 'img',
    image: spread[0].flipped ? cards[spread[0].card].image : cardback.image
  }), /*#__PURE__*/_react.default.createElement(_material.CardContent, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, spread[0].flipped ? cards[spread[0].card].name : 'Reveal Your Past'), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, spread[0].flipped ? cards[spread[0].card].past : 'This card will reveal the conditions that brought you here.')))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_material.Card, {
    onClick: !spread[1].flipped && seed != 0 ? () => {
      const newSpread = [...spread];
      newSpread[1].flipped = true;
      updateSpread(newSpread);
    } : () => {}
  }, /*#__PURE__*/_react.default.createElement(_material.CardMedia, {
    component: 'img',
    image: spread[1].flipped ? cards[spread[1].card].image : cardback.image
  }), /*#__PURE__*/_react.default.createElement(_material.CardContent, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, spread[1].flipped ? cards[spread[1].card].name : 'Reveal Present'), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, spread[1].flipped ? cards[spread[1].card].present : 'This card will shed light on your current situation.')))), /*#__PURE__*/_react.default.createElement(_material.Grid, {
    item: true,
    xs: 12,
    md: 4
  }, /*#__PURE__*/_react.default.createElement(_material.Card, {
    onClick: !spread[2].flipped && seed != 0 ? () => {
      const newSpread = [...spread];
      newSpread[2].flipped = true;
      updateSpread(newSpread);
    } : () => {}
  }, /*#__PURE__*/_react.default.createElement(_material.CardMedia, {
    component: 'img',
    image: spread[2].flipped ? cards[spread[2].card].image : cardback.image
  }), /*#__PURE__*/_react.default.createElement(_material.CardContent, null, /*#__PURE__*/_react.default.createElement(_material.Typography, {
    gutterBottom: true,
    variant: "h5",
    component: "div"
  }, spread[2].flipped ? cards[spread[2].card].name : 'Reveal Advice'), /*#__PURE__*/_react.default.createElement(_material.Typography, {
    variant: "body2",
    color: "text.secondary"
  }, spread[2].flipped ? cards[spread[2].card].advice : 'This card will guide you towards your destiny.')))));
};

var _default = TarotBoard;
exports.default = _default;