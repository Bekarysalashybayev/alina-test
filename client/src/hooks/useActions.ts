import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {allActionCreators} from "@/store/reducers/action-creators.ts";

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(allActionCreators, dispatch)
}
