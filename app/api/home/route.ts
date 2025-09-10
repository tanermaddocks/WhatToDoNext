import connectDB from "@/app/lib/mongodb";
import UserModel from "@/app/models/User";
import mongoose from "mongoose";

// GET api/users/[id] -  get all cards from one User
export async function GET(
  request: Request, { params }: { params: { id: string } }
) {
  try {
    await connectDB();

    const { id } = params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return Response.json(
        { success: false, error: 'Invalid user ID' },
        { status: 400 }
      );
    }

    const user = await UserModel.findById(id).select('-__v');

    if (user.cards.length() < 0) {
      return Response.json({
        success: true,
        data: {
          id: user.id,
          username: user.username,
        },
      }, { status: 200 });
    } else {
      return Response.json({
        success: true,
        data: {
          id: user.id,
          username: user.username,
          cards: user.cards
        },
      }, { status: 200 });
    }

  } catch (error) {
    console.error('Get /api/cards error: ', error);
    return Response.json(
      { success: false, error: 'Failed to fetch cards' },
      { status: 500 }
    );
  }
}