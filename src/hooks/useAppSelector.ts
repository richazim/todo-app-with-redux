import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootStateType } from "../lib/redux-toolkit/store";

const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector; // Hook de sélection des todos redéfini de manière typé

export default useAppSelector;