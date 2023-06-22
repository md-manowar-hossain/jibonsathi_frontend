import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Data from "../assests/MOCK_DATA.json";
import Pagination from "../components/Pagination";

export default function DemoPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumbers = [];

  const recordPerPage = 20;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  const totalPage = Math.ceil(Data.length / recordPerPage);

  const pageRange = 1;
  const startPage = Math.max(currentPage - pageRange, 1)
  const endPage = Math.min(currentPage + pageRange, totalPage)

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <NavBar />
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Fast Name</th>
            <th>Last Name </th>
            <th>Email</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
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

      <Pagination startPage={startPage} endPage={endPage} pageNumbers={pageNumbers} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
      <Footer />
    </>
  );
}
