import React from "react";
import SingleItem from "./SingleItem.jsx";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  const { pathname } = useLocation(); // serve para saber qual url eu estou acessando
  //console.log(pathname);

  const isHome = pathname === "/";
  //const finalItems = isHome ? items : itemsArray.length
  const finalItems = isHome ? items : Infinity

  return (
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? (
          <Link to={path} className="item-list__link">
            mostrar tudo
          </Link>
        ) : (
          <></>
        )}

      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((current, index) => index < finalItems)
          .map((current, index) => (
            <SingleItem
              // _id={current._id}
              // name={current.name}
              // image={current.image}
              // banner={current.banner}
              idPath={idPath}
              {...current}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
