import React from 'react';
import moment from "moment";
import { LuArrowRight, LuUtensils } from "react-icons/lu"; 
import TransactionInfoCard from '../Cards/TransactionInfoCard';

const RecentTransactions = ({ transactions, onSeeMore }) => {
  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg">Income</h5>

        <button className="card-btn" onClick={onSeeMore}>
          See All <LuArrowRight className="text-base" />
        </button>
      </div>

      <div className="mt-6">
        {transactions?.slice(0, 5)?.map((item) => (
          <TransactionInfoCard
            key={item._id}
            title={item.source}
            icon={<LuUtensils />} 
            date={
              moment(new Date(item.date)).isValid()
                ? moment(new Date(item.date)).format("Do MMM YYYY")
                : "Invalid date"
            }

            amount={item.amount}
            type="income"
            hideDeleteBtn
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;
