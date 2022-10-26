import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const useTechSetup = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchTechSetup: async() => {
                const { data } = await news.get(`tech/setup`);

                set(produce((state) => {
                    state.news = data;
                    state.newsReady = true;
                }))

            },
        }), {
            name: 'game-news-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectTechSetup = (state) => state.news;
export const selectFetchTechSetup = (state) => state.fetchTechSetup;
export const selectTechSetupReady = (state) => state.newsReady;

export default useTechSetup;