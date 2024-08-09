import { genSalt, hash } from "bcrypt-ts";

export default async function saltText(text: string, rounds: number) {
  const hashed = genSalt(rounds)
    .then((salt) => hash(text, salt))
    .then((hash) => {
      return hash;
    });
  return hashed;
}
