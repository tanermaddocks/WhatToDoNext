import connectDB from '@/app/lib/mongodb';
import UserModel from '@/app/models/User';
import mongoose from 'mongoose';


// GET all cards from one User
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
      )
    }

    const user = await UserModel.findById(id).select('-__v')
    const cards = user?.cards

    if (!cards) {
      return Response.json({
        success: true,
        data: "You're all done!",
        count: 0,
      });
    } else {
      return Response.json({
        success: true,
        data: cards,
        count: cards.length,
      });
    }

  } catch (error) {
    console.error('Get /api/cards error: ', error);
    return Response.json(
      { success: false, error: 'Failed to fetch cards' },
      { status: 500 }
    )
  }
}