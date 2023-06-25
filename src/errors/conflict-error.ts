import { ApplicationError } from "@/protocols/error.protocol";

export function conflictError(message: string): ApplicationError {
  return {
    name: "ConflictError",
    message,
  };
}
