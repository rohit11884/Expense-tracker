import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Label,
} from "recharts";
import CustomTooltip from './CustomTooltip';
import CustomLegend from './CustomLegend';

const SOURCE_COLOR_MAP = {
  Gambling: "#875CF5",
  salary: "#FA2C37",
  Trading: "#FF6900",
  Other: "#4f39f6"
};


const CustomPieChart = ({
  data,
  label,
  totalAmount,
  colors,
  showTextAnchor
}) => {

  const renderCenterLabel = () => {
    return (
      <>
        <text
          x="50%"
          y="50%"
          dy={-20}
          textAnchor="middle"
          fill="#666"
          fontSize="14"
        >
          {label}
        </text>
        <text
          x="50%"
          y="50%"
          dy={10}
          textAnchor="middle"
          fill="#333"
          fontSize="24"
          fontWeight="600"
        >
          ${totalAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </text>
      </>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={380}>
      <PieChart>
        <Pie
          data={data}
          dataKey="amount"
          cx="50%"
          cy="50%"
          outerRadius={130}
          innerRadius={100}
          labelLine={false}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}

          {/* ✅ Custom center text using Label */}
          {showTextAnchor && (
            <Label position="center" content={renderCenterLabel} />
          )}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend content={<CustomLegend />} />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;
