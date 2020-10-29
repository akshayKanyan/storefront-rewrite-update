import axios from "axios";
import styles from "../styles/Home.module.css";
export const getStaticProps = async (context) => {
  let postData = await axios
    .get(
      `https://3pupscript.globexcorp.net/wp-json/wp/v2/pages/?slug=treatment-gor-hairloss`
    )
    .then((_) => {
      let { data = [] } = _;
      let { ACF } = data[0];
      return ACF || "";
    });

  return {
    revalidate: 10,
    props: {
      postData,
    },
  };
};

export default function Home({ postData = {} }) {
  console.log("sss", postData);
  let { label } = postData;
  return (
    <div className={styles.appMainPage}>
      <div className={styles.appHeaderContainer}>
        <h3 className={styles.headerLabel}>{label}</h3>
      </div>
      <div className={styles.container}>body</div>
    </div>
  );
}
