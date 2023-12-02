import { CustomError } from "../../modules/Error/custom-errors"

export const GqlHandleError = (error: unknown) => {
  if (error instanceof CustomError) {
    return {
      message: error.message,
      error: true
    }
  }

  return {
    message: "Internal Server Error",
    error: true
  }
}
