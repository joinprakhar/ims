const mongoose = require('mongoose');
import bcrypt from 'bcryptjs';

const newEnquery = mongoose.Schema({
    centerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Center',
    },
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Employee',
    },
    name: { type: String, required: true },
    mobile: { type: Number, required: true },
    center: { type: String, required: true },
    email: { type: String, required: true },
    date: { type: String, required: true },
    address: { type: String, required: true },
    course: { type: String, required: true },
    remark: { type: String, required: true },
}, {
    timestamps: true,
});

const Enquery = mongoose.model('Enquery', newEnquery);

export default Enquery;