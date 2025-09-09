import connectDB from "../lib/mongodb";
import { users } from "../lib/sample-data";
import UserModel from "../models/User";


export async function seedAdmin() {
  try {
    await connectDB();

    const { username, password, cards } = users[0];

    const adminUser = await UserModel.create({
      username,
      password,
      cards,
    });

    return Response.json({
      success: true,
      data: adminUser,
      message: 'Admin seeded successfully',
    }, { status: 201 });

  } catch (error: any) {
    return Response.json(
      { success: false, error: 'Failed to seed admin' },
      { status: 500 }
    );
  }
};

