import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../apis/nytimes';

const initialNews = [];

const useBeritaTerakhirStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchHeadline: async(limit) => {
                const { data } = await news.get(`news/v3/content/all/all.json?limit=${limit}`);

                set(produce((state) => {
                    state.news = data.results;
                    state.headlineReady = true;
                }))

            },
        }), {
            name: 'headline-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectHeadline = (state) => state.news;
export const selectFetchHeadline = (state) => state.fetchHeadline;

export const selectHeadlineReady = (state) => state.headlineReady;

export default useBeritaTerakhirStore;