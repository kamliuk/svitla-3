import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(302, '/collection/summer-2020');
};