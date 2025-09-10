import connectDB from "@/app/lib/mongodb";
import UserModel, { User } from "@/app/models/User";
import CardModel from "@/app/models/Card";
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
    const username = user?.username;
    const cards = user?.cards;

    if (!cards) {
      return Response.json({
        success: true,
        data: username,
        count: 0,
      }, { status: 200 });
    } else {
      return Response.json({
        success: true,
        data: { username, cards },
        count: cards.length,
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

// POST new user
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { username, password }: Partial<User> = body;

    // Create a sample card to add to the new profile
    const today: string = new Date().toISOString().split('T')[0];
    const sampleCard = await CardModel.create({
      cardBody: "First task: Make a task!",
      status: "to-do",
      dueDate: today,
    });
    const cards = [sampleCard];

    // Validate user input
    if (!username || !password) {
      return Response.json(
        { success: false, error: 'Username and password are required.' },
        { status: 400 }
      );
    }

    const user = await UserModel.create({ username, password, cards })

    return Response.json({
      success: true,
      data: {
        id: user.id,
        username: user.username,
        cards: user.cards,
      },
      message: 'User created successfully'
    }, { status: 201 });


  } catch (error: any) {
    console.error('POSt /api/user error: ', error);

    // Duplicate key error
    if (error.code === 11000) {
      return Response.json(
        { success: false, error: 'Username already in use' },
        { status: 400 }
      )
    };

    // Handle Typegoose validation errors
    if (error.name === 'ValidationError') {
      const validationErrors = Object.values(error.errors).map((err: any) => err.message);
      return Response.json(
        { success: false, error: 'Validation failed', details: validationErrors },
        { status: 400 }
      )
    };

    // All other errors
    return Response.json(
      { success: false, error: 'Failed to create user' },
      { status: 500 }
    );

  }
}