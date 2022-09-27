import { Switch, Route } from 'react-router-dom';
import RGB from '../RGB/RGB';
import NotFound from '../NotFound/NotFound';
import './ScreenColor.css';

export default function ScreenColor() {
  return (
    <div>
      <Switch>
        <Route exact path="/rgb/:r/:g/:b">
          <RGB />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}
