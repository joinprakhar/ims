const mongoose = require('mongoose');
import bcrypt from 'bcryptjs';

const newCourse = mongoose.Schema({
    centerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Center',
    },
    name: { type: String, required: true },
    fee: { type: Number, required: true },
    duration: { type: String, required: true },
    imfo: { type: String, required: true },
    details: { type: String, required: true },
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', newCourse);

export default Course;