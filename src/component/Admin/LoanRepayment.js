import React from "react";

const LoanRepayment = () => {
  return (
    <div class="post-container">
      <div class="loan-payment">
        <section id="admin-dashboard-section">
          <h1 class="h1">Post Repayment</h1>
          <section class="accounts">
            <article class="post-account-details">
              <p class="close">
                <i class="fas fa-window-close"></i>
              </p>
              <label class="labell" for="id">
                Client's id
              </label>

              <article>
                <input type="text" placeholder="Name" />
              </article>
              <label for="CreatedOn">Transaction Date</label>

              <article>
                <input type="date" placeholder="Name" id="CreatedOn" />
              </article>
              <label for="Amount">Amount</label>

              <article>
                <input type="text" placeholder="Amount" id="Amount" />
              </article>

              <div class="post-loan-btn">
                <button type="submit" class="post-loan-button">
                  Submit
                </button>
              </div>
            </article>
          </section>
        </section>
      </div>
    </div>
  );
};

export default LoanRepayment;
