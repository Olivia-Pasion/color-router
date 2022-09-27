import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <div className="fill" style={{ background: `rgb(${r}, ${g}, ${b})` }}>
      <p>{ `rgb(${r}, ${g}, ${b})` }</p>
    </div>
  );
}
