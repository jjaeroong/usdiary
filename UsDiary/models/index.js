'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const User = require("./users");
const TodayAnswer = require("./today_answers");
const TodayQuestion = require("./today_questions");
const Checklist = require("./checklists");
const Todo = require("./todos");
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config); 

db.User = User;
db.TodayAnswer = TodayAnswer;
db.TodayQuestion = TodayQuestion;
db.Checklist = Checklist;
db.Todo = Todo;



User.initiate(sequelize)
TodayAnswer.initiate(sequelize)
TodayQuestion.initiate(sequelize)
Checklist.initiate(sequelize)
Todo.initiate(sequelize)


// 모델 간 관계 설정
User.associate(db);
TodayAnswer.associate(db);
TodayQuestion.associate(db);
Checklist.associate(db);
Todo.associate(db);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;