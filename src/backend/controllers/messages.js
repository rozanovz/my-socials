const async = require('async');
const fs = require('fs');
const path = require('path');

exports.getMessages = (req, res)=>{
    async.series([
        (callback)=>{
            fs.readFile(path.join(__dirname, '../data/messages.json'), 'utf8', (err, data)=>{
                if(!err){
                    let messages = JSON.parse(data);
                    callback(null, messages);
                } else {
                    callback(err);
                }
            });
        }
    ],(err,data)=>{
       res.send(data); 
    });
};

exports.getParticipants = (req, res)=>{
    async.waterfall([
        (callback)=>{
            fs.readFile(path.join(__dirname, '../data/messages.json'), 'utf8', (err, data)=>{
                if(!err){
                    let messages = JSON.parse(data);
                    callback(null, messages);
                } else {
                    callback(err);
                }
            });
        },
        (messages, callback)=>{
            let participants = messages.map(msg => msg.participants).reduce((a,b)=>[...a, ...b], []).filter(p => p !== 'rozanovz');
            callback(null, participants);
        }
    ],(err,data)=>{
       res.send(data); 
    });
};

exports.getMessageByParticipant = (req, res) => {
    let participant = req.params.participant;
    async.waterfall([
        (callback)=>{
            fs.readFile(path.join(__dirname, '../data/messages.json'), 'utf8', (err, data)=>{
                if(!err){
                    let messages = JSON.parse(data);
                    callback(null, messages);
                } else {
                    callback(err);
                }
            });
        },
        (messages, callback) => {
            let messagesByParticipant = messages.find((msg)=>{
                return msg.participants.indexOf(participant) !== -1;
            });
            callback(null, messagesByParticipant);
        }
    ],(err,data)=>{
       res.send(data); 
    });
};
