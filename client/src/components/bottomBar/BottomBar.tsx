import React from "react";
import { Toolbar, Link, Icon } from "framework7-react";

export enum Pages {
	home = 1,
	categories = 2,
	settings = 3
}

export type BottomBarProps = {
	tabIndex: Pages;
};

const BottomBar: React.FC<BottomBarProps> = props => {
	props = { tabIndex: Pages.home, ...props };
	return (
		<Toolbar tabbar bottom>
			<Link href={"/"} tabLinkActive={props.tabIndex === Pages.home}>
				<Icon icon="fas fa-home" />
			</Link>
			<Link
				href="/categories"
				tabLinkActive={props.tabIndex === Pages.categories}
			>
				<Icon icon="fas fa-ruble-sign" />
			</Link>
			<Link
				href="/settings"
				tabLinkActive={props.tabIndex === Pages.settings}
			>
				<Icon icon="fas fa-cog" />
			</Link>
		</Toolbar>
	);
};

BottomBar.displayName = "f7-toolbar";
export default BottomBar;
