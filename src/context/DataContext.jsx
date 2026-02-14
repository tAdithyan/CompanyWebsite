import React, { createContext, useContext, useState, useEffect } from "react";

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    // --- BLOGS ---
    const [blogs, setBlogs] = useState(() => {
        const saved = localStorage.getItem("app_blogs");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem("app_blogs", JSON.stringify(blogs));
    }, [blogs]);

    const addBlog = (blog) => {
        const newBlog = { ...blog, id: Date.now(), date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) };
        setBlogs([newBlog, ...blogs]);
    };

    const updateBlog = (id, updatedData) => {
        setBlogs(blogs.map(b => b.id === id ? { ...b, ...updatedData } : b));
    };

    const deleteBlog = (id) => {
        setBlogs(blogs.filter(b => b.id !== id));
    };

    // --- OFFERS ---
    const [offers, setOffers] = useState(() => {
        const saved = localStorage.getItem("app_offers");
        return saved ? JSON.parse(saved) :  [];
    });

    useEffect(() => {
        localStorage.setItem("app_offers", JSON.stringify(offers));
    }, [offers]);

    const addOffer = (offer) => {
        const newOffer = { ...offer, id: Date.now() };
        setOffers([newOffer, ...offers]);
    };

    const updateOffer = (id, updatedData) => {
        setOffers(offers.map(o => o.id === id ? { ...o, ...updatedData } : o));
    };

    const deleteOffer = (id) => {
        setOffers(offers.filter(o => o.id !== id));
    };

    // --- MOCK VISITS (For Charts) ---
    // Simulate some static data for the dashboard charts
    const visitsData = [
        { name: "New York", visitors: 400 },
        { name: "London", visitors: 300 },
        { name: "Tokyo", visitors: 200 },
        { name: "Dubai", visitors: 500 },
        { name: "Paris", visitors: 250 },
    ];

    const pageViewsData = [
        { name: "Mon", views: 1200 },
        { name: "Tue", views: 1900 },
        { name: "Wed", views: 1500 },
        { name: "Thu", views: 2200 },
        { name: "Fri", views: 2800 },
        { name: "Sat", views: 1800 },
        { name: "Sun", views: 1400 },
    ];

    return (
        <DataContext.Provider value={{
            blogs, addBlog, updateBlog, deleteBlog,
            offers, addOffer, updateOffer, deleteOffer,
            visitsData, pageViewsData
        }}>
            {children}
        </DataContext.Provider>
    );
};
