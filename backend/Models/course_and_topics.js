// import { Schema, model } from 'mongoose';
var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Schema = mongoose.Schema;
const model = mongoose.model;

const topicSchema = new Schema({
    courseId: {
        type: Number,
        required: true
    },

    topicId: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    sources: [{
            type: String,
            // validate: {
            //     validator: function(v) {
            //         return v.every(link => /^http?:\/\//.test(link));
            //     },
            //     message: props => `${props.value} is not a valid URL!`
            // }
        }

    ],
    duration: {
        type: Number
    }
})

const courseSchema = new Schema({

    courseId: {
        type: Number
    },
    courseName: {
        type: String,
        required: true,
        unique: true
    },
    courseDescription: {
        type: String,
    },
    topics: [{
        type: Schema.Types.ObjectId,
        ref: 'Topic'
    }],
}, )

courseSchema.plugin(AutoIncrement, { inc_field: 'courseId' });
topicSchema.plugin(AutoIncrement, { inc_field: 'topicId' });

const Course = model('course', courseSchema);
const Topic = model('topic', topicSchema);

module.exports = { Course, Topic };