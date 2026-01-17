import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";

export const getAllTimelines = catchAsyncErrors(async (req, res, next) => { });
export const postTimeline = catchAsyncErrors(async (req, res, next) => { });
export const deleteTimeline = catchAsyncErrors(async (req, res, next) => { });