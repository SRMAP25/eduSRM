const express = require("express")
const app = express()
app.use(express.json());
const path = require('path')
const User = require('./Models/User')

const { Course, Topic } = require('./Models/course_and_topics')

const { default: mongoose } = require("mongoose")
app.get('/api/get_one_user/:name', async(req, res) => {
    const { name } = req.params
    const data = await User.find({ name: name })
    l = data.length
    res.status(200).json({ length: l, data })
})
app.get('/api/get_course/', async(req, res) => {
    const data = await Course.find();
    res.status(200).json({ length: Course.collection.name, data: data })
})

app.post("/api/edit_course/", async(req, res) => {
    const { courseId, courseName, courseDescription } = req.body;
    try {
        await Course.findOne({ courseId: courseId }).updateOne({ courseName: "HTML", description: courseDescription })
        res.status(200).json({ msg: "Course edited successfully" })
    } catch (e) {
        res.status(200).json({ msg: "an error ocuured while editing the course" })
    }
})

app.post("/api/add_topics_to_course/", async(req, res) => {
    const { courseId, topics } = req.body;

    try {
        const course = await Course.findOne({ courseId: courseId })
        if (!course) {
            res.status(200).json({ msg: "NO course found" })
        }
        const createdTopics = await Topic.insertMany(
            topics.map(topic => ({
                courseId: courseId,
                topicId: topic.topicId,
                title: topic.title,
                sources: topic.sources,
                description: topic.description,
            }))
        );

        const topicIds = createdTopics.map(t => t._id);
        await course.topics.push(...topicIds);
        await course.save();

        res.status(500).json({
            msg: "Topics added successfully",
            updatedCourse: course
        })

    } catch (e) {
        res.status(500).json({
            msg: "Error adding topics to the course",
            error: e
        })
    }

})


app.post("/api/edit_topic/", async(req, res) => {
    const topic = req.body;
    try {
        const updatedTopic = await Topic.findOneAndUpdate({ topicId: topic.topicId }, // Find topic by topicId
            topic, // Update with new values
            { new: true } // Return the updated document
        );

        if (updatedTopic) {
            res.status(200).json({
                msg: "Topic edited successfully",
                updatedTopic: updatedTopic // Send back the updated topic
            });
        } else {
            res.status(404).json({
                msg: "Topic not found"
            });
        }
    } catch (e) {
        res.status(500).json({
            msg: "An error occurred while editing the topic",
            error: e
        });
    }
});


app.get('/api/get_topics_of_a_course/:id', async(req, res) => {
    const courseid = req.params.id
    try {
        const course = await Course.findOne({ courseId: courseid })
        const topics = await Topic.find({
            _id: {
                $in: course.topics
            }
        })
        res.status(200).json({
            topics: topics
        })
    } catch (e) {
        res.status(500).json({
            topics: "AN error occures"
        })
    }
})

app.get('/api/get_specific_course/:name', async(req, res) => {
    const name = req.params.name
    const data = await Course.find({ courseName: name })
    if (data.length > 0) {
        res.status(200).json({
            length: data.length,
            data: data
        }, )
    } else {
        res.status(200).json({
            msg: "No course found"
        })
    }
})

app.get('/api/get_all_users', async(req, res) => {
    const data = await User.find()
    res.status(200).json({ length: 1234, data })
})

app.post('/api', (req, res) => {
    const name = req.body.name
    User.create({
        "name": name,
    })
    res.status(200).json({ msg: "post success" })
})






app.post('/api/add_course/', async(req, res) => {
    const { courseName, courseDescription } = req.body;

    await Course.create({
        courseName: courseName,
        courseDescription: courseDescription, // Fixed typo here
        topics: []
    })
    res.status(200).json({ msg: "Course added successfully" })

});

function connectDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/Learn")
        .then(() => console.log("DB Connected"))
        .catch((err) => console.log("DB Error", err))
}

app.listen(3000, () => {
    console.log("Server Running at 3000")
    connectDB()
})