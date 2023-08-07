import express from 'express';

export type Server = express.Application;
export type uuid =`${string}-${string}-${string}-${string}-${string}`
export type User = {
    id?: uuid,
    name?: string,
    email?: string,
    password?: string
}

export type ErrorRequestHandler = express.ErrorRequestHandler;