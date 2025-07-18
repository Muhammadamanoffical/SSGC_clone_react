import React from "react";
import "./QuickLinks.css";

function QuickLinks() {
  const cards = [
    { icon: "fas fa-briefcase", color: "blue", title: "Careers" },
    { icon: "fa-brands fa-free-code-camp", color: "orange", title: "Pay/View Bill" },
    { icon: "fas fa-file-alt", color: "yellow", title: "Register for E-Bill" },
    { icon: "fas fa-dollar-sign", color: "yellow", title: "Gas Tariff / Rates" },
    {
      icon: "fas fa-gas-pump",
      color: "dark",
      title: "RLNG Gas Connection\nGas Form & Societies",
    },
    {
      icon: "fas fa-industry",
      color: "yellow",
      title: "Meter Manufacturing Plant",
    },
    {
      icon: "fas fa-comment-dots",
      color: "blue",
      title: "Complaints / Feedback",
    },
    {
      icon: "fas fa-exclamation-triangle",
      color: "dark",
      title: "Defaulters' List",
    },
  ];

  return (
    <div className="container py-5">
      <div className="row g-4">
        {cards.map((item, index) => (
          <div className="col-12 col-sm-6 col-md-3" key={index}>
            <div className="quick-link">
              <div className={`quick-link-icon ${item.color}`}>
                <i className={item.icon}></i>
              </div>
              <div className="quick-link-title">
                {item.title.split("\n").map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickLinks;
