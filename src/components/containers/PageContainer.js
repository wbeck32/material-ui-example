import React, { Fragments } from "react";
import RoutedBreadcrumbs from "../common/RoutedBreadcrumbs";
import SidebarStepperMenu from "../common/SidebarStepperMenu";
import ThemedButton from "../formInputs/ThemedButton";
import ThemedSelectMenu from "../formInputs/ThemedSelectMenu";

const steps = ['step1', 'step2']
const PageContainer = () => {
	return (
		<div>
			<RoutedBreadcrumbs />
			<SidebarStepperMenu steps={steps} />
			<ThemedSelectMenu />
			<ThemedButton buttonText="Click me" />
		</div>
	);
}
export default PageContainer;
