import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProgressChart({ value }: { value: number }) {
  return (
    <div className="w-32 h-32">
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: '#10B981',
          textColor: '#111827',
          trailColor: '#E5E7EB',
        })}
      />
    </div>
  )
}
