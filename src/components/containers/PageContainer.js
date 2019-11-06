import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RoutedBreadcrumbs from '../common/RoutedBreadcrumbs';
import SidebarStepperMenu from '../common/SidebarStepperMenu';
import FormModal from '../modals/FormModal';
import SelectMenu from '../formInputs/SelectMenu';
import KpButton from '../formInputs/KpButton';

const useStyles = makeStyles(theme => ({
	root: {},
}));

const PageContainer = () => {
	return (
		<>
			<RoutedBreadcrumbs />
			<FormModal />
			<SelectMenu />
			<KpButton buttonText="Click me" />
		</>
	);
};

export default PageContainer;
