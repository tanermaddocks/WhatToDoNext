import connectDB from "@/app/lib/mongodb";
import UserModel, { User } from "@/app/models/User";
import CardModel, { cardProps } from "@/app/models/Card";


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
      data: user,
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