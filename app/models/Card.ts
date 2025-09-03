import { getModelForClass, modelOptions, prop, Severity } from '@typegoose/typegoose';

enum Status {
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
  public cardBody!: string;

  @prop({
    required: true,
    enum: Status,
  })
  public status!: string;

  public dueDate?: Date;
  public createdAt?: Date;
  public updatedAt?: Date;
}

const CardModel = getModelForClass(Card);
export default CardModel;