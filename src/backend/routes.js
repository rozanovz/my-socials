const express = require('express');
const router = express.Router();

const MessagesController = require('./controllers/messages');

router.get('/test', (req, res) => {
  res.send('api works');
});

router.get('/messages', MessagesController.getMessages);
router.get('/participants', MessagesController.getParticipants);
router.get('/messages/:participant', MessagesController.getMessageByParticipant);

module.exports = router;