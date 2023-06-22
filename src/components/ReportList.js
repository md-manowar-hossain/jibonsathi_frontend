import styles from "../assests/css/ChoiceList.module.css";
import { useState } from "react";
import Data from "../assests/MOCK_DATA.json";
import Pagination from "../components/Pagination";

const ReportList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  const recordPerPage = 10;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const totalPage = Math.ceil(Data.length / recordPerPage);

  const pageRange = 1;
  const startPage = Math.max(currentPage - pageRange, 1);
  const endPage = Math.min(currentPage + pageRange, totalPage);

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.contentWrapper}>
      <h1>রিপোর্ট তালিকা</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ক্রমিক</th>
            <th>রিপোর্ট আইডি</th>
            <th>বায়োডাটা নং</th>
            <th>স্টাটাস</th>
            <th>তারিখ</th>
            <th>উত্তর</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>01</td>
            <td>1425</td>
            <td>JSF-1001</td>
            <td>Active</td>
            <td>12/12/2023</td>
            <td>ব্যাবস্থা নেওয়া হয়েছে</td>
          </tr> */}

          {records.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
              <td>{data.ip_address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Section  */}
      <Pagination
        startPage={startPage}
        endPage={endPage}
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPage={totalPage}
      />
    </div>
  );
};
export default ReportList;
