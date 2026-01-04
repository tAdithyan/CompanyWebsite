import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Tag, ArrowUpRight } from "lucide-react";
import Header from "../components/header";
import { Footer } from "../components/Footer";
import { blogs } from "../data/blogs";

const SingleBlogPage = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen bg-[#EBEBEB] flex items-center justify-center font-['Urbanist']">
                <div className="text-center">
                    <h1 className="text-4xl font-bold font-['Oswald'] text-[#111827] mb-4">Blog Not Found</h1>
                    <Link to="/blogs" className="text-[#FF8A00] font-bold hover:underline flex items-center justify-center gap-2">
                        <ArrowLeft size={20} /> Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    // Get random related posts (excluding current)
    const relatedPosts = blogs
        .filter(b => b.id !== blog.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

    return (
        <div className="min-h-screen bg-[#EBEBEB] text-[#111827] relative overflow-x-hidden">
            <Header />

            {/* Progress Bar (Optional) */}
            <motion.div
                className="fixed top-0 left-0 h-1 bg-[#FF8A00] z-50 origin-left"
                style={{ scaleX: 0 }} // Placeholder for scroll progress logic
            />

            <main className="font-['Urbanist'] pt-24 md:pt-32 pb-20">
                {/* 1. Article Header & Hero */}
                <article className="max-w-4xl mx-auto px-6">
                    {/* Breadcrumb */}
                    <Link to="/blogs" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#FF8A00] transition-colors mb-8 text-sm font-bold uppercase tracking-wider">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>

                    {/* Title & Meta */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 mb-6 bg-white px-4 py-1.5 rounded-full shadow-sm text-xs font-bold text-[#FF8A00] uppercase tracking-wider mx-auto">
                            <Tag className="w-3 h-3" />
                            {blog.category}
                        </div>

                        <h1 className="font-['Oswald'] text-4xl md:text-6xl font-bold text-[#111827] mb-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 font-medium">
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                    <img src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`} alt={blog.author} />
                                </div>
                                <span className="text-[#111827] font-bold">{blog.author}</span>
                            </div>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {blog.date}</span>
                            <span className="w-1 h-1 bg-gray-300 rounded-full" />
                            <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {blog.readTime}</span>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.1)] mb-16 aspect-video">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Body */}
                    <div
                        className="prose prose-lg prose-gray max-w-none 
                        prose-headings:font-['Oswald'] prose-headings:font-bold prose-headings:text-[#111827]
                        prose-p:font-['Urbanist'] prose-p:text-gray-600 prose-p:leading-relaxed
                        prose-a:text-[#FF8A00] prose-a:no-underline hover:prose-a:underline
                        prose-blockquote:border-l-[#FF8A00] prose-blockquote:bg-white prose-blockquote:py-4 prose-blockquote:px-8 prose-blockquote:rounded-r-xl prose-blockquote:shadow-sm prose-blockquote:not-italic
                        prose-strong:text-[#111827]
                        mb-20"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Share / Tags Footer */}
                    <div className="border-t border-gray-200 pt-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="font-bold text-[#111827]">
                            Share this article:
                        </div>
                        <div className="flex gap-4">
                            {['Twitter', 'LinkedIn', 'Facebook'].map(platform => (
                                <button key={platform} className="px-4 py-2 bg-white rounded-full text-sm font-bold text-gray-600 shadow-sm hover:text-[#FF8A00] hover:shadow-md transition-all">
                                    {platform}
                                </button>
                            ))}
                        </div>
                    </div>
                </article>


            </main>

            <div className="font-['Urbanist']">
                <Footer />
            </div>
        </div>
    );
};

export default SingleBlogPage;
