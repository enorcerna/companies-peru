import data from '@/data/company_data.json';
export const prerender = true;
//export const ssr = false;
export const load = () => {
	return {
		values: data
	};
};
