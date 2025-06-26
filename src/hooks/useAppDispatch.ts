import { useDispatch } from "react-redux";
import { AppDispatchType } from "../lib/redux-toolkit/store";

const useAppDispatch: () => AppDispatchType = useDispatch; // Hook de dispatch des actions redéfini de manière typé

export default useAppDispatch;