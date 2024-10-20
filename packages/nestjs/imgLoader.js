//https://nextjs.org/docs/app/building-your-application/deploying/static-exports#image-optimization
function imageLoader({ src }) {
    return `/images/${src}`; 
  }
  
  module.exports = imageLoader;