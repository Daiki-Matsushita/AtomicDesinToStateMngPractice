import { atom } from "recoil";

export const userState = atom({
  key: "userState", //ほかのrecoilの値とかぶってはいけないので、ファイル名と同じにしておけばいい
  default: { isAdmin: false },
});
