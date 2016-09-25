import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export const MainLayout = ({content}) => (
	<main>
		<Header />
			<div className="content">
			{content}
			</div>
		<Footer />
	</main>
);
