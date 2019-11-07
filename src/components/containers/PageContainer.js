import React from 'react';
import RoutedBreadcrumbs from '../common/RoutedBreadcrumbs';
import FormModal from '../modals/FormModal';
import ThemedSelectMenu from '../formInputs/ThemedSelectMenu';
import ThemedButton from '../formInputs/ThemedButton';
import SidebarStepperMenu from '../common/SidebarStepperMenu'
const steps = [['step1', 'step2']];

const PageContainer = () => {
	return (
		<>
			<RoutedBreadcrumbs />
			<SidebarStepperMenu steps={steps} />
			<ThemedSelectMenu />
			<ThemedButton buttonText="Click me" />
		</>
	)
};

export default PageContainer;
