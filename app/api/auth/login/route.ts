import connectDB from "@/app/lib/mongodb";
import UserModel, { User } from "@/app/models/User";

// POST login existing user
export async function POST(request: Request) {
  try {
    await connectDB();

    const body = await request.json();
    const { username, password }: Partial<User> = body;

    // Validate user input
    if (!username || !password) {
      return Response.json(
        { success: false, error: 'Username and password are required.' },
        { status: 400 }
      );
    }

    const user = await UserModel.findOne({ username: username });

    if (!user || user.password != password) { // REPLACE WITH APPROPRIATE PASSWORD VALIDATION
      return Response.json(
        { success: false, error: 'Incorrect username or password.' },
        { status: 401 }
      );
    }

    return Response.json(
      {
        success: true,
        data: {
          _id: user.id,
          username: user.username,
          password: user.password,
          cards: user.cards,
        }
        // token: user.token,
      }, { status: 200 }
    )

  } catch (error) {
    // User not found error

    // // All other errors
    return Response.json(
      { success: false, error: 'Failed to login user: ' + error },
      { status: 500 }
    );
  }

}

// Present goal is to pass a user's id and a session token to session storage