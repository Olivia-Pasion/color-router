import { useParams } from 'react-router-dom';

export default function RGB() {
  const { r, g, b } = useParams();
  return (
    <div className="fill" style={{ background: `rgb(${r}, ${g}, ${b})` }}></div>
  );
}
