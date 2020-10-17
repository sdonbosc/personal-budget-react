import React from "react";
import PieChart from "../PieChart/PieChart";
import Chart from "../Chart/Chart";
import "./HomePage.scss" 

function HomePage() {
  return (
    <main className="center" id="main">
      <div className="page-area">
        <h1 class = "Chart-title" >D3JS PieChart</h1>
        <PieChart />
        <Chart />
        <p>
          Do you know where you are spending your money? If you really stop to
          track it down, you would get surprised! Proper budget management
          depends on real data... and this app will help you with that!
          <nav>
            <a href="https://www.mint.com/budgeting-3/sample-budget-template-control-where-your-money-is-going">
              Mint
            </a>{" "}
            |
            <a href="https://www.thebalance.com/basic-monthly-budget-worksheet-1289585">
              TheBalance
            </a>{" "}
            |
            <a href="http://www.skillstoolbox.com/financial-skills/basic-personal-budgeting/personal-budget-example/">
              SkillsTool
            </a>{" "}
            |
          </nav>
        </p>
      </div>

      <div class="text-box">
        <h1>Alerts</h1>
        <p>
          What if your clothing budget ended? You will get an alert. The goal is
          to never go over the budget.
        </p>
      </div>

      <div class="text-box">
        <h1>What to Include in Personal Budget</h1>
        <p>
          A personal budget or home budget is a finance plan that allocates
          future personal income towards expenses, savings and debt repayment.
          Past spending and personal debt are considered when creating a
          personal budget. ... For example, jobs are an income source, while
          bills and rent payments are expenses.
        </p>
      </div>
    </main>
  );
}

export default HomePage;
