import connectDB from '@/app/lib/mongodb';
import UserModel from '@/app/models/User';
import { cardProps } from '@/app/models/Card';
// GET all cards from one User



export async function GetCards(userId: string) {
  try {
    await connectDB();

    const user = await UserModel.findById(userId)
      .sort({ createdAt: 1 });
    const cards = user.cards

    return Response.json({
      success: true,
      data: user.cards,
      count: user.cards.length,
    });
  } catch (error) {
    console.error('Get /api/cards error: ', error);
    return Response.json(
      { success: false, error: 'Failed to fetch cards' },
      { status: 500 }
    )
  }
}