import { Response } from 'express';

import { BaseEntity } from '@src/core/domain/entities/BaseEntity';

import { BaseRepositoryImpl } from '@src/infrastructure/repositories/BaseRepositoryImpl';

import { BaseError } from '@src/errors/BaseError';

export class BaseController<K extends BaseEntity, T extends BaseRepositoryImpl<K>> {
  protected repository: T;

  constructor(repository: T) {
    this.repository = repository;
  }

  static sendSuccessResponse = <T>(res: Response, data: T, statusCode: number) => {
    const responseBody = { data, success: true };
    res.status(statusCode).send(responseBody);
  };

  static sendErrorResponse = (res: Response, error: unknown): void => {
    const isError = error instanceof Error;
    const isHandledError = error instanceof BaseError;

    const status = isHandledError ? error.statusCode : 500;
    const responseBody = {
      message: isError ? error.message : 'An unknown error has ocurred',
      success: false,
    };

    res.status(status).send(responseBody);
  };
}
