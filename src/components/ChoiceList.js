import styles from "../assests/css/ChoiceList.module.css";
import { useState } from "react";
import Data from "../assests/MOCK_DATA.json";
import Pagination from "../components/Pagination";

const ChoiceList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  const recordPerPage = 8;
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
      <h1>পছন্দের তালিকা</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ক্রমিক</th>
            <th>বায়োডাটা নং</th>
            <th>জন্ম সাল</th>
            <th>ঠিকানা</th>
            <th>অপশন</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>01</td>
            <td>JSF-1001</td>
            <td>1998</td>
            <td>বরিশাল</td>
            <td>দেখুন</td>
          </tr> */}

          {records.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>{data.email}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>

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
export default ChoiceList;
