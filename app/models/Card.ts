import { getModelForClass, modelOptions, prop, Severity } from '@typegoose/typegoose';
import mongoose from 'mongoose';

export interface CardProps {
  id?: string;
  cardBody: string;
  status: string;
  dueDate: string;
}

export enum Status {
  TODO = 'to-do',
  DOING = 'doing',
  DONE = 'done',
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW
  }
})

export class Card {
  @prop({
    required: true,
    trim: true,
  })
  public cardBody!: String;

  @prop({
    required: true,
    enum: Status,
  })
  public status!: String;

  @prop({
    required: true,
  })
  public dueDate!: String;

  public createdAt?: Date;
  public updatedAt?: Date;
}

const CardModel = mongoose.models.Card || getModelForClass(Card);
export default CardModel;