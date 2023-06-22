import styles from "../assests/css/ChoiceList.module.css";
import { useState } from "react";
import Data from "../assests/MOCK_DATA.json";
import Pagination from "../components/Pagination";

const SeenList = () => {
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
      <h1>আপনার দেখা বায়োডাটার তালিকা</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>ক্রমিক</th>
            <th>বায়োডাটা নং</th>
            <th>তারিখ</th>
            <th>অপশন</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>01</td>
            <td>JSF-1001</td>
            <td>10/12/2023</td>
            <td>তথ্য দেখুন</td>
          </tr> */}

          {records.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
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
export default SeenList;
