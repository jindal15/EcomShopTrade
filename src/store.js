import { createStore, compose } from "redux";
import { createBrowserHistory } from "history";
import reducer from "./reducers/index";
import { devToolsEnhancer } from "redux-devtools-extension/logOnly";
export const history = createBrowserHistory();

const store = createStore(
  reducer,
  {},
  compose(
    devToolsEnhancer({
      instaceID: 1,
      name: "Blacklisted",
      actionsBlacklist: "..."
    }),
    devToolsEnhancer({
      instaceID: 2,
      name: "Whitelisted",
      actionsWhitelist: "..."
    })
  )
);
export default store;
