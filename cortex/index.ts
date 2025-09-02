// cortex/index.ts

import { Controller } from "./framework/controller";
import { IRequest } from "./core/IRequest";

// add more framework exports as you build them
// e.g. Response, Validator, Logger, etc.

export const Cortex = {
    Controller,
    IRequest,
};
