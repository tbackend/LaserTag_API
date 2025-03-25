import { prisma } from "../db/connectDB.js";

export const store = async (req, res) => {
    const { hexcode, macAddress, player } = req.body;
    if (!hexcode || !macAddress) {
        return res.status(400).json({
            message: "Data not recieved.",
        });
    }
    const data = await prisma.user.create({
        data: {
            player: player || null,
            hexcode,
            macAddress,
        },
    });
    res.status(200).json({
        message: "data entered",
        data,
    });
};
