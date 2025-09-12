import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/main.scss";
import App from "./App.jsx";
import { I18nProvider } from "./i18n/i18nProvider.js";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<I18nProvider>
			<App />
		</I18nProvider>
	</StrictMode>,
);
