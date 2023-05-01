import crypto from "crypto";
import dotenv from "dotenv";
dotenv.config({ path: "../config/.env" });

export const encryptString = (data) => {
  return crypto
    .publicEncrypt(
      {
        key: process.env.kuPublicKey.replace(/\\n/gm, "\n"),
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
      },
      Buffer.from(data, "utf-8")
    )
    .toString("base64");
};
