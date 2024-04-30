
const { OTP } = require("../models/OTP");

async function storeOTP(email, otp) {
    try {
        const existingOTP = await OTP.findOne({ email: email });

        if (existingOTP) {
            
            await OTP.findOneAndUpdate(
                { email: email },
                { $set: { otp: otp, createdAt: new Date() } },
                { new: true }
            );
        } else {
          
            const newOTP = new OTP({
                email: email,
                otp: otp,
                createdAt: new Date()
            });
            await newOTP.save();
        }
    } catch (error) {
        console.error("Error storing OTP:", error);
        throw error; 
    }
}

module.exports = {
    storeOTP
}
