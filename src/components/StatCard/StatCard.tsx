import React from 'react';
import './StatCard.css';

interface StatCardColors {
  valueColor: string;
  periodColor: string;
  iconColor: string;
  iconBgColor: string;
}

interface StatCardProps {
  title: string;
  value: string | number;
  period: string;
  icon: React.ReactNode;
  onClick?: () => void;
  colors: StatCardColors;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, period, icon, onClick, colors }) => {
  return (
    <div className="stat-card" onClick={onClick}>
      <div className="stat-card-content">
        <div className="stat-card-info">
          <h3 className="stat-card-title">{title}</h3>
          <p 
            className="stat-card-value" 
            style={{ color: colors.valueColor }}
          >
            {value}
          </p>
          <p 
            className="stat-card-period" 
            style={{ color: colors.periodColor }}
          >
            {period}
          </p>
        </div>
        <div 
          className="stat-card-icon"
          style={{ 
            backgroundColor: colors.iconBgColor,
            color: colors.iconColor 
          }}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;