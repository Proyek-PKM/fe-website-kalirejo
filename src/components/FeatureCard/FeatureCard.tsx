import { Link } from "react-router-dom";
import './FeatureCard.css';

interface FeatureCardProps {
  to: string;
  icon: string;
  title: string;
  description: string;
}

const FeatureCard = ({ to, icon, title, description }: FeatureCardProps) => {
  return (
    <Link to={to} className="feature-card-link">
      <section className="feature-card-content">
        <img
          src={icon}
          alt={title}
          className="feature-card-icon"
        />
        <h2 className="feature-card-title">
          {title}
        </h2>
        <p className="feature-card-description">
          {description}
        </p>
      </section>
    </Link>
  );
};

export default FeatureCard;
