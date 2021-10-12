import {FileUpload} from "../reducers/RecinciliationReducer";
import {useAppDispatch} from "../store/store";
import {useSelector} from "react-redux";
import {RootState} from "../store/rootReducer";

const useReconciliation = () => {

    const dispatch = useAppDispatch();

    const matchedRecords = useSelector((state: RootState) => state.ReconciliationReducer.matched);
    const unMatchedRecords = useSelector((state: RootState) => state.ReconciliationReducer.unmatched);
    const errorMessage = useSelector((state: RootState) => state.ReconciliationReducer.error);
    const isLoading = useSelector((state: RootState) => state.ReconciliationReducer.isLoading);

    const handleFileUpload = (fileOne: File, fileTwo: File) => {

        const formData = new FormData();
        formData.append("fileOne", fileOne)
        formData.append("fileTwo", fileTwo)

        dispatch(FileUpload(formData));


    }

    return {
        handleFileUpload,
        unMatchedRecords,
        matchedRecords,
        isLoading,
        errorMessage
    }

}


export {
    useReconciliation
}