import styles from "../assests/css/pagecss/AllBiodata.module.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeadTitle from "../components/HeadTitle";
import Pagination from "../components/Pagination";
import BiodataIntro from "../components/BiodataIntro";
import Filter from "../components/Filter";
import Data from "../assests/MOCK_DATA.json";
import { useState } from "react";

export default function AllBiodata() {
  const [isVisible, setVisible] = useState(false);

  // Pagination
  // const [posts, setposts] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(10);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     const res = await axios.get('url');
  //     setposts(res.data);
  //     setLoading(false);
  //   }
  //   fetchData();
  // }, [])

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

  const handleClick = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <NavBar />
      <div className={styles.Container}>
        <div className={styles.biodataContainer}>
          <HeadTitle />
          <div className={styles.biodataWrapper}>

            <BiodataIntro records={records} />
            
          </div>
          <Pagination
            startPage={startPage}
            endPage={endPage}
            pageNumbers={pageNumbers}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPage={totalPage}
          />
        </div>
        <div
          className={
            isVisible
              ? `${styles.filterWrapper} ${styles.visible}`
              : styles.filterWrapper
          }
        >
          <Filter />
        </div>
        <div className={styles.filterbuttonContainer}>
          <button onClick={handleClick}>Filter</button>
        </div>
      </div>
      <Footer />
    </>
  );
}
