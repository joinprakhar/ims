const mongoose = require('mongoose');

const newEmployee = mongoose.Schema({
    centerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Center',
    },
    Name: { type: String, required: true },
    mobile: { type: Number, required: true },
    password: {
        type: String,
        required: true,
    },
    address: {
        place: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: Number, required: true },
    },
    email: { type: String, required: true },
    qualification: { type: String, required: true },
    registration: { type: String, required: true },
    accessRight1: { type: Number, required: true },
    accessRight2: { type: Number, required: true },
    accessRight3: { type: Number, required: true },
    idProof: { type: String, required: true },
    idProofUpload: [
        {
            name: { type: String, required: true },
            file: { type: String, required: true },
        },
    ],
    isAdmin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: true,
});

const Employee = mongoose.model('Employee', newEmployee);

export default Employee;