import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import news from '../../apis/tlm';

const initialNews = [];

const useGameTerbaru = create(
    persist(
        (set) => ({
            news: initialNews,
            newsReady: false,
            fetchGame: async() => {
                const { data } = await news.get(`games/pc`);

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
export const selectGameTerbaru = (state) => state.news;
export const selectFetchGameTerbaru = (state) => state.selectFetchGameTerbaru;
export const selectGameTerbaruReady = (state) => state.newsReady;

export default useGameTerbaru;