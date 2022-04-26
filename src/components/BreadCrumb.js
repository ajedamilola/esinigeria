import { Link } from "gatsby";
import React from "react";

export default function BreadCrumb({ pages,className }) {
  var index = 0;
  return (
    <nav aria-label="breadcrumb" className={`${className}`}>
      <ol class="breadcrumb">
        {pages.map((page) => {
          index++;
          if (page.active) {
            return (
              <li class="breadcrumb-item active">
                <Link aria-current="page">{page.title}</Link>
              </li>
            );
          }
          return (
            <li class="breadcrumb-item">
              <Link to={page.to}>{page.title}</Link>
            </li>
          );
        })}
        <li class="breadcrumb-item active">
        </li>
      </ol>
    </nav>
  );
}
