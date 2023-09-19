const mongoose = require('mongoose');
import bcrypt from 'bcryptjs';

const newStudent = mongoose.Schema({
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
    studentId: { type: String, required: true },
    studentName: { type: String, required: true },
    mobile: { type: Number, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    father: { type: String, required: true },
    gender: { type: String, required: true },
    qualification: { type: String, required: true },
    center: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    idProof: { type: String, required: true },
    dob: { type: String, required: true },
    admissionDate: { type: String, required: true },
    address: {
        place: { type: String, required: true },
        city: { type: String, required: true },
        district: { type: String, required: true },
        state: { type: String, required: true },
        pincode: { type: Number, required: true },
    },
    idProofUpload: [
        {
            name: { type: String, required: true },
            file: { type: String, required: true },
        },
    ],
    payment: [
        {
            paymentAmount: { type: Number, required: true },
            paymnetdate: { type: String, required: true },
            paymentMode: { type: String, required: true },
            paymentReference: { type: String, required: true },
        },
    ],
    Course: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'Course',
        }
    ],
    totalFee: { type: String, required: true },
    balanceFee: { type: String, required: true },
    balanceFee: { type: Number, required: true },
    result: { type: String, }
}, {
    timestamps: true,
});

userSchema.methods.matchPassword = async function (enterdpassword) {
    return await bcrypt.compare(enterdpassword, this.password)
};

newStudent.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const Student = mongoose.model('Student', newStudent);

export default Student;