const mongoose = require('mongoose');

const newCenter = mongoose.Schema({
    centerName: { type: String, required: true },
    centerId: { type: String, required: true },
    ownerName: { type: String, required: true },
    mobile: { type: Number, required: true },
    address: [
        {
            place: { type: String, required: true },
            city: { type: String, required: true },
            district: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: Number, required: true },
        }
    ],
    email: { type: String, required: true },
    registration: { type: String, required: true },
    validity: { type: String, required: true },
    accessRight1: { type: Number, required: true },
    accessRight2: { type: Number, required: true },
    accessRight3: { type: Number, required: true },
    accessRight4: { type: Number, required: true },
    accessRight5: { type: Number, required: true },
    accessRight6: { type: Number, required: true },
    accessRight7: { type: Number, required: true },
    accessRight8: { type: Number, required: true },
    accessRight9: { type: Number, required: true },
    branch: [
        {
            id: { type: String, required: true },
            name: { type: String, required: true },
            address: {
                place: { type: String, required: true },
                city: { type: String, required: true },
                district: { type: String, required: true },
                state: { type: String, required: true },
                pincode: { type: String, required: true },
            },
        },
    ],
}, {
    timestamps: true,
});

const Center = mongoose.model('Center', newCenter);

export default Center;