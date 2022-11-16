import { Request } from 'express';
import { Users } from '../user.entity';

interface RequestWithUser extends Request {
  _id: string;
}

export default RequestWithUser;