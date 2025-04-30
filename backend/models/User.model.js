import mongoose from "mongoose";
import bcrypt from "bcryptjs";


const UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type: String
    },
    password:{
        type:String
    },
    role:{
        type:String,
        enum : ["user", "admin"],
        default: "user"
    },
    isVerified :{
        type: Boolean,
        default: false
    },
    verificationToken:{
        type: String,

    },
    resetPassword: {
        type: String,
    },
    resetPasswordToken: {
        type : String,
    }
},{
    timestamps : true
});

UserSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

const User = mongoose.model('User', UserSchema);

export default User;

