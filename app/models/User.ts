import { getModelForClass, modelOptions, prop, Severity } from '@typegoose/typegoose';
import { Card } from '@/app/models/Card'
import mongoose from 'mongoose';

export interface UserProps {
  id: string,
  username: string,
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})

export class User {
  @prop({
    required: true,
    unique: true,
  })
  // private username!: string;
  public username!: string;

  @prop({
    required: true,
    // select: false, // NEED TO UNCOMMENT WHEN VALIDATION IS SETUP
  })
  // private password!: string;
  public password!: string;

  @prop({ type: () => [Card]})
  public cards?: Card[];


  public createdAt?: Date;
  public updatedAt?: Date;
}

const UserModel = mongoose.models.User || getModelForClass(User);
export default UserModel;