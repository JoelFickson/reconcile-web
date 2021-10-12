import {useReconciliation} from "../core/hooks/useReconciliation";
import MainLayout from "../core/layouts/MainLayout";

interface Record {
    TransactionID: string,
    ProfileName: string,
    TransactionAmount: string,
    TransactionDate: string,
    TransactionDescription: string,
    TransactionNarrative: string,
    TransactionType: string,
    WalletReference: string,

}

const Details = () => {
    const {unMatchedRecords} = useReconciliation();
    return <MainLayout>
      <div className="col-md-12 p-5">
          <h1 className='text-info text-center p-2'>Unmatched Records</h1>
          <table className="table">
              <thead>
              <tr>
                  <th scope="col">Transaction ID</th>
                  <th scope="col">Profile Name</th>
                  <th scope="col">Transaction Amount</th>
                  <th scope="col">Transaction Date</th>
                  <th scope="col">Transaction Description</th>
                  <th scope="col">Transaction Narrative</th>
                  <th scope="col">Transaction Type</th>
                  <th scope="col">Wallet Reference</th>
              </tr>
              </thead>
              <tbody>

              {
                  unMatchedRecords && unMatchedRecords.map((record: Record) => {
                          return <tr>
                              <td>{record.TransactionID}</td>
                              <td>{record.ProfileName}</td>
                              <td>{record.TransactionAmount}</td>
                              <td>{record.TransactionDate}</td>
                              <td>{record.TransactionDescription}</td>
                              <td>{record.TransactionNarrative}</td>
                              <td>{record.TransactionType}</td>
                              <td>{record.WalletReference}</td>


                          </tr>
                      }
                  )
              }
              </tbody>
          </table>
      </div>

    </MainLayout>


}

export default Details