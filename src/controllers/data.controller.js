import { prisma } from "../db/connectDB.js";

export const putData = async (req, res) => {
    const { hexcode } = req.body;
    if (!hexcode) {
        return res.status(400).json({
            message: "Data not recieved.",
        });
    }
    const data = await prisma.user.create({
        data: {
            hexcode: "test",
        },
    });
    res.status(200).json({
        message: "data entered",
        data,
    });
};
