import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    age: Number,
    password: String,
    cart: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'carts'
        }
    ],
    role: {
        type: String,
        enum: ['user', 'admin', 'premium'], 
    },
    last_connection: Date,
});

userSchema.pre("find", function(){
    this.populate("cart");
})

const userModel = mongoose.model(userCollection, userSchema);

export default userModel;
