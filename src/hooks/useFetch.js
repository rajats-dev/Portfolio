import { useEffect, useState } from "react";
import { urls, urlsLang } from "../data";

const useFetch = () => {
  const [repoData, setRepoData] = useState([]);
  const [repoLang, setRepoLang] = useState([]);

  useEffect(() => {
    fetchAPI();
    fetchLanguage();
  }, []);

  const fetchAPI = async () => {
    try {
      const url = urls.map((url) => fetch(url));
      const responses = await Promise.all(url);
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setRepoData(data);
    } catch (error) {
      console.error("Error fetching repository languages:", error);
      throw error;
    }
  };

  const fetchLanguage = async () => {
    try {
      const urlLang = urlsLang.map((url) => fetch(url));
      const responses = await Promise.all(urlLang);
      const data = await Promise.all(
        responses.map((response) => response.json())
      );
      setRepoLang(data);
    } catch (error) {
      console.error("Error fetching repository languages:", error);
      throw error;
    }
  };

  const objLang = repoLang.map((lang) => {
    const total = lang.JavaScript + lang.HTML + lang.CSS;
    const jsPer = (lang.JavaScript / total) * 100;
    const htmlPer = (lang.HTML / total) * 100;
    const cssPer = (lang.CSS / total) * 100;
    return {
      javaScript: jsPer.toFixed(2),
      html: htmlPer.toFixed(2),
      css: cssPer.toFixed(2),
    };
  });

  const calculateDate = (datestr) => {
    const date = new Date(datestr);
    const dateObj = { month: "short", day: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", dateObj);
    return formattedDate;
  };

  const repoObj = repoData.map((item, i) => {
    return {
      name: item.name,
      cloneURL: item.clone_url,
      repoURL: item.html_url,
      stars: item.stargazers_count,
      updatedAt: calculateDate(item.updated_at),
      lang: {
        ...objLang[i],
      },
    };
  });

  return repoObj;
};

export default useFetch;
