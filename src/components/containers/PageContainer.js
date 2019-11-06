import React from 'react';
import RoutedBreadcrumbs from '../common/RoutedBreadcrumbs';
import FormModal from '../modals/FormModal';
import ThemedSelectMenu from '../formInputs/ThemedSelectMenu';
import ThemedButton from '../formInputs/ThemedButton';


const PageContainer = () => {
	return (
		<>
			<RoutedBreadcrumbs />
			<FormModal />
			<ThemedSelectMenu />
			<ThemedButton buttonText="Click me" />
		</>
	)
};

export default PageContainer;
