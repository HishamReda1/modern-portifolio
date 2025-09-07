/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,    // يُفضل تركه مفعّل للتنبيهات المبكرة في التطوير
    swcMinify: true,          // لتسريع بناء المشروع وتصغير حجم الباندل
    images: {
        domains: [],            // ضع هنا أي دومينات ستستخدمها للصور إذا لزم
    },
    experimental: {
        appDir: true,           // لو مشروعك يستخدم الـ /app directory في Next.js 13+
    },
    eslint: {
        ignoreDuringBuilds: true, // يتجاهل أخطاء eslint أثناء البناء (اختياري)
    },
};

module.exports = nextConfig;
