import { UsernameActionType } from "./username";
import { ProfileActionType } from "./profile";

type AllActionType = ProfileActionType | UsernameActionType | ReposActionType;

export type MyDispatchType = (args: AllActionType) => AllActionType;
