import React from "react";
import { useSelector} from "react-redux";
import { dataAllArticles } from "../feauture/getArticleSlice";

const Articles = () => {
    const getArticle = useSelector(dataAllArticles);
    console.log(getArticle);

  return (
    <div className="w-full h-18 flex flex-row flex-wrap items-center gap-3 justify-around  p-8">
        <h3 className="font-bold text-xl text-black mb-10">Apa yang membuat Qwords berbeda dari yang lain?</h3>
      {getArticle.map((dt) => {
        if(dt.id % 2 === 0){
            return (
              <div className=" flex flex-col p-5 rounded-lg">
                <h3 className="font-bold text-lg mb-4 text-black">{dt.title}</h3>
                <div className="flex flex-row w-full items-center">
                  <h4 className="text-base text-gray-800 mt-4">{dt.content}</h4>
                  <div className="w-full flex justify-end ">
                    <img src={dt.image} className="h-44" alt="gambar" />
                  </div>
                </div>
              </div>
            );
        }else {
               return (
                 <div className=" flex flex-col p-5 rounded-lg">
                   <h3 className="font-bold text-lg mb-4 text-black">{dt.title}</h3>
                   <div className="flex flex-row w-full items-center mb-4">
                     <div className="w-full flex ">
                       <img src={dt.image} className="h-44" alt="gambar" />
                     </div>
                      <h4 className="text-base text-gray-800 mt-4">{dt.content}</h4>
                   </div>
                 </div>
               );
        }
     
      })}
    </div>
  );
};

export default Articles;
