import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const useDetailStore = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchDetail: async(url) => {
                const { data } = await news.get(`detail/${url}`);

                set(produce((state) => {
                    state.news = data.results;
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
export const selectDetail = (state) => state.news;
export const selectFetchDetail = (state) => state.fetchDetail;
export const selectDetailReady = (state) => state.newsReady;

export default useDetailStore;