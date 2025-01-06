import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import DashboardWrapper from '@/components/DashboardWrapper';

export const metadata: Metadata = {
	title: 'Inventory Dashboard'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<DashboardWrapper>{children}</DashboardWrapper>
			</body>
		</html>
	);
}
