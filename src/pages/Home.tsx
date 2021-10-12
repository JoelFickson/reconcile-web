import React, {SyntheticEvent, useState} from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import {Link} from 'react-router-dom';
import {useReconciliation} from "../core/hooks/useReconciliation";
import MainLayout from "../core/layouts/MainLayout";

type FormFields = {
    firstFile: any,
    secondFile: any,
};


const Home: React.FC = () => {

    const {handleFileUpload, matchedRecords, unMatchedRecords, isLoading} = useReconciliation();

    const [isValidFile, setValidState] = useState<boolean>(true);


    const {handleSubmit} = useForm<FormFields>();


    const [fileInputOne, setFileOne] = useState<File>();
    const [fileInputTwo, setFileTwo] = useState<File>();
    const [FieldsError, setFieldsError] = useState<string>();

    const handleFileSelectTwo = async (element: HTMLInputElement) => {
        const secondFile = element.files;


        if (secondFile) {
            const type = secondFile[0].type.split("/")[1];

            if (type !== "csv") {
                setValidState(false);
            } else {
                setValidState(true);
                setFileTwo(secondFile[0])
            }


        }


    }
    const handleFileSelectOne = async (element: HTMLInputElement) => {
        const firstFile = element.files;

        if (firstFile) {

            const type = firstFile[0].type.split("/")[1];

            if (type !== "csv") {
                setValidState(false);
            } else {
                setValidState(true);
                setFileOne(firstFile[0])
            }


        }
    }

    const onSubmit: SubmitHandler<FormFields> = () => {

        if (!isValidFile) {
            setFieldsError("Your files are not in valid formats")
            return;
        }

        if (fileInputOne && fileInputTwo) {

            handleFileUpload(fileInputOne, fileInputTwo);
            setFieldsError("")
        } else {
            setFieldsError("Please select files")
        }

    };

    return (
        <MainLayout>
            <div className="container p-2">


                <h1 className='text-center text-primary p-2'>Tutuka Reconciliation System </h1>
                <div className="col-md-6 mx-auto">
                    {FieldsError && <p className='alert alert-danger'>{FieldsError}</p>}
                    {
                        isValidFile === false ?
                            <p className='alert text-center alert-warning'>One or more files aren't in valid
                                formats</p> : ""
                    }
                </div>


                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='col-md-6 p-4 rounded mx-auto shadow row'>

                        <div className="col-md-12  p-3">
                            <label htmlFor="first_file" className="form-label">Choose First File</label>
                            <input required type="file"
                                   onChange={(e: SyntheticEvent) => handleFileSelectOne(e.currentTarget as HTMLInputElement)}
                                   className="form-control" name='firstFile'
                                   id="first_file"/>
                        </div>
                        <div className="col">
                            <label htmlFor="second_file" className="form-label">Choose Second File</label>
                            <input required type="file"

                                   onChange={(e: SyntheticEvent) => handleFileSelectTwo(e.currentTarget as HTMLInputElement)}
                                   className="form-control" name='secondFile'
                                   id="second_file"/>
                        </div>
                        <div className="col-12 p-2 mt-3 ms-2">
                            <button disabled={isLoading} type="submit"
                                    className="btn btn-primary mb-3">
                                {isLoading ? "Loading" : "Compare Files"}
                            </button>
                        </div>


                    </div>
                </form>

                {
                    matchedRecords && unMatchedRecords ?
                        <div className='col-md-6 p-5 card shadow-sm   mx-auto mt-5'>
                            {isLoading ? "Please wait..." : <div>

                                <h5>Reconciliation Report</h5>
                                <hr/>


                                <h6> Matched Records: {matchedRecords && matchedRecords?.length}</h6>
                                <h6> UnMatched Records: {unMatchedRecords && unMatchedRecords?.length} :
                                    <Link to='/details'>See More</Link></h6>


                            </div>}
                        </div> : ""
                }


            </div>
        </MainLayout>
    );
}

export default Home;
