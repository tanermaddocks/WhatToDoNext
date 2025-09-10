import connectDB from "@/app/lib/mongodb";
import UserModel from "@/app/models/User";


// GET all users - dev only
export async function GET() {
  await connectDB();

  const users = await UserModel.find().select('_id username');

  return Response.json(
    {
      success: true,
      data: users,
    }
  )

}

