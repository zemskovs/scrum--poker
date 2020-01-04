import React from "react";
import {
	App,
	View,
	Page,
	LoginScreen,
	LoginScreenTitle,
	List,
	ListInput,
	ListButton,
	BlockFooter
} from "framework7-react";

import routes from "../routes";

export default function(props) {
	// Framework7 parameters here
	const f7params = {
		id: "io.framework7.testapp", // App bundle ID
		name: "Framework7", // App name
		theme: "md", // Automatic theme detection
		// App routes
		routes
	};

	return (
		<App params={f7params}>
			<View id="main-view" url="/" main className="safe-areas" pushState />

			<LoginScreen id="login-screen">
				<View>
					<Page loginScreen>
						<LoginScreenTitle>Login</LoginScreenTitle>
						<List form>
							<ListInput
								label="Username"
								name="username"
								placeholder="Username"
								type="text"
							/>
							<ListInput
								label="Password"
								name="password"
								placeholder="Password"
								type="password"
							/>
						</List>
						<List>
							<ListButton
								title="Sign In"
								loginScreenClose
							></ListButton>
							<BlockFooter>
								<p>Click Sign In to close Login Screen</p>
							</BlockFooter>
						</List>
					</Page>
				</View>
			</LoginScreen>
		</App>
	);
}
