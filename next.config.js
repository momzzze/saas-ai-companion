/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true
    },
    images:{
        domains:['localhost','res.cloudinary.com']
    }
}

module.exports = nextConfig
