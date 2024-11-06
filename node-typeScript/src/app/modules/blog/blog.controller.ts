import { RequestHandler } from 'express';
import { getAllBlog } from './blog.services';
import { TBLOG } from './blog.interface';
import AppError from '../../errors/AppError';
import catchAsync from '../../utils/catchAsync';

export const GETAllBlog: RequestHandler = catchAsync(
  async (req, res, next): Promise<void> => {
    const result: Partial<TBLOG> = await getAllBlog();

    if (result) throw new AppError('man and lan are not same value!', 404);

    res.status(200).json({
      success: 'true',
      statusCode: 200,
      message: 'Service created successfully',
      data: result,
    });
  }
);
