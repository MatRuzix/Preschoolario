import { compare } from "bcrypt-ts";

export default async function compareHash(text: string, hashedText: string) {
  const isValid = compare(text, hashedText).then((result) => {
    return result;
  });
  return isValid;
}
