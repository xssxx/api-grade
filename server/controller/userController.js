import { encryptString } from "../utils/encryptString.js";
import axios from "axios";

axios.defaults.headers.common = {
  "app-key": "txCR5732xYYWDGdd49M3R19o1OVwdRFc",
  "content-type": "application/json",
  Referer: "https://my.ku.th/",
};

export const getToken = async (req, res) => {
  try {
    const username = encryptString(req.body.username);
    const password = encryptString(req.body.password);

    const response = await axios.post("https://myapi.ku.th/auth/login", {
      username,
      password,
    });

    const { accesstoken } = response.data;
    req.session.token = accesstoken;

    console.log(accesstoken);
    res.status(200).json(req.session);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getGrade = async (req, res) => {
  try {
    if (!req.session.token) {
      res.status(401).json({ message: "Unauthorization invalid token" });
      return;
    }

    const response = await axios.get(
      "https://myapi.ku.th/std-profile/checkGrades",
      { headers: { "x-access-token": req.session.token } }
    );

    res.status(200).json(response.data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
