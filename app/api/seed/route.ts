import connectDB from "@/app/lib/mongodb";
import UserModel from "@/app/models/User";

export async function POST(request: Request) {
  try {
    await connectDB();

    const username = process.env.ADMIN_USERNAME
    const password = process.env.ADMIN_PASSWORD

    const adminUser = await UserModel.create({
      username,
      password,
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