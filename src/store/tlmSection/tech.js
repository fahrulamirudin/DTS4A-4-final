import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const useTechStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchTech: async() => {
                const { data } = await news.get(`tech`);

                set(produce((state) => {
                    state.news = data;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'tech-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectTech = (state) => state.news;
export const selectFetchTech = (state) => state.fetchTech;
export const selectTechReady = (state) => state.newsReady;

export default useTechStore;