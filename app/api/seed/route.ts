import connectDB from "@/app/lib/mongodb";
import defaultAdmin from "@/app/lib/sample-data";
import UserModel from "@/app/models/User";
import CardModel from "@/app/models/Card";


export async function POST(request: Request) {
  try {
    await connectDB();

    const { username, password, cards: unmodeledCards  } = defaultAdmin;

    const card0 = await CardModel.create(unmodeledCards[0]);
    const card1 = await CardModel.create(unmodeledCards[1]);
    const card2 = await CardModel.create(unmodeledCards[2]);
    const card3 = await CardModel.create(unmodeledCards[3]);

    const cards = [card0, card1, card2, card3];

    const adminUser = await UserModel.create({
      username,
      password,
      cards,
    });

    return Response.json({
      success: true,
      data: adminUser,
      message: 'Admin seeded successfully.',
    }, { status: 201 });

  } catch (error: any) {
    console.error('POSt /api/user error: ', error);

    // Duplicate key error
    if (error.code === 11000) {
      return Response.json(
        { success: false, error: 'SystemAdmin already seeded.' },
        { status: 400 }
      )
    };

    // All other errors
    return Response.json(
      { success: false, error: 'Failed to create admin' },
      { status: 500 }
    );
  }
};